import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const usePostagens = () =>{

    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!
    //ESSE HOOK PODE SER APAGADO!!!!

    const [postagens, setPostagens] = useState([])

    useEffect(() => {
        axios
          .get(`${BASE_URL}comments`)
          .then((response) => {
            setPostagens(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });    

      return postagens;
}