import { useState, useEffect } from "react";
import axios from "axios";
const useActivities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        const getActivites = async () => {
            try {
                const url = 'http://localhost:3001/activitesAll';
                const { data } = await axios(url);
                setActivities(data)
                return data
            }
            catch (error) { console.log(error.message) }
        }
        getActivites()
    }, []);

  return {
    activities
  }
}

export default useActivities