import personalInfo from "@/app/personal-info.json";

/** Shared 1200×630 social preview artwork, rendered by `next/og`. */
export function OgImageCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f7f6f2",
        fontFamily: "sans-serif",
        color: "#1c1917",
      }}
    >
      <div
        style={{
          height: 10,
          width: "100%",
          backgroundImage:
            "linear-gradient(120deg, #166534 0%, #15803d 45%, #34d399 100%)",
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{ width: 14, height: 14, background: "#15803d", display: "flex" }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#57534e",
            }}
          >
            Available for new opportunities
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700 }}>
            {personalInfo.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 38,
              color: "#15803d",
            }}
          >
            Tech Lead · React.js · Node.js · TypeScript
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #e5e1d8",
            paddingTop: 28,
            fontSize: 28,
            color: "#8a847c",
          }}
        >
          <div style={{ display: "flex" }}>syedfaizan.dev</div>
          <div style={{ display: "flex" }}>
            11+ years · Full-stack engineering leadership
          </div>
        </div>
      </div>
    </div>
  );
}
