import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p>
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
        </p>
    </div>
  );
};

export default LoginPage;

