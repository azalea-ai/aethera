import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("");
  const [event, setEvent] = useState(null);

  const roles = ["Country", "Company", "Investor"];
  const sampleEvents = [
    "Global AI strike disrupts supply chains.",
    "Breakthrough in fusion energy disrupts oil trade.",
    "Cyberattack cripples Southeast Asia’s supply chain."
  ];

  const startSimulation = () => {
    const randomEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
    setEvent(randomEvent);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Aethera</h1>
      <p>Choose your role:</p>
      <div style={{ marginBottom: "1rem" }}>
        {roles.map((r) => (
          <button key={r} onClick={() => setRole(r)} style={{ marginRight: "1rem" }}>
            {r}
          </button>
        ))}
      </div>
      <button onClick={startSimulation} disabled={!role}>
        Enter Simulation
      </button>
      {event && (
        <div style={{ marginTop: "1rem" }}>
          <strong>World Event:</strong> {event}
        </div>
      )}
    </main>
  );
}

