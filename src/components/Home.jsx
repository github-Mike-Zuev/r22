import React from 'react';
import Slider from './slider/Slider';
import Main from './main/Main';
import {motion, AnimatePresence } from 'framer-motion';
import "./module.home.css"

/**********************************************************************/
/************* Home = <Slider/> + <Main/>-карточки  ******************/

const visibleVariants = {
    open:{ opacity: 1, height: 'auto', },
    closed:{opacity: 0, height:0, }
}
const btnRight = window.innerWidth - (window.innerWidth / 2);
const outerRight = window.innerWidth -300 
const Home = (props) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const clickVisibility = () =>{
     setIsVisible(!isVisible);

  }
  return (
     <div style={{overflow:"hidden" //width:"100vw",
     }}> 
      <AnimatePresence>  {/*  mode="wait" */}
      {
        /* !isVisible && */
        <motion.div layout
        variants={visibleVariants}
            initial={{ opacity: 0, height: 0, }}
            animate={isVisible ? "closed" : "open" }
            exit={{ opacity: 0, height: 0, }}
            transition={{duration:4, }}
            style={{overflow: 'scroll',
            }}
        >
        <Slider/>
        </motion.div>
    }
        <motion.div className='btnSwith' //!!! NO  layout
            onClick={clickVisibility}
            style={{textAlign:'center', width: 'fit-content', margin:"auto", zIndex: 3,
                 padding:30, background:"lightgreen", borderRadius: "50%" , //height:100,
                  position:isVisible?'fixed':"inherit", //position:'fixed', y:-500,
                  y:isVisible?"60vh":-150, x:isVisible?"70vw":"30vw", opacity:1,
                //   border:"solid 10px blue",// - перенесено в стили css
                 color:isVisible?"green":"yellow",// x:btnRight,
            }}
            initial={{scale:0.8 // x:900//right:100, bottom:150,  
            }}
            animate={{ 
              //  right:150, bottom:150,
              // color: ["red","red, green","green", "yellow"],
               // y:-500,//[-550,-550, 300,300, 300, ],
             // x: [outerRight, btnRight, outerRight, btnRight,outerRight, outerRight ], //outerRight
            // x:["150%", "150%", "70%", "72%", "70%", "70%", "-25%", ],
                // width: ["90%", "72%", "50%", "72%", "70%"],
                 opacity: [ 0.4, 0.0, 0.2, 0.9, 0.2, 0.0, 0,], scale:1,
               // position: ['inherit', 'inherit', 'fixed', "fixed",'relative',]//absoute  fixed relative sticky
            }}
            transition={{
                duration: 15,
                // ease: "easeInOut",
                times: [0, 0.1, .2, .7, .8, .9, 1],
                repeat: Infinity,
                delay: 3,
                repeatDelay: 5
            }}
            whileHover={{scale:1.5, opacity:1, color:"blue", border:"none",
         }}
        >    
            {isVisible ? <p>РАЗВЕРНУТЬ ЗАСТАВКУ</p>: <p>Показать предложения</p> }
            {/* {isVisible ? <h1>* РАЗВЕРНУТЬ ЗАСТАВКУ * </h1>: <h1> * РАЗВЕРНУТЬ ВАРИАНТЫ * </h1> } */}
          </motion.div>  
                {
                    // isVisible &&
                    <motion.div  layout
                        variants={visibleVariants}
                        initial={{ opacity: 0, height: 0, }}
                        animate={isVisible ? "open" : "closed" }
                        // animate={{ opacity: 1, height: 'auto', }}
                        exit={{ opacity: 0, height: 0,  }}
                        transition={{duration: 20 }}

                        style={{overflow: 'scroll',
                            }}
                        // transition={{ duration: 1 }}
                    >
                        {/* <h1>@@ ЗАГОЛОВОК @@</h1> */}
                        <Main
                        />  
                    </motion.div>
                } 
        
    </AnimatePresence>
    </div>
  )
}

export default Home;

