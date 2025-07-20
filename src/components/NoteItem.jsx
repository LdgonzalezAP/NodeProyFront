import React from "react";
const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 10 }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)}>✏️ Editar</button>
      <button onClick={() => onDelete(note._id)}>🗑️ Borrar</button>
    </div>
  );
};

export default NoteItem;