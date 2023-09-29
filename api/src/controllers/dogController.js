const axios = require('axios');
const multer = require('multer');
const {QueryTypes} = require('sequelize');
const { dirname, extname, join } = require('path');
const { Dog, DogTemperament, Temperament, dbConnection } = require('../db');
const urlApi = "https://api.thedogapi.com/v1/breeds?api_key=live_mmcZUtjjwnrpBme4ijuiaqe0TcDB9pzbiH7dKf16VE9FJppPVz92YMnnsveYUzIS"

const MIMETYPES = ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
// TODO: crete a storage path and name to save the dogimage 
const storage = multer.diskStorage({
    destination: join(__dirname, '../dog_images'),
    filename: (req, file, cb) => {
        const { dataDog } = req.body; //? recovering all data from the form
        const dog = JSON.parse(dataDog);
        const fileExtension = extname(file.originalname);

        cb(null, `${dog.name}_dog_${Date.now()}${fileExtension}`);
    }
});

// TODO: create a middleware to storage a image file to save dog image
const uploadDogImageMiddleware = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (MIMETYPES.includes(file.mimetype)) cb(null, true);
        else cb(new Error(`Solo los siguientes formatos son permitidos ${MIMETYPES.join(' ')} `));
    },
    limits: {
        fileSize: 10000000,
    }
});


const getAllDogsController = async () => {
    const { data } = await axios.get(urlApi);
    const apiData = data.map((dog) => {
        return { breed:{
            id:dog.id,
            name:dog.name,
            image:dog.image.url,
            height:dog.height.metric,
            weight:dog.weight.metric,
            lifeSpan:dog.life_span,
            temperaments:dog?.temperament?.split(', ')??[]
        }}
    }
    );
    const dogs = await dbConnection.query(`select json_build_object('id',d.id,'name',d.name,'image',d.image,'height',d.height,'weight',d.weight,'lifeSpan',d.life_span,'temperaments',array_agg(t.name)) as breed from dogs d inner join dog_temperaments dt on d.id=dt.dog_id inner join temperaments t on dt.temperament_id=t.id group by d.id`,{ type: QueryTypes.SELECT });
    if (data.length > 0 || dogs.length > 0) {
        return [...apiData, ...dogs]
    }
    throw new Error("No se encontro ningun perro");
}

const getDogByIdController = async (id) => {
    const dogs = await getAllDogsController();

    const dogById = dogs.find((dog) => {
        return dog.id === id;
    }
    );
    if (dogById.length === 0) {
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

//TODO: function to create a new breed dog 
const createDogController = async (dataDog) => {
    const { name, image, height, weight, lifeSpan, temperaments } = dataDog;
    const newDog = { name, image, height, weight, lifeSpan };

    //TODO: creatin a transaction to manage the insertion of the temeperaments y dog
    const result = await dbConnection.transaction(async (t) => {
        const dogCreated = await Dog.create(newDog, { transaction: t });

        //? validating if there are temperements to create the breed dog
        if(temperaments.length===0) throw new Error("La raza que intentas cread debe tener almenos un temperamento");
        const dogTemperaments = temperaments.map((temperament) => {
            return { dogId: dogCreated.id, temperamentId: temperament }
        }
        ); 
        //!consola
        console.log("consologueamos dog", dogCreated.dataValues);
        const dogTemperamentsCreated = await DogTemperament.bulkCreate(dogTemperaments, { transaction: t });
        //!CONSOLA
        console.log('consologeamos temperamens', dogTemperamentsCreated)
        if (!dogCreated || !dogTemperamentsCreated) throw new Error('No se puedo guardar la raza de perro');
        return dogCreated;
    }
    );
    //!CONSOLO 
    console.log("Consologueamos result", result);
    return result;

    /* const dogCreated = await Dog.create(newDog);
    //!consologueamos el perro creado
    console.log("perro creado", dogCreated);
    if (!dogCreated) {
        throw new Error('No se pudo guardar la raza de perro');
    }

    // TODO: creating objets with idDog  and idTemperaments
    const dogTemperaments = temperaments.map((temperament) => {
        return {dogId: dogCreated.id,temperamentId:temperament}
    }
    );

    //!console temprament with dog object
    console.log('console temprament with dog objet',dogTemperaments);
    const dogTemperamentsCreated = await DogTemperament.bulkCreate(dogTemperaments); 
    if(!dogTemperamentsCreated){

        throw new Error('Algo salio mal');
    }
    //! consologueamos dogtemperaments 
    console.log("consologueamos dogtemperaments ",dogTemperamentsCreated);
    return dogCreated; */
}




module.exports = {
    getAllDogsController,
    getDogByIdController,
    getDogByNameController,
    createDogController,
    uploadDogImageMiddleware
}
