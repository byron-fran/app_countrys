const Sequelize = require('sequelize');
const { Country, Activity} = require('../db')
const axios = require('axios');

const getCountries = async (req, res) => {
    const {name} = req.query;
    
    try {
        if(name){
            const countriesFind = await Country.findAll({
                where : {
                    name : {
                        [Sequelize.Op.iLike]: `%${name}%`
                    }
                }
            });
            if (!countriesFind.length) return res.status(404).json({ country: "Not Found" });
            return res.status(200).json({ success: countriesFind });
        }
        else{

        const countries = await Country.findAll();

        if(!countries){ return res.status(404).json({error : "not found"})}
        
        return res.status(200).json({ success: countries})
        }
        //Obtener todos los paises 
  
    }
    catch (error) { return res.status(500).json({ error: error.message }) }

};

const getCountrieById = async (req, res) => {
    const { id } = req.params;
    try {
        const countryOne = await Country.findByPk(id, {
            include : Activity
        });

        if (!countryOne) { return res.status(404).json({ error: "Country Not found" }) };

        return res.status(200).json({ success: countryOne })
    }
    catch (error) { return res.status(500).json({ error: error.message }) }

};

const searchCountryByaName = async (req, res) => {
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