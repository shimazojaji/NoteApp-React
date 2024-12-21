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
        <h2>✅ No Notes has already been add.🤨</h2>
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
