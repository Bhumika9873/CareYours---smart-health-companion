export default function PieAnimation() {
  return (
    <div style={{
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      background: "conic-gradient(#2ECC71 62%, #F5B7CF 0)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold"
      }}>
        62%
      </div>
    </div>
  );
}