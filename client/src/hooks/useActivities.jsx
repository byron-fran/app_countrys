import { useState, useEffect } from "react";
import axios from "axios";

const useActivities = (refreshData) => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        const getActivites = async () => {
            try {
              // setRefreshData(!true)
                const url = 'http://localhost:3001/activitesAll';
                const { data } = await axios(url);
                // setRefreshData(!false)
                setActivities(data)
                return data
            }
            catch (error) { console.log(error.message) }
        }
        getActivites()
    }, [refreshData]);

  return {
    activities
  }
}

export default useActivities