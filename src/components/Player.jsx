import {useState} from "react";

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);

  function btnHandler() {

  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => btnHandler()}>Edit</button>
    </li>
  );
}