import React, { useContext, createContext, useState } from 'react'
import "./style.scss"

const filterRef = createContext(null);
export default function Gallery() {
  const [selected, setSelected] = useState("Filter 1");
  return (
    <section className='gallery text-white pt-6 pb-7 text-center'>
      <div className='container pb-5'>
        <h1>
          Gallery
        </h1>

        <filterRef.Provider value={{ selected, setSelected }}>
          <div className='btn-group py-4'>
            <Button id="Filter 1" />
            <Button id="Filter 2" />
            <Button id="Filter 3" />
            <Button id="All" />

          </div>

          <div className='row align-items-center g-3'>
            <Image src={require("../../../Images/office1.jpg")} id="Filter 1" />
            <Image src={require("../../../Images/office2.jpg")} id="Filter 2" />
            <Image src={require("../../../Images/office1.jpg")} id="Filter 1" />
            <Image src={require("../../../Images/office2.jpg")} id="Filter 2" />
            <Image src={require("../../../Images/bg.jpg")} id="Filter 3" />
            <Image src={require("../../../Images/office2.jpg")} id="Filter 2" />
            <Image src={require("../../../Images/office1.jpg")} id="Filter 3" />
            <Image src={require("../../../Images/office1.jpg")} id="Filter 2" />
          </div>
        </filterRef.Provider>
      </div>

    </section>
  )
}

const Image = ({ src, id }) => {
  const { selected } = useContext(filterRef)
  const [display,setDisplay] = useState("block");
  const isSelected = selected == id || selected == "All";

  setTimeout(() => {
    //setting the display to be none with a delay of 500ms to match the fade animation provided that the element is filtred out
    setDisplay(isSelected ? "block" : "none");
  }, 400);

  return <div className={`col-6 col-md-4 col-lg-3 ${isSelected ? "" : "fade"}`} style={{display}}>
    <img src={src} className="img-fluid" />
  </div>
}

const Button = ({ id }) => {
  const { selected, setSelected } = useContext(filterRef)
  return (
    <div className={`btn btn-light ${selected == id ? "selected" : null}`} onClick={() => setSelected(id)}>
      {id}
    </div>
  )
}
