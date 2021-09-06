import { useEffect, useState } from "react";

//import { API_URL } from "../env";

const { API_URL } = process.env;

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(API_URL + url);
    fetch(API_URL + url)
      .then((response) => response.json())
      .then((_data) => setData(_data));
  }, [url]);

  return data;
};
