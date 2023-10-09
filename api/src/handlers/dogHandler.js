const { getAllDogsController, getDogByIdController, getDogByNameController, createDogController } = require('../controllers/dogController');

const getAllDogsHandler = async (req, res) => {
  try {
    const dogs = await getAllDogsController();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

const getDogByIdHandler = async (req, res) => {
  const { id } = req.params;
  const idToSearch = +id ? +id : id;
  try {
    const dog = await getDogByIdController(idToSearch);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
const getDogByNameHandler = async (req, res) => {
  const { name } = req.query;
  //! consaola
  console.log("vemos lo que se requpera de query", name);
  try {
    const dog = await getDogByNameController(name.toLowerCase());
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const createDogHandler = async (req, res) => {

  
  const dataDog = JSON.parse(req.body.breed);
 
  if (req.file) {
    
    const fileName = req.file.filename;
    dataDog.image = fileName;
  }
  try {
    const dog = await createDogController(dataDog);
    res.status(200).json(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}




module.exports = {
  getAllDogsHandler,
  getDogByIdHandler,
  getDogByNameHandler,
  createDogHandler
}