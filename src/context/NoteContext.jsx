import { createContext, useContext } from "react";
import { useReducer } from "react";

const NotesContex = createContext(null);
const NotesDispatchContext = createContext(null);
function notesReducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unkown Error " + action.type);
  }
}
export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContex.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContex.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContex);
}

export function useNoteDispatch() {
  return useContext(NotesDispatchContext);
}
