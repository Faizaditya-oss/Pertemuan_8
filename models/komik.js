module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        penulis_id: {
            type: DataTypes.INTEGER,
            allowNull: false,