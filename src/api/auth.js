const API_BASE = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    throw new Error("Error al iniciar sesión");
  }

  return await res.json(); // contiene el token
};