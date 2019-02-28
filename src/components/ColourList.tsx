import React, { useState, useEffect, Suspense } from 'react'
import Colour from './Colour'
import useInterval from './useInterval'
import moment from 'moment'

interface Item {
  id: string,
  title: string,
}

const ColourList = () => {
  const [data, updateData] = useState(undefined);
  const fetchData = () => {
    // const url = `https://cors-anywhere.herokuapp.com/` + 
    const url = `//api.allorigins.ml/get?url=` + 
    `https://www.colourlovers.com/api/palettes/new?format=json`
     fetch(url).then(res => {
        return res.json();
      }).then(json => {
        let data: any = {
          response: JSON.parse(json.contents)
        }
        updateData(data);
     });
  }
  useEffect(() => {
    fetchData()
  }, []);
  useInterval(() => {
    fetchData()
  }, 6000000);

  const result:any = data || {}
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="row">
        {result && result.response && result.response.map((item: Item, index: number) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Colour>{item}</Colour>
            </div>
          )
        })}
      </div>
    </Suspense>
  );
}

export default ColourList