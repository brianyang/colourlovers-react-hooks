import React, { useState, useEffect } from 'react'

const useFetch = (url: any) => {
  const [data, updateData] = useState(undefined);

  useEffect(() => {
     fetch(url).then(res => {
        return res.json();
      }).then(json => {
        updateData(json);
     });
  }, []);

  return data;
};

export default useFetch