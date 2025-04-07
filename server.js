const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Эмуляция проверки хеша (можно заменить на реальную логику)
app.post('/check-hash', (req, res) => {
    const { hash, diamonds } = req.body;
    
    // Проверяем хеш (заглушка)
    if (!hash || hash.length < 3) {
        return res.status(400).json({ error: 'Неверный хеш!' });
    }

    // Генерируем "победные" черепы
    const winningSkulls = [];
    while (winningSkulls.length < diamonds) {
        const randomSkull = Math.floor(Math.random() * 3) + 1;
        if (!winningSkulls.includes(randomSkull)) {
            winningSkulls.push(randomSkull);
        }
    }

    res.json({ winningSkulls });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});