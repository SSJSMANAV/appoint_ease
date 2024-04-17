// App.js
import React, { Component } from "react";
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from "@zegocloud/zego-uikit-prebuilt-call-rn";

export default function VoiceCallPage(props) {
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={1785251642}
        appSign={
          "1f63b34a4c50558f8fc5651c6e8de650ecba5e625992520551821f1dab549cee"
        }
        userID={userID} // userID can be something like a phone number or the user id on your own user system.
        userName={userName}
        callID={callID} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            props.navigation.navigate("HomePage");
          },
          onHangUp: () => {
            props.navigation.navigate("HomePage");
          },
        }}
      />
    </View>
  );
}
