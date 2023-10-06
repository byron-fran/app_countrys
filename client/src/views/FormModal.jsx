/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useEffect } from 'react'
import useFormValidate from '../hooks/useFormValidate'
import useSelectValidate from '../hooks/useSelectValidate'
import useCodeCountries from '../hooks/useCodeCountries';
import SelectForm from '../components/SelectForm';
import '../styles/formModal.css';


const FormModal = ({ formModal, setFormModal, infoActivity, setInfoActivity, acivityExist, setBottoFloat,setRefreshData,bottonVisble,setBottonVisible}) => {
  const objAlerta = {
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countryId: ''
  };

  let codeCountries = []
  let arrayIdCountries = [];

  //Custom hooks
  const { arrayCodeCountries } = useCodeCountries(codeCountries)
  const { alerta, handlerSendInfo, exito } = useFormValidate(infoActivity, objAlerta, setInfoActivity,setFormModal,setRefreshData,setBottoFloat,setBottonVisible);
  const { idCountries, hanlderSelectValue, selectAlerta } = useSelectValidate(arrayIdCountries);


  useEffect(() => {
    if (idCountries.length > 0) {
      setInfoActivity({ ...infoActivity, countryId: idCountries })
    }
  }, [idCountries]);


  return (
    <>

      <SelectForm
        formModal={formModal}
        setFormModal={setFormModal}
        infoActivity={infoActivity}
        setInfoActivity={setInfoActivity}
        acivityExist={acivityExist}
        handlerSendInfo={handlerSendInfo}
        alerta={alerta}
        exito={exito}
        selectAlerta={selectAlerta}
        arrayCodeCountries={arrayCodeCountries}
        hanlderSelectValue={hanlderSelectValue}
        setBottoFloat={setBottoFloat}
        bottonVisble={bottonVisble}
      />

    </>


  )
}

export default FormModal