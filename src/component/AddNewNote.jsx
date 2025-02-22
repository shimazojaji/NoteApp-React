import { useState } from "react";
import { useNoteDispatch } from "../context/NoteContext";
function AddNewNote() {
  const dispatch = useNoteDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="note__add">
      <h2>Add New Note</h2>
      <form className="note__form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="input"
          placeholder="Note title..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          maxLength={30}
          className="input"
          placeholder="Note description..."
        />
        <button type="submit" className="note__btn">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
