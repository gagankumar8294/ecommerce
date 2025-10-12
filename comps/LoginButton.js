// components/LoginButton.js
export default function LoginButton() {
  const handleLogin = () => {
    window.open("https://elitepurchase-backend.onrender.com/api/auth/google", "_self");
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        background: "#4285F4",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Sign in with Google
    </button>
  );
}
