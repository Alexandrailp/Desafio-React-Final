import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError(true);
      setSuccess(false);
      alert("Error: Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError(true);
      setSuccess(false);
      alert("Error: El password debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setSuccess(false);
      alert("Error: El password y la confirmación deben ser iguales");
      return;
    }

    setError(false);
    setSuccess(true);
    alert("¡Registro exitoso!");
  };

  return (
    <div className="main-content bg-dark"> 
      <form className="p-5 rounded shadow-lg border border-secondary" 
        style={{ backgroundColor: '#181a1b', width: '400px' }}
        onSubmit={validarDatos}>

        <h2 className="text-center text-white mb-4">Registro de Usuario</h2>
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

        <div className="mb-4 text-center">
          <label className="form-label text-white fw-bold">Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control bg-dark text-white border-secondary shadow-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-warning w-100 fw-bold py-2">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;