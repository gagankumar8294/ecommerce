// components/LoginButton.js
export default function LoginButton() {
  const handleLogin = () => {
    window.open("https://elitepurchase-backend.onrender.com/api/auth/google", "_self");
  };

  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        background: "linear-gradient(135deg, #f9f9f9, #eef2f3)",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        padding: "2rem",
        maxWidth: "400px",
        margin: "3rem auto",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#333",
          marginBottom: "1.5rem",
          fontWeight: "600",
        }}
      >
        Sign in to ElitePurchase
      </h2>

      <button
        onClick={handleLogin}
        style={{
          background: "#4285F4",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "30px",
          cursor: "pointer",
          fontSize: "1rem",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 3px 8px rgba(66, 133, 244, 0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#3367D6";
          e.currentTarget.style.boxShadow =
            "0 5px 12px rgba(66, 133, 244, 0.5)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#4285F4";
          e.currentTarget.style.boxShadow =
            "0 3px 8px rgba(66, 133, 244, 0.4)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          style={{ width: "20px", height: "20px" }}
        />
        Sign in with Google
      </button>

      <p
        style={{
          marginTop: "1.2rem",
          color: "#555",
          fontSize: "0.95rem",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Access exclusive shopping features!
      </p>
    </div>

    {/* fade-in animation */}
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(15px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </>
  );
}
