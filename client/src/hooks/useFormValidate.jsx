import { useState,} from "react"



const useFormValidate = () => {
    const [contador, setContador] = useState(0);

    const mas = () => {
        setContador(valor => valor + 1)
    };

    const menos = () => {
        setContador(valor => valor -1)
    }
    return {
        contador,
        mas,
        menos,
        setContador

  }
}

export default useFormValidate