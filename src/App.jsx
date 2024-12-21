import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";
import { NotesProvider } from "./context/NoteContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  return (
    <NotesProvider>
      <div className="note">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />

        <div className="note__body">
          <AddNewNote />
          <div className="note__lists">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
