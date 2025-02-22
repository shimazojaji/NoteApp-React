
function NoteFilter({ sortBy, onSort }) {
  return (
    <div className="note__radio" value={sortBy} onChange={onSort}>
    <input value="latest" name="value-radio" id="value-1" type="radio" />
    <label htmlFor="value-1">Latest Notes</label>
    <input value="earliest" name="value-radio" id="value-2" type="radio" />
    <label htmlFor="value-2">Earliest Notes</label>
    <input value="completed" name="value-radio" id="value-3" type="radio" />
    <label htmlFor="value-3">Completed Notes</label>
  </div>
  )
}

export default NoteFilter

