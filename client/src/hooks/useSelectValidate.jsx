import { useState, } from "react"

const useSelectValidate = (arrayIdCountries) => {
    const [idCountries, setIdCountries] = useState(arrayIdCountries);
    const [selectAlerta, setSelectAlerta] = useState(false)
    const hanlderSelectValue = e => {
      //   setSelectedValue(e.target.value);
      //  console.log(selectedValue)
        const id = e.target.value;
       // console.log(id)
        if(id === ''){
            setSelectAlerta(true);
            return
        }
        else{
          const idFound = idCountries.find( _id => _id === id);
          setSelectAlerta(false)
          if(!idFound){
            setIdCountries([...idCountries,id]);
            return
          }
        }
    }

  return {
    idCountries,
    hanlderSelectValue,
    selectAlerta,
  }
}

export default useSelectValidate
