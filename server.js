const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const TELEGRAM_BOT_TOKEN = '7207559106:AAE-Yo3BHB5Ib5SWBptlwsJxB5DsBRnFj9s';
const TELEGRAM_CHAT_ID = '-4229698559';

app.use(bodyParser.json());
app.use(express.static('public'));  // Serve your HTML and JS

app.post('/send-message', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch(`https://api.telegram.org/bot$7207559106:AAE-Yo3BHB5Ib5SWBptlwsJxB5DsBRnFj9s/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: T-4229698559
                ,
                text: message
            })
        });

        const data = await response.json();
        
        if (data.ok) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error('Error:', error);
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
