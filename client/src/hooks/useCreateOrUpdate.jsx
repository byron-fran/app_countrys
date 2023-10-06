import useActivities from "./useActivities";
import axios from "axios";

const useCreateOrUpdate = (setInfoActivity, setFormModal, setExito,setRefreshData,setBottoFloat,setBottonVisible) => {
    const { activities } = useActivities();
    const createOrUpdate = async infoActivity => {
        //Comprobar si existe para actualizar
        const activityExist = activities.find(activity => activity.id === infoActivity.id);
        if (activityExist) {
            //Actulizar el activity
            const url = `http://localhost:3001/activities/${activityExist.id}`;
            setBottonVisible(false)
            try {
                setRefreshData(!true)
                const { data } = await axios.put(url, infoActivity);
                //console.log(data)
                setRefreshData(!false)
                setExito(true)
                setInfoActivity({
                    ...infoActivity,
                    name: '',
                    difficulty: '',
                    duration: '',
                    season: '',
                    countryId : []

                });

                setTimeout(() => {
                    setExito(false);
                    setFormModal(false);
                    setBottoFloat(true);
                    setBottonVisible(true)
                    
                }, 1500)
                //console.log(data)
                return data
            }
            catch (error) {
                setExito(false)
                setFormModal(false)
                console.log(error);
                setInfoActivity({
                    ...infoActivity,
                    name: '',
                    difficulty: '',
                    duration: '',
                    season: '',
                    countryId : []

                });
            }
        }
        else {
            //Crear nuevo activity
            const url = `http://localhost:3001/activities`;
            try {
                setRefreshData(!true)
                setBottonVisible(false)
                const { data } = await axios.post(url, infoActivity);
                //console.log(data)
                setRefreshData(!false)
                setExito(true)
                setInfoActivity({
                    ...infoActivity,
                    name: '',
                    difficulty: '',
                    duration: '',
                    season: '',

                });

                setTimeout(() => {
                    setExito(false)
                    setBottoFloat(true);
                    setFormModal(false);
                    setBottonVisible(true)
                }, 1500);
                return data;
                //console.log(data)
            }
            catch (error) {
                setExito(false)
                console.log(error);
                setInfoActivity({
                    ...infoActivity,
                    name: '',
                    difficulty: '',
                    duration: '',
                    season: '',
                    countryId : []

                });
            }

            //Enviar los datos del activity al server
            return

        }
    }
    return { createOrUpdate }
}

export default useCreateOrUpdate;