import { useNotes } from "../context/NoteContext";
function NoteHeader() {
  const notes = useNotes();
  return (
    <div className="note__header">
      <h1>My Notes ({notes.length})</h1>
   
    </div>
  );
}

export default NoteHeader;
