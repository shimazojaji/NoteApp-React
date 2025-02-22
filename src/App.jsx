import "./App.css";
import NoteHeader from "./component/NoteHeader";
import { NotesProvider } from "./context/NoteContext";
import NoteBody from "./component/NoteBody";

function App() {
  return (
    <NotesProvider>
      <div className="note">
        <NoteHeader />
        <div className="custom-line"></div>
        <NoteBody />
      </div>
    </NotesProvider>
  );
}

export default App;
