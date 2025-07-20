import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(form);
      localStorage.setItem("token", token);
      console.log(token);
      navigate("/notas");
    } catch (err) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        name="email"
        placeholder="Correo"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;