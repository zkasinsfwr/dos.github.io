document.getElementById('sendButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    
    if (userInput.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message.");
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("An error occurred while sending the message.");
    });
});