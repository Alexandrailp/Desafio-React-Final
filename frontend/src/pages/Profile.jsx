const Profile = () => {
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

        <hr className="mb-4" />

        {/* EMAIL */}
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
            usuario@test.com
          </div>
        </div>

        <button className="btn btn-warning w-100 text-dark fw-bold py-2">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;