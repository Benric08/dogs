const axios = require('axios');
const { Dog } = require('../db');
const urlApi = "https://api.thedogapi.com/v1/breeds?api_key=live_mmcZUtjjwnrpBme4ijuiaqe0TcDB9pzbiH7dKf16VE9FJppPVz92YMnnsveYUzIS"
const getAllDogsController = async () => {
    const { data } = await axios.get(urlApi);
    const dogs = await Dog.findAll();
    if (!data.length || !dogs.length) {
        return [...data, ...dogs]
    }
    throw new Error("No se encontro ningun perro");
}

const getDogByIdController = async (id) => {
    const dogs = await getAllDogsController();
    
    const dogById = dogs.find((dog) => {
      return dog.id===id;
    }
    );
    if (dogById.length===0) {
        throw new Error("No hay perros asociados con el id solicitado");
    }
    return dogById;
}
const getDogByNameController = async (name) => {
    const dogs = await getAllDogsController();
    
    const dogByName = dogs.filter((dog) => {
      return dog.name.toLowerCase().includes(name);
    }
    );
    if (!dogByName) {
        throw new Error("No hay perros asociados con el nombre solicitado");
    }
    return dogByName;
}



module.exports = {
    getAllDogsController,
    getDogByIdController,
    getDogByNameController,
}
