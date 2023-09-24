const { Activity, Country  } = require('../db')

const createActivity = async (req, res) => {
    
    const { name, difficulty, duration, season, countryId } = req.body;
    console.log(countryId)
    try {
        if (!req.body) { return res.status(404).json({ error: "not found" }) };
        if (difficulty > 5 || difficulty <= 0) { return res.status(400).json({ error: "difficulty no valid" }) };
        
        const [newActivity, created] = await Activity.findOrCreate({
            where: {
                name, difficulty, duration, season
            }
        });
        if(countryId){
            const country = await Country.findByPk(countryId);
            if(!country){ return res.status(404).json({error : error.message})};
            await newActivity.addCountry(country)
        }
        return res.status(200).json({ success: newActivity })
    }
    catch (error) { return res.status(500).json({ error: error.message }) }
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