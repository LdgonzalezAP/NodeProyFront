import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || 'Error al registrarse');
        return;
      }

      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/');
    } catch (err) {
      console.error('Error en el registro:', err);
      alert('Error de red');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;