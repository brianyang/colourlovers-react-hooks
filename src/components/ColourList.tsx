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
  const [page, setPage] = useState(1);
  const fetchData = () => {
    const url = `https://fierce-retreat-28186.herokuapp.com/` + 
    `https://www.colourlovers.com/api/palettes/new?format=json`
     fetch(url).then(res => {
        return res.json()
      }).then(json => {
        let data: any = {
          response: json
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
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item"><a className="page-link">Previous</a></li>
          <li className="page-item active"><a className="page-link">1</a></li>
          <li className="page-item"><a className="page-link">2</a></li>
          <li className="page-item"><a className="page-link">3</a></li>
          <li className="page-item next"><a className="page-link" onClick={() => setPage(2)}>Next</a></li>
        </ul>
      </nav>
    </Suspense>
  );
}

export default ColourList