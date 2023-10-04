const { Country} = require('../db')

const filterByContinent = async (req, res) => {
    const {name} = req.params;
    try{
        const countries = await Country.findAll();
        const continentsByContinents = await countries.filter(country => country.continents === name);
        if(!continentsByContinents){return res.status(404).json({error : "not found"})}
        return res.status(200).json({
            continentsByContinents
        })

    }
    catch(error){return res.status(500).json({error : error.message})}
};

const orderByName = async (req, res) => {
    const {name} = req.params
    try{
        if(name === 'Ascenedente'){
            const countries = await Country.findAll();
            const OrderByName = countries.sort((a, b) => a.name.localeCompare(b.name))
            return res.status(200).json({OrderByName})
        }
        else if(name === 'Descendente'){
            const countries = await Country.findAll();
            const OrderByName  = countries.sort((a, b) => b.name.localeCompare(a.name))
            return res.status(200).json({OrderByName})
        }
        return res.status(404).json({error : "Not found"})
    }
    catch(error){return res.status(500).json({error : error.message})}
};

const orderByPopulation = async (req, res) => {
    const {name} = req.params
    try{
        if(name === 'Mayor'){
            const countries = await Country.findAll();
            const countriesByPopulation = await countries.sort((a, b) => b.population - a.population)
            return res.status(200).json({ countriesByPopulation})
        }
        else if(name === 'Menor'){
            const countries = await Country.findAll();
            const countriesByPopulation  = await countries.sort((a, b) => a.population - b.population)
            return res.status(200).json({ countriesByPopulation})
        }
        return res.status(404).json({error : "Not found"})
    }
    catch(error){return res.status(500).json({error : error.message})}
}
module.exports = {
    filterByContinent,
    orderByName ,
    orderByPopulation 
}