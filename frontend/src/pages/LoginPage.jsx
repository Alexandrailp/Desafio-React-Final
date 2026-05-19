import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Error: Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("Error: El password debe tener al menos 6 caracteres");
      return;
    }

    alert("¡Login exitoso! Bienvenido.");
  };

  return (
    <div className="main-content bg-dark">
      <form className="p-5 rounded shadow-lg border border-secondary" 
        style={{ backgroundColor: '#181a1b', width: '400px' }} 
        onSubmit={validarLogin}>

        <h2 className="text-center text-white mb-4">Ingresar</h2>
        <hr className="text-white mb-4" />
        
        <div className="mb-3 text-center">
          <label className="form-label text-white fw-bold">Email</label>
          <input
            type="email"
            className="form-control bg-dark text-white border-secondary shadow-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-3 text-center">
          <label className="form-label text-white fw-bold">Contraseña</label>
          <input
            type="password"
            className="form-control bg-dark text-white border-secondary shadow-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-warning w-100 fw-bold py-2">Ingresar</button>
      </form>
    </div>
  );
};

export default LoginPage;