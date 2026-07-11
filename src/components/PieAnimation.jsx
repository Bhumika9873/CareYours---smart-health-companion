import { useEffect, useState } from "react";

export default function PieAnimation() {
  const [progress, setProgress] = useState(0);
  const target = 62;

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start++;
      setProgress(start);
      if (start >= target) clearInterval(interval);
    }, 20); // speed control
  }, []);

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: `conic-gradient(#A8D38D ${progress}%, #E7FFCE 0)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease"
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "600",
          color: "#2F4F2F",
          fontSize: "18px",
          transition: "all 0.3s ease"
        }}
      >
        {progress}%
      </div>
    </div>
  );
}