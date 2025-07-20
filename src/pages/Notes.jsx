import React from "react";
import { useEffect, useState } from "react";
import { fetchNotes, createNote, updateNote, deleteNote } from "../api/notes";
import NoteItem from "../components/NoteItem";
import NoteForm from "../components/NoteForm";
import { useNavigate } from "react-router-dom";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const navigate = useNavigate();

  const loadNotes = async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch (err) {
      console.error("Error al cargar notas:", err);
      navigate("/login");
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleCreateOrUpdate = async (note) => {
    if (selectedNote) {
      await updateNote(selectedNote._id, note);
    } else {
      await createNote(note);
    }
    await loadNotes();
    setSelectedNote(null);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    await loadNotes();
  };

  return (
    <div>
      <h1>Mis Notas</h1>
      <NoteForm
        onSubmit={handleCreateOrUpdate}
        selectedNote={selectedNote}
        clearSelected={() => setSelectedNote(null)}
      />
      <div>
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            onEdit={setSelectedNote}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;