import { useState, } from "react"

const useSelectValidate = (arrayIdCountries) => {
    const [idCountries, setIdCountries] = useState(arrayIdCountries);

    const hanlderSelectValue = e => {
        const id = e.target.value;
        const idFound = idCountries.find(ids => ids === id)
        if(!idFound){
          setIdCountries([...idCountries,id]);
          //setMarcado(true)
         //console.log(infoActivity)
         return
        }
       
    
       // idsc.filter(i => i !== idFound)
      }
  return {
    idCountries,
    setIdCountries,
    hanlderSelectValue
  }
}

export default useSelectValidate