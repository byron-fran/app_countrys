const {request, response} = require('express')
const { Activity, Country,conn  } = require('../db');

    
const createActivity = async (req = request, res = response) => {
    
    const { name, difficulty, duration, season, countryId } = req.body;

    if (!req.body) return res.status(404).json({ error: "not found" });
    if (difficulty > 5 || difficulty <= 0) return res.status(400).json({ error: "difficulty not valid" });
 
    const t = await conn.transaction();
    try {
        const [newActivity, created] = await Activity.findOrCreate({
            where: {
                name, difficulty, duration, season
            },
            transaction: t
        });

        if (countryId && Array.isArray(countryId)) {
            for (let i = 0; i < countryId.length; i++) {
                const country = await Country.findByPk(countryId[i], { transaction: t });
                if (!country) {
                    await t.rollback();
                    return res.status(404).json({ error: `Country with ID ${countryId[i]} not found` });
                }
                await newActivity.addCountry(country, { transaction: t });
            }
        }

        await t.commit();

        return res.status(200).json({ success: newActivity });
    } catch (error) {
        await t.rollback();
        return res.status(500).json({ error: error.message });
    }
};

const getActivity = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const activityFind = await Activity.findByPk(id, {
            include : Country
        });
        if (!activityFind) { return res.status(404).json({ error: "Activity not found" }) };
        return res.status(200).json({ activityFind })
    }
    catch (error) { return res.status(500).json({ error: error.message }) }
};


const getAllActivities = async (req = request, res = response) => {
    try{
        const activities = await Activity.findAll();
        if(!activities) { return res.status(404).json({error : error.message})};
        return res.status(200).json(activities)
    }
    catch(error){ return res.status(500).json({error : error.message})}
};

const deleteActivityByCountry = async (req = request, res = response) => {
    const {id} = req.params;
    try{
        const countryId = await Activity.destroy({ where : {id} });
        if(!countryId){ return res.status(404).json({error : "cannot delete"})};
        return res.status(200).json({ success : "ok",countryId})
    }
    catch(error){return res.status(500).json({error : error.message})}

};

const upadetActivityById = async (req = request, res = response) => {
    const { id } = req.params;
    const { name, difficulty, duration, season, countryId } = req.body;
    const t = await conn.transaction();

    try {
        const activity = await Activity.findByPk(id, { transaction: t });

        if (!activity) {
            return res.status(404).json({ error: `Activity with ID ${id} not found` });
        }

        activity.name = name;
        activity.difficulty = difficulty;
        activity.duration = duration;
        activity.season = season;

        // Actualizar la relación Many-to-Many con los países
        if (countryId && Array.isArray(countryId)) {
            const countries = await Country.findAll({
                where: { id: countryId },
                transaction: t,
            });

            if (countries.length !== countryId.length) {
                return res.status(400).json({ error: 'One or more countries not found' });
            }

            // Borra todas las asociaciones existentes y luego agrega las nuevas
            await activity.setCountries(countries, { transaction: t });
        }

        await activity.save({ transaction: t });
        await t.commit();

        return res.status(200).json({ success: 'ok', activity });
    } catch (error) {
        await t.rollback();
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createActivity,
    getActivity,
    getAllActivities,
    deleteActivityByCountry,
    upadetActivityById


}