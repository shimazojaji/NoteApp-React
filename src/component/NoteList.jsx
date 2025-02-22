import { useNotes } from "../context/NoteContext";
import { useNoteDispatch } from "../context/NoteContext";
import Bin from "./Bin";
import CheckBox from "./CheckBox";

export function NoteList({ sortBy }) {
  const notes = useNotes();
  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(b.completed) - Number(a.completed)
    );

  return (
    <div>
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function NoteItem({ note }) {
  const dispatch = useNoteDispatch();

  return (
    <div className="note__items ">
      <div className={`note__item ${note.completed ? "completed" : " "}`}>
        <div className="note__container">
          <p className="note__title">{note.title}</p>
          <p className="note__desc">{note.description}</p>
        </div>
        <div className="note__actions ">
          <Bin onClick={() => dispatch({ type: "delete", payload: note.id })} />
          <CheckBox
            type={"checkbox"}
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
            checked={note.completed}
          />

          {/*  <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
            checked={note.completed}
      
          /> */}
        </div>
      </div>
      <div className="note__date">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
