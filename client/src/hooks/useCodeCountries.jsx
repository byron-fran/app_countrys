import { useState, useEffect } from "react"
import axios from "axios";
const useCodeCountries = (codeCountries) => {
    const [arrayCodeCountries, setArrayCountries] = useState(codeCountries);
    useEffect(() => {
        const getCodes = async () => {
          const url = 'http://localhost:3001/countries/';
          const {data} =await axios(url);
          setArrayCountries(data.sort((a, b) => a.name.localeCompare(b.name)));
          return data
        };
        getCodes();
          return () => {
            setArrayCountries([])
          }
      }, []);
  return {
    arrayCodeCountries
  }
}

export default useCodeCountries