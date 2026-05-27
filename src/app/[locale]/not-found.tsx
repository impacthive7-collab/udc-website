export default function NotFound() {
  return (
    <div style={{ background: "#050a14", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "8rem", fontWeight: 900, color: "#1a4591", lineHeight: 1 }}>404</div>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem" }}>Page not found</p>
        <a href="/en" style={{ display: "inline-block", marginTop: "2rem", background: "#1a4591", color: "white", padding: "0.875rem 2rem", borderRadius: "0.75rem", textDecoration: "none", fontWeight: 600 }}>
          Go Home
        </a>
      </div>
    </div>
  );
}
