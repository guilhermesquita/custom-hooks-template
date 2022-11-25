import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const useRequestData = (path) => {
    const [datas, setDatas] = useState(['']);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErros] = useState(false)

    useEffect(() => {
      setIsLoading(true)
        axios
          .get(`${BASE_URL}${path}`)  
          .then((response) => {
            setDatas(response.data);
            setIsLoading(false)
            setErros(false)
          })
          .catch((error) => {
            console.log(error);
            setErros(true)
            setIsLoading(false)
          });
      }, [path]);

      return [datas, isLoading, errors];
}