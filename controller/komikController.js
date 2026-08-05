const { Komik } = require('../models');

exports.getAllKomik = async (req, res) => {
  try {
    const komiks = await Komik.findAll();
    res.json(komiks);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data komik.', error: error.message });
  }
};

exports.getKomikById = async (req, res) => {
  try {
    const { id } = req.params;
    const komik = await Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan.' });
    }
    res.json(komik);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data komik.', error: error.message });
  }
};

exports.createKomik = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const newKomik = await Komik.create({ title, description, author });
    res.status(201).json({ message: 'Komik berhasil ditambahkan.', data: newKomik });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan komik.', error: error.message });
  }
};

exports.updateKomik = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author } = req.body;
    const komik = await Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan.' });
    }
    await komik.update({ title, description, author });
    res.json({ message: 'Komik berhasil diupdate.', data: komik });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengupdate komik.', error: error.message });
  }
};

exports.deleteKomik = async (req, res) => {
  try {
    const { id } = req.params;
    const komik = await Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ message: 'Komik tidak ditemukan.' });
    }
    await komik.destroy();
    res.json({ message: 'Komik berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus komik.', error: error.message });
  }
};