import React, { useState } from "react";

export default function ExerciseSection({ topic, problems }) {
  const [responses, setResponses] = useState({});

  const handleInputChange = (index, field, value) => {
    setResponses({
      ...responses,
      [index]: { ...responses[index], [field]: value },
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#944a81ff" }}>{topic} - Exercises</h2>

      {problems.map((problem, index) => (
        <div
          key={index}
          style={{
            margin: "20px 0",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "#1f1f1f",
          }}
        >
          <h3 style={{ color: "#370d5cff" }}>Problem {index + 1}</h3>
          <p>{problem}</p>

          {/* Answer box */}
          <textarea
            placeholder="Write your solution here..."
            value={responses[index]?.answer || ""}
            onChange={(e) => handleInputChange(index, "answer", e.target.value)}
            style={{
              width: "100%",
              minHeight: "80px",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #333",
              backgroundColor: "#222",
              color: "#fff",
            }}
          ></textarea>

          {/* Yes/No checkbox */}
          <div style={{ marginTop: "10px" }}>
            <label style={{ marginRight: "15px" }}>
              <input
                type="radio"
                name={`status-${index}`}
                value="yes"
                checked={responses[index]?.status === "yes"}
                onChange={() => handleInputChange(index, "status", "yes")}
              />{" "}
              Solved (Yes)
            </label>
            <label>
              <input
                type="radio"
                name={`status-${index}`}
                value="no"
                checked={responses[index]?.status === "no"}
                onChange={() => handleInputChange(index, "status", "no")}
              />{" "}
              Not Solved (No)
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}
