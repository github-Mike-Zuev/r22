import {React, useState} from 'react'
import {motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import {StartContext} from '../../../../Start';






const Simbol = (props) => { 
let intervalId, delayTime =20; 
const indentX = 60;  
const [isHover, setIsHover] = useState(false);

const disable = () =>{ 
  props.setIsGo(false);
  clearInterval(intervalId);
    intervalId = setInterval((delayTime) => { 
      props.setIsGo(true);
    } , delayTime);}
// const context = React.useContext(StartContext);
const simbolsInLine = Math.round( window.innerWidth /38 );
let delta = ()=>{return( Math.round(Math.random()*800.5) - 400 )}; // -400 .. +400
let rnd8 = ()=>{return( Math.round(Math.random()*80)/10 )};
let angRnd = ()=>{return( Math.round(Math.random()*90*4*rnd8())-90*rnd8()*2)};
const xPos =(props.index % simbolsInLine)*26 + indentX;
const yPos =(Math.trunc(props.index/simbolsInLine)*32);
const xRnd = xPos + delta() ;
const yRnd = yPos + delta();
// console.log(window.innerWidth, "***", delta(), simbolsInLine,"####",(100 % simbolsInLine) );
  return (         
    <>
    <LayoutGroup id="group4">
    <motion.span   layout
    style={{ position:'absolute',
    // display: 'none'
    }} 
      // initial={{x:xRnd, y:yRnd-900, opacity: 0, scale:1,}}
      initial={{x:xPos, y:yPos, opacity: 0, scale:0.5,}}
      animate={//[ moving ? "moving" : "unMoving",
         isHover ? {
         // x:xPos, y:yPos, opacity: 0.7,
          scale:3, color:"white",
          
        }:{
          x:xPos, y:yPos, opacity: 1,
          scale:1.5, fontWeight:600,
          // transition:{
            // scale:{
              //  delay:.5,
              //  delay:8+(props.index)/5,
                // repeatDelay:0, duration:5,
              //  repeatType: "mirror", repeat:Infinity,
                // type:"keyframes", ease: "circOut"
          // },
            // x:{duration:3,repeat:0}, y:{duration:3,repeat:0}, opacity:{duration:3,repeat:0},
            // repeat:Infinity,
          // }
      }
  //  ]
  }
      // exit={{x: 500, y: 5 }}
      transition={{duration:30,  repeat:Infinity, delay:0.5+(props.index)/5, repeatType: "mirror",      type:"keyframes", ease: "circInOut" }}
      onHoverStart={() => {setIsHover(true)}}
      onHoverEnd={() => setIsHover(false)}
    >
      {props.simbol}
    </motion.span>
    <AnimatePresence >
      {
    // props.moving &&
    props.isGo && 
    <motion.span   layout
      style={{
        position:'absolute',
        // display: 'none'
      }}  
      initial={{
        x:xPos, y:yPos, margin:"auto",
        opacity: 0,
        scale:0.5, color:"gold",
        rotateX:0, rotateY:0, rotateZ:0, 
        // transition:{ delay:12,}
      }}

      animate={[// moving ? "moving" : "unMoving",
         isHover ?
          {//x:xPos, y:yPos, opacity:1, scale:1,
             color:"red", 
          // transition: {duration:5, 
           //   repeat:0,  repeatDelay:0, //repeatType: "mirror", type:"keyframes", ease: "circInOut"
        //  }
          }
          :
          {x:xRnd, y:yRnd+300, scale:rnd8(), // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ scale:rnd8(),
            rotateX:angRnd(), rotateY:angRnd(), rotateZ:angRnd(),
            opacity: 0.4, 
            transition:{
              ease: 'circIn',
              opacity:{ease: 'circOut'} ,
              delay:0.5+(props.index)/5, // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  delay: 3
               duration:3, repeat:Infinity,  repeatType: "loop", repeatDelay:30,
                // type:"spring" !!!! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   duration: 10
                
              }
            }
           ]}

      // animate = {{x:xRnd, y:yRnd, scale:rnd8(),
      //   rotateX:angRnd(), rotateY:angRnd(), rotateZ:angRnd(),
      //   opacity: 0.5, 
      //   transition:{
      //     ease: 'circIn',
      //     opacity:{ease: 'circOut'} ,
      //     delay:3,
      //      duration:20, repeat:Infinity, repeatDelay:0, repeatType: "loop",
      //       // type:"spring" !!!!
      //     }
      //   }}

        onHoverStart={() => {setIsHover(true)}}
        onHoverEnd={() => setIsHover(false)}
        whileTap= {() => disable()}
      
      exit={{
         style:{color:'yellow',
          display: 'none'}
        // x:xPos, y:yPos, 
        // opacity: 1,
        // scale:1,
        // rotateX:0, rotateY:0, rotateZ:0, 
      }}




            // animate={{x: props.x1, y: props.y1,duration: props.duration}}
            // exit={{x: xPos(props.ind), y: yPos(props.ind), duration: 5}}
            // variants={SimbolVariants}
            // initial={"start"}
            // animate={"moving"}
            // exit={"stop"}
            //   style={{overflow: 'hidden'}}


      // transition={{ duration: 5, type:'spring', repeat:Infinity, repeatDelay:8, repeatType: "mirror", }}
            //  transition={{repeat:3, delay: 0.1, duration: 2,type:'spring', ease:'backOut', repeatType: "mirror"}}
// ****************************************************
//             transition ={{
//               duration:2, // [0.9, 0.1, 0.1, 0.1],
//               repeatType:"reverse",
//               repeat:1,
//               // rotateX:{repeat:Infinity},
//               // type: 'spring', restDelta: 0.5
//             }}
//             ***************************************
// transition={{delay:0.5, duration:-10, repeat:Infinity, repeatDelay:0.3, repeatType: "loop", type:"spring"}}

    > 
      {props.simbol}
    </motion.span>
   
    } 
    </AnimatePresence> 
  </LayoutGroup> 
    
  </>
  )
}

export default Simbol;
// const SimbolVariants = {
//     stop:{ x:0, y:0,
//         //  duration: props.duration 
//     },
//     moving: (props)=>({ x: props.x1, y: props.y1,
//         // duration: props.duration
//     }),
//     start: (props)=>({ x: props.x1, y: props.y1,
//         // duration: props.duration
//     })
// }

