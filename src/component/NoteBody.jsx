import { useState } from "react";
import { useNotes } from "../context/NoteContext";
import NoteFilter from "./NoteFilter";
import NoteStatus from "./NoteStatus";
import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";

function NoteBody() {
  const notes = useNotes();
  const allNotes = notes.length;
  const [sortBy, setSortBy] = useState("latest");
  return (
    <div className="body__wrapper">
      {allNotes>=2 ? (
        <div>
          <NoteFilter
            sortBy={sortBy}
            onSort={(e) => setSortBy(e.target.value)}
          />
          <div className="custom-line"></div>
        </div>
      ) : (
        ""
      )}

      <div className="note__body">
        <div className="note__lists">
          <NoteStatus />

          <NoteList sortBy={sortBy} />
        </div>
        <AddNewNote />
      </div>
    </div>
  );
}

export default NoteBody;
