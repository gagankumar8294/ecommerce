// pages/login.js (Next.js)
export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3200/auth/google";
  };

  return (
    <div style={{paddingTop: '200px'}} className="login-container">
      <h1>Login to ElitePurchase</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}
