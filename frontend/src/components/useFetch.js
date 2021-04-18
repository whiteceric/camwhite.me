import { useEffect, useState } from "react";

const rootURL = "http://www.camwhite.me/";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(rootURL + url);
    fetch(rootURL + url)
      .then((response) => response.json())
      .then((_data) => setData(_data));
  }, [url]);

  return data;
};
