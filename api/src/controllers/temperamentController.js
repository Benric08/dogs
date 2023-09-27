const axios = require('axios');
const {Temperament} = require('../db');
const urlApi = "https://api.thedogapi.com/v1/breeds?api_key=live_mmcZUtjjwnrpBme4ijuiaqe0TcDB9pzbiH7dKf16VE9FJppPVz92YMnnsveYUzIS"

//TODO: get data from the API, extract temperament value from each dog and delete duplicate values
const getTemperamentsFromApi  = async() => {
  const {data} = await axios.get(urlApi);
  const temperaments = data.map((dog) => dog.temperament);
  return [...new Set(temperaments.join(", ").split(", "))].filter((temp)=>temp!=="");
}
//? function to insert  data into the database with bulkCreate [{name:loyal},{name:fast},....]
const saveDataFromApiToDataBase = async () => {
  const temperaments =  (await getTemperamentsFromApi()).map((temps) => {return {name:temps}});
  const loadTemperaments = await Temperament.bulkCreate(temperaments);
  return loadTemperaments;
} 


module.exports = {
  saveDataFromApiToDataBase,
}