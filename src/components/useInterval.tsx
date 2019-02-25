import React, { useState, FunctionComponent, useEffect, useRef } from "react";

function useInterval(callback: any, delay: number) {
  const savedCallback:any = useRef(null);

  useEffect(() => {
    savedCallback.current = callback; 
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
