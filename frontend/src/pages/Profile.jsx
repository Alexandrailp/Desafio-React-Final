import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout, getProfile } = useContext(UserContext);
  const [profileEmail, setProfileEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      if (data && data.email) {
        setProfileEmail(data.email);
      }
    };
    fetchProfile();
  }, [getProfile]);

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <div className="container mt-5">
      <div
        className="mx-auto p-4 rounded"
        style={{
          maxWidth: "450px",
          backgroundColor: "#181a1b",
          border: "1px solid #444",
        }}
      >
        <h2 className="text-center text-white mb-4">Perfil</h2>

        <hr className="mb-4 text-white" />

        <div className="mb-4">
          <label className="form-label text-white">Email</label>

          <div
            className="px-3 py-2 rounded"
            style={{
              backgroundColor: "#1c1f23",
              border: "1px solid #444",
              color: "#fff",
            }}
          >
            {profileEmail || "Cargando..."}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-warning w-100 text-dark fw-bold py-2"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;