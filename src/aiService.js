import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: "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", // Replace with your valid API key
});

export const getChatCompletion = async (messages) => {
    try {
        const completion = await groq.chat.completions.create({
            model: "llama3-8b-8192", // Replace with the Groq model you're using
            messages,
        });

        // Return the AI's response
        return completion.choices[0]?.message?.content || "No response from AI.";
    } catch (error) {
        console.error("Error from Groq API:", error);
        throw new Error("Failed to fetch AI response.");
    }
};
