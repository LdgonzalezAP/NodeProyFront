const API_BASE = import.meta.env.VITE_API_URL;
const API_URL = `${API_BASE}/notes`;

const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const fetchNotes = async () => {
  const res = await fetch(API_URL, {
    headers: getAuthHeaders(),
  });
  console.log(res);
  if (!res.ok) throw new Error("Error al obtener las notas");
  return res.json();
};

export const createNote = async (note) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error("Error al crear la nota");
  return res.json();
};

export const updateNote = async (id, note) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error("Error al actualizar la nota");
  return res.json();
};

export const deleteNote = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!res.ok) throw new Error("Error al eliminar la nota");
  return res.json();
};