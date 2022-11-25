import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const useCapturarNome = () => {

    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!

    const [nomeUsuarios, setNomeUsuarios] = useState(['']);

    useEffect(() => {
        axios
          .get(`${BASE_URL}users`)
          .then((response) => {
            setNomeUsuarios(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      return nomeUsuarios;
}