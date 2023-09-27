const { saveDataFromApiToDataBase } = require('../controllers/temperamentController');

const saveDataFromApiToDataBaseHandler = async (req, res) => {
    try {
        const data = await saveDataFromApiToDataBase();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    saveDataFromApiToDataBaseHandler,
}