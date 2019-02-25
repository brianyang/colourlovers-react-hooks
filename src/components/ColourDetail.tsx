import React, { useState, useEffect } from 'react'
import Colour from './Colour'
import useFetch from './useFetch'
import defineDynamicTheme from './defineDynamicTheme'

interface Item {
  id: string,
  title: string,
  colors: []
}

const ColourList = (props: any) => {
  const url = `//cors-anywhere.herokuapp.com/` + 
  `https://www.colourlovers.com/api/palette/${props.match.params.id}?format=json`
  var result = useFetch(url) || []

  const [color, setColor] = useState([]);
  useEffect(() => {
    defineDynamicTheme(color)
  });

  return (
    <div>
      <div className="row">
        {result && result.map((item: Item, index: number) => {
          return (
            <React.Fragment key={index}>
              <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <Colour>{item}</Colour>
              <button type="button" className="btn btn-primary detail" onClick={() => setColor(item.colors)} style={{width:'100%'}}>Preview <em>{item.title}</em></button>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  );
}

export default ColourList