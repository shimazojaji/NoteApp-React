import { useNotes } from "../context/NoteContext";
import Message from "./Message";

function NoteStatus() {
  // derived state
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = allNotes - completedNotes;
  if (!allNotes)
    return (
      <Message>
        <span className="note__message"> No Notes has already been add.</span>
        <div className="custom-line"></div>
      </Message>
    );
  return (
    <ul className="note__status">
      <li>
        All<span>{allNotes}</span>
      </li>
      <li>
        Completed<span>{completedNotes}</span>
      </li>
      <li>
        Open<span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
