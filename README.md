# 📒 App de Notas - Frontend

Este proyecto es el frontend de una aplicación de notas desarrollada con [Vite](https://vitejs.dev/), que permite a los usuarios registrarse, iniciar sesión y gestionar sus notas personales (crear, editar, borrar).

## 🧠 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- HTML5 + CSS3
- Fetch API
- JavaScript moderno (ES6+)

## 🚀 Funcionalidades

- Registro de usuarios
- Inicio de sesión
- Autenticación mediante JWT
- Visualización de notas del usuario
- Creación, edición y eliminación de notas
- Consumo de API REST desde backend

## 🌐 Backend

El frontend se conecta con un backend Node.js desplegado en [Render](https://render.com/). Puedes encontrar el repositorio del backend [aquí](https://github.com/LdgonzalezAP/NodeProy) 
Se utilizó  MongoDB Atlas para la base de Datos
La URL base de la API se define mediante una variable de entorno:

```env
VITE_API_URL=https://mi-backend.onrender.com/api
````

## 📂 Estructura del proyecto
src/
- api/          # Llamadas a la API (login, notas)
- components/   # Componentes de UI como formularios y layouts
- routes/       # Páginas: Login, Register, Notas
- App.jsx       # Rutas y navegación
- main.jsx      # Entrada principal de la app
  
## ✅ Estado del proyecto
✔️ Funcional y desplegado.

## Link para el sitio en linea
[aquí](https://incredible-melomakarona-cd0030.netlify.app/)
