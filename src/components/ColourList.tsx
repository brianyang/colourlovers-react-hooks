import React, { useState, useEffect, Suspense } from 'react'
import Colour from './Colour'
import useInterval from './useInterval'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Redirect } from 'react-router-dom';

interface Item {
  id: string,
  title: string,
}

const ColourList = (props: any) => {
  const [data, updateData] = useState(undefined);

  const fetchData = () => {
    const url = `https://fierce-retreat-28186.herokuapp.com/` + 
    `https://www.colourlovers.com/api/palettes/new?format=json&resultOffset=${props.match.params.pageNum * 20}`
     fetch(url).then(res => {
        return res.json()
      }).then(json => {
        let data: any = {
          response: json
        }
        updateData(data);
     });
  }

  const setPageFn = (pg: any) => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, []);
  useInterval(() => {
    fetchData()
  }, 6000000);

  const result:any = data || {}

  const pageArr = []
  let i = parseInt(props.match.params.pageNum) - 5
  while (i - 5 <= props.match.params.pageNum) {
    pageArr.push(i)
    i++
  }
  return (
    <>
      <div className="row">
        {result && result.response && result.response.map((item: Item, index: number) => {
          return (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Colour>{item}</Colour>
            </div>
          )
        })}
      </div>
      
      <nav aria-label="Page navigation" style={{width:500, margin:'auto'}}>
        <ul className="pagination">
          <li className="page-item"><a className="page-link">Previous</a></li>
          {pageArr.map((item, index) => {
            // console.log(props.match.params)
            let active = false
            return (
              <li className={props.match.params.pageNum == item ? 'page-item active' : 'page-item'}>
                <Link
                  className="page-link"
                  to={`/page/${item}`}
                  onClick={() => setPageFn(item)}>
                  {item}
                </Link>
              </li>
            )
          })}
          <li className="page-item next"><a className="page-link">Next</a></li>
        </ul>
      </nav>
      </>
  );
}

export default ColourList