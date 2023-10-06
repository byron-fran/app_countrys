const Sequelize = require('sequelize');
const { Country, Activity} = require('../db')
const axios = require('axios');

const getCountries = async (req, res) => {
    // const {name} = req.query;
    const { continent, activity, orderByName, orderByPopulation,name } = req.query;

    const queryOptions = {
        where: {},
        order: []
    };
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
        if (continent) {
            queryOptions.where.continents = continent;
        }
    
        // Si se proporciona una actividad, añade el filtro
        // Suponiendo que "activities" es un campo de tipo array en tu modelo
        if (activity) {
            queryOptions.where.activities = Sequelize.Op.contains([activity]);
        }
    
        // Si se proporciona un criterio de ordenación, añade el ordenamiento
        if (orderByName) {
            queryOptions.order.push(['name', orderByName]);  // e.g. ['name', 'ASC']
        }
    
        if (orderByPopulation) {
            queryOptions.order.push(['population', orderByPopulation]);
        }
    
        try {
            const countries = await Country.findAll(queryOptions);
            if (!countries || !countries.length) {
                return res.status(404).json({ error: "not found" });
            }
            return res.status(200).json(countries);
        } catch (error) {
            return res.status(500).json({ error: error.message });
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


module.exports = {
    getCountrieById,
    getCountries,

}