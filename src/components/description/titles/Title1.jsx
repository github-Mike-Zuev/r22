import React from 'react'
import {motion,LayoutGroup,} from 'framer-motion';

const Title1 = (props) => {
  let maxIndex = props.children.length;
  const simbolsInLine = Math.round( window.innerWidth /44 );
  let rnd8 = ()=>{return( Math.round(Math.random()*80)/10 )};
  let angRnd = ()=>{return( Math.round(Math.random()*90*4*rnd8())-90*rnd8()*2)};
  const widthSimbol = 28;
  const xPos=(index) => {return(index % simbolsInLine) * widthSimbol + props.indentX};
  const yPos=(index) => {return(Math.trunc(index/simbolsInLine)*32)};
  let delta = ()=>{return( Math.round(Math.random()*801) - 400 )};
  let indentRndX = -50;
  const xRnd =() => {return props.indentX - indentRndX +
     Math.round(Math.random() *( (maxIndex * widthSimbol) + indentRndX * 2) )};
  const yRnd =(index) => {return yPos(index) + delta()};
  return (
    <div>
      
      {
        Array.from(props.children).map((symbol, index) =>{
          console.log(symbol,"//",maxIndex,);
          let delayRotate = index+1+2/rnd8();
          let repeatDelayRotate = maxIndex/rnd8();
          return( 
            <LayoutGroup id="group5">
            <motion.span layout style={{ position:"absolute",
    // display: 'none'
    }} 
            initial={{ x:xRnd(), y:-250, rotateX:angRnd(), rotateY:angRnd(), 
            }}
            animate={{ x:xPos(index), y:yPos(index), rotateX:0, rotateY:0,
              transition:{//duration:5, repeat:Infinity,
                x:{ duration:2}, y:{ duration:2},
                // rotateX:{delay:index*+4, repeatDelay:maxIndex*rnd8()/5, duration:rnd8()/maxIndex, repeat:Infinity, ease: "circIn"
                rotateX:{delay:delayRotate, repeatDelay:maxIndex, duration:2, repeat:Infinity, ease: "circOut"},  
                rotateY:{delay:delayRotate, repeatDelay:maxIndex, duration:2, repeat:Infinity, ease: "circIn", 
                  // repeat:3,repeatDelay:0.1,
                     //repeatType:"loop", type:"inertia",// ease: "circInOut"
                    },
                
              },
            }}
            exit={{}}
            >
              {symbol}
            </motion.span>
            </LayoutGroup>

      )})}
    </div>
  )
}

export default Title1