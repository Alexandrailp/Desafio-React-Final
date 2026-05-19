# 🍕 Pizzería Mamma Mía - React

Proyecto final desarrollado en React para el módulo de React de la academia Desafío Latam.

## 🚀 Descripción

Aplicación web de una pizzería que simula un e-commerce completo. Permite:

- Visualizar un catálogo de pizzas consumidas desde una API.
- Navegar dinámicamente entre distintas vistas mediante React Router DOM.
- Manejar el carrito de compras con Context API (agregar, quitar, vaciar y calcular total).
- Mostrar el total del carrito actualizado en tiempo real en el Navbar.
- Registro e inicio de sesión de usuarios con autenticación real (JWT).
- Rutas protegidas: Acceso exclusivo a `/profile` y pago en `/cart` solo para usuarios autenticados.
- Persistencia de sesión utilizando `localStorage`.
- Envío del carrito de compras al backend (Checkout).

## 🛠 Tecnologías

### Frontend
- React
- React Router DOM
- Context API
- Bootstrap
- Fetch API

### Backend
- Node.js
- Express
- JWT (JSON Web Tokens) para autenticación

---

## 📦 Instalación y Ejecución

El proyecto está dividido en dos partes. Necesitas tener ambas corriendo en terminales distintas para que la aplicación funcione por completo.

### 🔌 1. Backend (API)
Este proyecto utiliza un backend de apoyo para servir las pizzas y manejar la base de datos de usuarios.

```bash
# Navegar a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Iniciar el servidor
npm start
```
El servidor se ejecutará en: http://localhost:5000

### 💻 1. Frontend (React)

```bash
# Navegar a la carpeta del backend
cd frontend

# Instalar dependencias
npm install

# Iniciar el servidor
npm run dev
```
La aplicación de React se ejecutará en: http://localhost:5173

### 📡 Endpoints Utilizados

Durante el desarrollo de los hitos, se consumieron las siguientes rutas de la API:

#### Catálogo:

- GET http://localhost:5000/api/pizzas - Obtiene todas las pizzas.

- GET http://localhost:5000/api/pizzas/:id - Obtiene el detalle de una pizza específica.

Autenticación y Usuario (Hito 8):

- POST http://localhost:5000/api/auth/register - Registra un nuevo usuario.

- POST http://localhost:5000/api/auth/login - Inicia sesión y devuelve un token JWT.

- GET http://localhost:5000/api/auth/me - Obtiene los datos del usuario autenticado (Requiere Header: Authorization: Bearer token_jwt).

Checkout (Hito 8):

- POST http://localhost:5000/api/checkouts - Envía el carrito de compras (Requiere Header con token JWT).

## 🌐 Despliegue

Puedes ver la aplicación en vivo aquí: https://desafio-react-final.vercel.app/

(Nota: Al estar el backend configurado en entorno local, las funciones de carrito y login en el deploy requieren que el backend también esté desplegado para operar correctamente).
