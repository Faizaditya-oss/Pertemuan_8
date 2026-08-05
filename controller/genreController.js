const { Genre } = require('../models');

exports.getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data genre.', error: error.message });
  }
};

exports.getGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if (!genre) {
      return res.status(404).json({ message: 'Genre tidak ditemukan.' });
    }
    res.json(genre);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data genre.', error: error.message });
  }
};

exports.createGenre = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newGenre = await Genre.create({ name, description });
    res.status(201).json({ message: 'Genre berhasil ditambahkan.', data: newGenre });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan genre.', error: error.message });
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const genre = await Genre.findByPk(id);
    if (!genre) {
      return res.status(404).json({ message: 'Genre tidak ditemukan.' });
    }
    await genre.update({ name, description });
    res.json({ message: 'Genre berhasil diupdate.', data: genre });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengupdate genre.', error: error.message });
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findByPk(id);
    if (!genre) {
      return res.status(404).json({ message: 'Genre tidak ditemukan.' });
    }
    await genre.destroy();
    res.json({ message: 'Genre berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus genre.', error: error.message });
  }
};