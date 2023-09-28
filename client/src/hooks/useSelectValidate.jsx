import { useState, } from "react"

const useSelectValidate = (arrayIdCountries) => {
    const [idCountries, setIdCountries] = useState(arrayIdCountries);

    const hanlderSelectValue = e => {
        const id = e.target.value;
        const idFound = idCountries.find(ids => ids === id)
        if(!idFound){
          setIdCountries([...idCountries,id]);
   
         return
        }
    }

  return {
    idCountries,
    setIdCountries,
    hanlderSelectValue
  }
}

export default useSelectValidate
