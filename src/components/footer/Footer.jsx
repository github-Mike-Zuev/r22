import React from 'react'
import './module.footer.css'

const Footer = () => {
  return (
    <div className='contaner footer'>
              <div className='logoBan'>
                  <span> приблизим далёкое </span>
                  <img className="icon col" src="../logo192.png" alt=""/>
               </div>
        <div className="row row-cols-4 border-top justify-content-end text-center ">
            {/* <div className="col "> */}
                <h1>
                  <a className="col url-00" href="#url-00">о нас</a>
                </h1>        
               <a className="col url-01" href="#url-01">Контакты 1</a>
               <a className="col url-02" href="#url-02">Контакты 2</a>
            {/* </div> */}
      </div>
    </div>
  )
}

export default Footer