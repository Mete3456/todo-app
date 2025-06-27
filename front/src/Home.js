import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const addTask = () => {
        const taskText = input.trim();
        if (taskText) {
            setTasks([...tasks, taskText]);
            setInput("");
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{
            maxWidth: "400px",
            margin: "40px auto",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            background: "#fff",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        background: "#666",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "6px 16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginBottom: "10px"
                    }}
                >
                    Quit
                </button>
            </div>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Task List</h2>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                <input
                    id="task-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task"
                    style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "6px",
                        fontSize: "16px"
                    }}
                />
                <button
                    id="add-task-button"
                    onClick={addTask}
                    style={{
                        padding: "8px 16px",
                        background: "#0078d4",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Add
                </button>
            </div>
            <ul id="task-list" style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task, index) => (
                    <li
                        key={typeof task === "string" ? task + '-' + index : task.text + '-' + index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "8px 0",
                            borderBottom: index !== tasks.length - 1 ? "1px solid #eee" : "none"
                        }}
                    >
                        <span
                            style={{
                                color: "#444",
                                textDecoration: task.completed ? "line-through" : "none"
                            }}
                        >
                            {typeof task === "string" ? task : task.text}
                        </span>
                        <div style={{ display: "flex", gap: "6px" }}>
                            <button
                                onClick={() => {
                                    setTasks(tasks.map((t, i) =>
                                        i === index
                                            ? { ...(typeof t === "string" ? { text: t, completed: true } : t), completed: !(t.completed) }
                                            : t
                                    ));
                                }}
                                style={{
                                    background: "#107c10",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    padding: "4px 10px",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                }}
                            >
                                Complete
                            </button>
                            <button
                                onClick={() => deleteTask(index)}
                                style={{
                                    background: "#e81123",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    padding: "4px 10px",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;