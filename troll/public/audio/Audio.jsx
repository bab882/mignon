import { useRef } from "react";
import troll from "../../assets/audio/Enregistrement.m4a";

export default function AudioTest() {
  const audioRef = useRef(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test Audio</h2>
      <audio ref={audioRef} src={troll} autoPlay  />
      {/* <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button> */}
    </div>
  );
}
