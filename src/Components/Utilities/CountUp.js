import React, { useState, useEffect } from "react";

export default function CountUp({ to, duration, className = "",after = "" }) {
  var a = 0;
  const [count, setCount] = useState(0);
  var tick = to / duration / 5;

  useEffect(() => {
    a = setInterval(() => {
      setCount((prevCount) => prevCount + tick);
    }, 200);
    return () => clearInterval(a);
  }, []);

  useEffect(() => {
    if (count >= to) {
      setCount(to);
      clearInterval(a);
    }
  }, [count]);

  return <div className={className} style={{display:"inline"}}>{count + after}</div>;
}
