function Error({ statusCode }: { statusCode: number }) {
  return (
    <div style={{ background: "#050a14", color: "white", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "6rem", fontWeight: 900, color: "#1a4591", margin: 0 }}>{statusCode}</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: "1rem" }}>
          {statusCode === 404 ? "Page not found" : "An error occurred"}
        </p>
        <a href="/en" style={{ display: "inline-block", marginTop: "2rem", background: "#1a4591", color: "white", padding: "0.875rem 2rem", borderRadius: "0.75rem", textDecoration: "none", fontWeight: 600 }}>
          Go Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
