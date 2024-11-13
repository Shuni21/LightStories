const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '21112003',
    port: 5432,
});

// Статическая раздача файлов из папки src/assets
app.use('/data/images', express.static(path.join(__dirname, 'src', 'assets')));

app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "LightStories".photo');
        const photos = result.rows.map(photo => ({
            id: photo.id,
            name: photo.name,
            // Путь для изображения
            photo: `http://localhost:5000/data/images/${path.basename(photo.photo)}`
        }));
        res.json(photos);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}/data`);
});
