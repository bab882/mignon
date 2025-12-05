import React, { useEffect, useRef, useState } from 'react';
import troll from '../../assets/audio/Enregistrement.m4a';

const Song = () => {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startAudio = () => {
    if (started) return; // évite plusieurs déclenchements
    setStarted(true);

    const audio = audioRef.current;
    audio.muted = true;
    audio.volume = 0;

    audio.play().then(() => {
      console.log("Audio lancé en silencieux");

      setTimeout(() => {
        audio.muted = false;
        audio.volume = 1;
        console.log("Volume activé !");
      }, 2000);
    });
  };

  useEffect(() => {
    // Premier clic OU premier scroll OU premier touch => on lance l'audio
    const events = ["click", "touchstart"];
    events.forEach(e => window.addEventListener(e, startAudio));

    return () =>
      events.forEach(e => window.removeEventListener(e, startAudio));
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src={troll}
        playsInline
        style={{ width: 0, height: 0 }}
      />
    </div>
  );
};

export default Song;
