import React, { useState } from "react";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: "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",
    dangerouslyAllowBrowser: true, // Enable browser-based access

});

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! How can I assist you with your medication or services today?" },

    ]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [suggestedPrompts, setSuggestedPrompts] = useState([
        "What are the side effects of Aspirin?",
        "Can you explain how to manage chronic diseases remotely?",
        "What are the benefits of using AR for medication tracking?",
        "How can I safely store my prescription data?",
        "What should I do if I miss a dose of my medication?",
    ]);

    const handleSend = async () => {
        if (!userInput.trim()) return;

        setMessages((prev) => [...prev, { role: "user", content: userInput }]);
        const userMessage = userInput;
        setUserInput("");
        setLoading(true);

        try {
            const response = await groq.chat.completions.create({
                messages: [...messages, { role: "user", content: userMessage }],
                model: "llama3-8b-8192",
            });

            const aiResponse = response.choices[0]?.message?.content || "No response from AI.";
            setMessages((prev) => [...prev, { role: "assistant", content: formatResponse(aiResponse) }]);
        } catch (error) {
            console.error("Error interacting with AI:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, something went wrong. Please try again." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const formatResponse = (response) => {
        return response
            .split("\n")
            .map((line, index) => (
                <p key={index} style={{ margin: "10px 0", color: "#333", lineHeight: "1.6" }}>
                    {line}
                </p>
            ));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "'Roboto', sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#007BFF" }}>AI Chatbot</h1>

            {/* Suggested Prompts */}
            <div
                style={{
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "15px",
                    marginBottom: "20px",
                }}
            >
                <h3 style={{ marginBottom: "10px", color: "#333" }}>Try asking:</h3>
                <ul style={{ paddingLeft: "20px" }}>
                    {suggestedPrompts.map((prompt, index) => (
                        <li
                            key={index}
                            style={{
                                cursor: "pointer",
                                color: "#007BFF",
                                textDecoration: "underline",
                                marginBottom: "5px",
                            }}
                            onClick={() => setUserInput(prompt)}
                        >
                            {prompt}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chat Window */}
            <div
                style={{
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    height: "300px",
                    overflowY: "auto",
                    marginBottom: "20px",
                }}
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: msg.role === "user" ? "right" : "left",
                            marginBottom: "10px",
                        }}
                    >
                        <strong>{msg.role === "user" ? "You" : "AI"}:</strong>{" "}
                        <span style={{ display: "inline-block", maxWidth: "80%" }}>{msg.content}</span>
                    </div>
                ))}
                {loading && (
                    <div style={{ textAlign: "center", color: "#007BFF" }}>AI is typing...</div>
                )}
            </div>

            {/* Input Box */}
            <div style={{ display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    style={{
                        flex: 1,
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <button
                    onClick={handleSend}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
