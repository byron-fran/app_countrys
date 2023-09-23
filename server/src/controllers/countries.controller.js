
const { Country } = require('../db')
const axios = require('axios');

const getCountries = async (req, res) => {
    const url = 'http://localhost:5000/countries';

    try {

        const { data } = await axios(url);
        if (!data) { return res.status(404).json({ error: "not Found" }) }
        for (let i = 0; i < data.length; i++) {
            let countryInfo = {
                name: data[i].name.official,
                id: data[i].cca3,
                area: data[i].area,
                image: data[i].flags.png,
                population: data[i].population,
                continents: data[i].continents[0],
                subregion: data[i].subregion,
                capital: data[i].capital
            }

            await Country.findOrCreate({
                where: {
                    name: countryInfo.name,
                    id: countryInfo.id,
                    area: countryInfo.area,
                    image: countryInfo.image,
                    population: countryInfo.population,
                    continents: countryInfo.continents,
                    subregion: countryInfo.subregion === undefined ? 'null' : countryInfo.subregion,
                    capital: countryInfo.capital === undefined ? 'null' : countryInfo.capital[0]  //&& countryInfo.capital[0],
                },

            });

        }
        //Obtener todos los paises 
        const countries = await Country.findAll();
        return res.status(200).json({ success: countries })
    }
    catch (error) { return res.status(500).json({ error: error.message }) }

};

const getCountrieById = async (req, res) => {
    const { id } = req.params;
    try {
        const countryOne = await Country.findOne({ where: { id } });

        if (!countryOne) { return res.status(404).json({ error: "Country Not found" }) };

        return res.status(200).json({ success: countryOne })
    }
    catch (error) { return res.status(500).json({ error: error.message }) }

};

const searchCountryByaName = async () => {
    const { name } = req.query
    console.log(name)
    return res.status(200).json({
        success: name
    })
}

module.exports = {
    getCountrieById,
    getCountries,
    searchCountryByaName
}