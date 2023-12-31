import {useState} from "react";

export default function Player({initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleBtnEdit() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    // console.log(event)
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleBtnEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}