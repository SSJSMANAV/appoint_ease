import { db } from "../firebase";

export const sendTextMessage = async (userId, doctorId, patientId, message) => {
  let sentTo, sentBy;
  if (userId === patientId) {
    sentTo = doctorId;
    sentBy = patientId;
  } else {
    sentTo = patientId;
    sentBy = doctorId;
  }

  const currentTimeInMilliseconds = new Date().getTime();
  console.log(currentTimeInMilliseconds);
  try {
    await db
      .collection(`chats/${doctorId + patientId}/messages`)
      .doc(currentTimeInMilliseconds.toString())
      .set({
        messageId: currentTimeInMilliseconds,
        read: "",
        message: message,
        sentBy: sentBy,
        sentTo: sentTo,
        createdAt: currentTimeInMilliseconds,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        throw Error(e.message);
      });
  } catch (e) {
    throw Error(e.message);
  }
};

export const subscribeToChat = (doctorId, patientId, limit, onUpdate) => {
  try {
    const collectionRef = db
      .collection(`chats/${doctorId + patientId}/messages`)
      .orderBy("createdAt", "desc")
      .limit(limit);
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data());
      onUpdate(messages);
    });

    return unsubscribe;
  } catch (e) {
    throw Error(e.message);
  }
};

export const fetchLastChatMessage = (doctorId, patientId, onUpdate) => {
  try {
    const collectionRef = db
      .collection(`chats/${doctorId + patientId}/messages`)
      .orderBy("createdAt", "desc")
      .limit(1);

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data());
      console.log(messages);
      onUpdate(messages);
    });

    return unsubscribe;
  } catch (e) {
    throw Error(e.message);
  }
};

export const bookmarkTheDoctor = async (doctorId, doctor, user) => {
  const currentTimeInMilliseconds = new Date().getTime();
  try {
    await db
      .collection(`doctors/${doctorId}/followers`)
      .doc(user._id)
      .set({
        ...user,
        userId: user._id,
        createdAt: currentTimeInMilliseconds,
      })
      .then(async () => {
        await db
          .collection(`patients/${user._id}/followings`)
          .doc(doctorId)
          .set({
            ...doctor,
            doctorId: doctorId,
            createdAt: currentTimeInMilliseconds,
          });
      })
      .catch((e) => {
        console.log(e.message);
        throw Error(e.message);
      });
  } catch (e) {
    throw Error(e.message);
  }
};

export const unBookmarkTheDoctor = async (doctorId, doctor, user) => {
  // const currentTimeInMilliseconds = new Date().getTime();
  try {
    await db
      .collection(`doctors/${doctorId}/followers`)
      .doc(user._id)
      .delete()
      .then(async () => {
        await db
          .collection(`patients/${user._id}/followings`)
          .doc(doctorId)
          .delete();
      })
      .catch((e) => {
        console.log(e.message);
        throw Error(e.message);
      });
  } catch (e) {
    throw Error(e.message);
  }
};

export const fetchTheChatUsers = async (role, userId) => {
  console.log("fetch the users");
  let users = [];

  try {
    if (role === "doctor") {
      const collectionRef = await db.collection(`doctors/${userId}/followers`);
      const snapshot = await collectionRef.get();

      users = snapshot.docs.map((doc) => doc.data());
      console.log(users);
      return users;
    } else {
      const collectionRef = await db.collection(
        `patients/${userId}/followings`
      );
      const snapshot = await collectionRef.get();

      users = snapshot.docs.map((doc) => doc.data());
      console.log(users);
      return users;
    }
  } catch (e) {
    throw Error(e.message);
  }
};

export const updateSeenStatus = async (doctorId, patientId, message) => {
  try {
    await db
      .collection(`chats/${doctorId + patientId}/messages`)
      .doc(message.messageId.toString())
      .update({ read: "read" })
      .then(() => {
        console.log("good");
        return;
      })
      .catch((e) => {
        console.log("bad");
        return;
      });
  } catch (e) {
    return;
  }
};
