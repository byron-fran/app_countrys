
const { Activity, Country,conn  } = require('../db');

    
const createActivity = async (req, res) => {
    
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

const getActivity = async (req, res) => {
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


module.exports = {
    createActivity,
    getActivity
}