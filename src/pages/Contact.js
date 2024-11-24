import React from "react";

function Contact() {
    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "#f4f4f9",
                minHeight: "100vh",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "32px",
                    color: "#333",
                    marginBottom: "20px",
                }}
            >
                Contact Us
            </h1>

            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    width: "100%",
                    maxWidth: "600px",
                }}
            >
                <p
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        lineHeight: "1.6",
                        marginBottom: "10px",
                    }}
                >
                    If you have any questions or need support, feel free to reach out to us!
                </p>
                <p
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#007BFF",
                        marginBottom: "5px",
                    }}
                >
                    Email:{" "}
                    <a
                        href="mailto:support@medvaultxr.com"
                        style={{
                            textDecoration: "none",
                            color: "#007BFF",
                        }}
                    >
                        support@medvaultxr.com
                    </a>
                </p>
                <p
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#007BFF",
                    }}
                >
                    Phone:{" "}
                    <a
                        href="tel:+1234567890"
                        style={{
                            textDecoration: "none",
                            color: "#007BFF",
                        }}
                    >
                        +1-234-567-890
                    </a>
                </p>
            </div>

            <div
                style={{
                    marginTop: "30px",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    width: "100%",
                    maxWidth: "600px",
                }}
            >
                <h2 style={{ fontSize: "24px", color: "#333", marginBottom: "20px" }}>
                    Send Us a Message
                </h2>
                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    />
                    <textarea
                        placeholder="Your Message"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            minHeight: "100px",
                            resize: "vertical",
                        }}
                    ></textarea>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
