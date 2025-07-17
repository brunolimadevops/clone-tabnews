import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "5rem",
          marginBottom: "1rem",
          color: "#6366f1",
          animation: "bounce 1.5s infinite",
        }}
      >
        🚧
      </div>
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#334155",
          marginBottom: "0.5rem",
        }}
      >
        Página em Construção
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#64748b",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        Estamos trabalhando para trazer novidades em breve. Volte mais tarde
        para conferir!
      </p>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default Home;
