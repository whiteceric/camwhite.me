import { useEffect, useState } from "react";

import { API_URL } from "../env";

export const useFetchPost = (url, postData) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(API_URL + url);
    console.log(postData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    };
    fetch(API_URL + url, requestOptions)
      .then((response) => response.json())
      .then((_data) => setData(_data));
  }, [url, postData]);

  return data;
};
