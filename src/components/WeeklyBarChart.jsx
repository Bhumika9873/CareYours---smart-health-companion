export default function WeeklyBarChart() {
  const data = [30, 50, 40, 70, 60, 80, 65];

  return (
    <div style={{
      display: "flex",
      gap: "8px",
      alignItems: "flex-end",
      height: "100px"
    }}>
      {data.map((val, i) => (
        <div key={i} style={{
          width: "12px",
          height: val + "px",
          background: "#77cb9a",
          borderRadius: "6px"
        }}></div>
      ))}
    </div>
  );
}