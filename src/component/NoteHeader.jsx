import { useNotes } from "../context/NoteContext";
function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note__header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort} className="note__options">
        <option value="latest"> Latest Notes</option>
        <option value="earliest"> Earliest Notes</option>
        <option value="completed"> Completed Notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
