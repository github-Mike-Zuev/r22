import React from 'react'
import {motion,stagger, AnimatePresence } from 'framer-motion';
const UnorderList = (props) => {
  return (
    <div>
        {/* <h1>{props.title}</h1> */}
            {props.children.map((line, index, arr) =>{
              // console.log("********", arr)
                    return(
                    // <AnimatePresence>
                    <motion.li    // && props.moving
                    initial={{ marginTop:10,
                      scaleX:0.01, scaleY:0.4, skew:-80,
                      opacity:0.0, x:500-index*100, y:-500+(arr.length -index)*100//-99-index*index*index, 
                    }}
                    
                    animate = {{
                      scaleX:0.85, scaleY:1.5, skew:-60, // skewX:50,
                      opacity:1, x:0,  y:0,
                      transition:{
                        duration:6, delay:(arr.length -index)*4
                      }
                    }}
                    exit={{
                      y:-300,
                    }}
                    >
                      {line}
                    </motion.li>
                    //  </AnimatePresence>
                    )
                }
            )}
    </div>
  )
}

export default UnorderList