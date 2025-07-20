const API_URL = 'http://localhost:3000/api/notes';

export async function getNotas(token) {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function crearNota(nota, token) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(nota),
  });
}
