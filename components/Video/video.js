// import React, { useState, useEffect } from "react";
// import { View, Button } from "react-native";
// import { RTCPeerConnection, RTCView, mediaDevices } from "react-native-webrtc";

// const VideoChat = () => {
//   const [localStream, setLocalStream] = useState(null);
//   const [remoteStream, setRemoteStream] = useState(null);
//   const [isCalling, setIsCalling] = useState(false);
//   const [peerConnection, setPeerConnection] = useState(null);

//   useEffect(() => {
//     const startLocalStream = async () => {
//       const stream = await mediaDevices.getUserMedia({
//         audio: true,
//         video: true,
//       });
//       setLocalStream(stream);
//     };
//     startLocalStream();
//   }, []);

//   const createPeerConnection = () => {
//     const pc = new RTCPeerConnection({
//       iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
//     });

//     pc.onaddstream = (event) => {
//       setRemoteStream(event.stream);
//     };

//     pc.addStream(localStream);

//     return pc;
//   };

//   const startCall = () => {
//     const pc = createPeerConnection();
//     setIsCalling(true);
//     setPeerConnection(pc);
//   };

//   const endCall = () => {
//     peerConnection.close();
//     setPeerConnection(null);
//     setIsCalling(false);
//   };

//   return (
//     <View>
//       {localStream && (
//         <RTCView
//           streamURL={localStream.toURL()}
//           style={{ width: 200, height: 150 }}
//         />
//       )}
//       {remoteStream && (
//         <RTCView
//           streamURL={remoteStream.toURL()}
//           style={{ width: 200, height: 150 }}
//         />
//       )}
//       {!isCalling && <Button title="Start Call" onPress={startCall} />}
//       {isCalling && <Button title="End Call" onPress={endCall} />}
//     </View>
//   );
// };

// export default VideoChat;
