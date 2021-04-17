import { useEffect, useState } from "react";

const rootURL = "http://45.79.2.154:8000/";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(rootURL + url)
      .then((response) => response.json())
      .then((_data) => setData(_data));
  }, [url]);

  return data;
};
