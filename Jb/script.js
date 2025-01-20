const API_KEY = "ag:19e66ad5:20250120:jambon-beurre:048210a8";
const API_URL = "https://api.mistral.ai/v1/chat";

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div><strong>Vous:</strong> ${userInput}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: userInput }]
            })
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi du message.');
        }

        const data = await response.json();
        const agentResponse = data.choices[0].message.content;
        chatBox.innerHTML += `<div><strong>Jambon Beurre:</strong> ${agentResponse}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        chatBox.innerHTML += `<div><strong>Jambon Beurre:</strong> Erreur: ${error.message}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    document.getElementById('user-input').value = '';
}
