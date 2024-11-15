const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Разрешаем CORS для фронтенда на порту 3000
app.use(cors({ origin: 'http://localhost:3000' }));

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
            photo: `http://localhost:5000/data/images/${path.basename(photo.photo)}`,
            category: photo.category
        }));
        res.json(photos);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.get('/data/comments/:photoId', async (req, res) => {
    const { photoId } = req.params;
    try {
        const result = await pool.query(
            'SELECT author, comment FROM "LightStories".comment WHERE photo_id = $1',
            [photoId]
        );
        const comments = result.rows;
        res.json(comments);
    } catch (error) {
        console.error('Ошибка при получении комментариев:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}/data`);
});
