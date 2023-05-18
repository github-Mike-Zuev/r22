import {React, useState} from 'react'
import Simbol from './simbol/Simbol';
import {motion, AnimatePresence } from 'framer-motion';

const Letters = (props) => {
  const [isGo, setIsGo] = useState(true);
  return (
    <div>
        {/* <h1>{props.title}</h1> */}
        {/* <p>{props.children}</p> */}
         <p>   {

             Array.from(props.children).map((symbol, index) =>{
                    return(
                    // <AnimatePresence>
                        <Simbol key = {index}
                        index = {index}
                            simbol = { symbol }
                            duration= { 5 }
                            moving = {props.moving}
                            // delay = {5000}
                            // x1 ={xRnd}
                            // y1 ={yRnd}
                            isGo={isGo}
                            setIsGo={setIsGo}
                            
                        />
                    //  </AnimatePresence>
                    )
                }
                )}

        </p>
    </div>
  )
}

export default Letters

const xRnd =() => { return Math.round(Math.random()*140) - 20; }
const yRnd =() => { return Math.round(Math.random()*140) - 20; }