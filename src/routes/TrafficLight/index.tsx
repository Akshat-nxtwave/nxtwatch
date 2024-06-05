import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [state, setState] = useState({
    red: true,
    orange: false,
    green: false,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev.red) return { ...prev, red: false, orange: true };
        else if (prev.orange) return { ...prev, orange: false, green: true };
        else return { ...prev, green: false, red: true };
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <div
        style={{
          height: "100px",
          border: "1px solid black",
          width: "100px",
          backgroundColor: state.red ? "red" : "white",
          margin: "10px",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          height: "100px",
          border: "1px solid black",
          width: "100px",
          backgroundColor: state.orange ? "orange" : "white",
          margin: "10px",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          height: "100px",
          border: "1px solid black",
          width: "100px",
          backgroundColor: state.green ? "green" : "white",
          margin: "10px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default TrafficLight;
