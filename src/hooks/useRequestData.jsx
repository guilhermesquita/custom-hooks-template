import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export const useRequestData = (path) => {
    const [data, setData] = useState([])
    const [onLoading, setOnLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setOnLoading(true)
        axios
          .get(`${BASE_URL}${path}`)
          .then((response) => {
            setData(response.data);
            setOnLoading(false)
          })
          .catch((error) => {
            console.log(error);
            setError(true)
            setOnLoading(false)
          });
      }, [path]);

      return [data, onLoading, error]
}