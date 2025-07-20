
import React from "react";
import { useState, useEffect } from "react";

const NoteForm = ({ onSubmit, selectedNote, clearSelected }) => {
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    if (selectedNote) setForm({ title: selectedNote.title, content: selectedNote.content });
  }, [selectedNote]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Contenido"
        value={form.content}
        onChange={handleChange}
        required
      />
      <button type="submit">{selectedNote ? "Actualizar" : "Crear"} Nota</button>
      {selectedNote && <button onClick={clearSelected}>Cancelar</button>}
    </form>
  );
};

export default NoteForm;