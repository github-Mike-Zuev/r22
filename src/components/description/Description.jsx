import { React, useState } from 'react'
import './module.description.css';
import {motion, LayoutGroup, spring, Variants, Transition, AnimatePresence, mirrorEasing, color } from 'framer-motion';
import Letters from './letters/Letters';
import UnorderList from './lists/UnorderList';
import Title1 from './titles/Title1';

import context from 'react-bootstrap/esm/AccordionContext';

const Description = () => {
const [isVisible, setIsVisible] = useState(true);
const clickVisibility = () =>{setIsVisible(!isVisible);}
 const [moving, setMove] = useState(true);
 const [timing, setTiming] = useState(true);
 const [isHover, setIsHover] = useState(false);
 let delayTime = 23000;
 let intervalId;
  let xxx1=0,  yyy1=0;
//  const xxxRnd =() => { return Math.round(Math.random()*140) - 20; timerGo(delayTime); }
//  const yyyRnd =() => { return Math.round(Math.random()*140) - 20; timerGo(delayTime); }
const xxxRnd =() => { return Math.round(Math.random()*1100) - 300; }
const yyyRnd =() => { return Math.round(Math.random()*300) - 200; }
let rnd5 =()=>{return( Math.round(Math.random()*4.9) + 1)};
let rndDg45 =()=>{return(Math.round(Math.random()*90.9)-45)};
let rndSign =()=>{return Math.round(Math.random()*4 - 1.7)};
//*************************************************************** */
 const timerGo = (delayTime) =>{
  if (true){//(timing) {
      clearInterval(intervalId);
      intervalId = setInterval((delayTime) => { 
      setMove(!moving);
      xxx1 = Math.round(Math.random()*840) - 50;
      yyy1 = Math.round(Math.random()*440) - 50;
      // console.log("--------  ", xxx1,"  ", yyy1);
    }
      , delayTime);
  }
 } 
 timerGo(delayTime);
    // **************************************************************************
// animate={{ rotateX:-1.01, rotateY:0.05, rotateZ:0.05}} transition={{duration:5, repeat:spring}}
const titleVariants  = {
  move:(xxx1, yyy1) =>({  
    x: xxxRnd(),// x:xxx1,
    y: yyyRnd(),// y:yy1,
    transition: { duration: 3.7 }
  }),
  unMoving: { x:-60, y:-60,   rotateX:30 ,
    textAlign:'center', width:'fit-content',
    // marginBottom: 300,
    transition: { duration: 3.7 }
  },
  hover: { rotateY:rndDg45(), scale: 1.2, y: yyy1, color:"white",
    transition: { duration: 3.7 }
  },
  unHover: { rotateX:360*rnd5()*rndSign(), rotateY:rndDg45(),
    transition:{duration:5, repeat:Infinity,  repeatType:"reverse", type:"spring",}
    //  transition:{duration:3, repeat:3,  repeatDelay:0.3, repeatType: "mirror", type:"keyframes", ease: "circInOut"}
    // transition: { duration:2, repeat:5, type:mirrorEasing , repeatDelay:1}
  },
  press: { scaleY: 2.9, color: 'lightgreen',}
};

  return (
    <div className='description'>      
       {/* {console.log(moving, "-*****************----")} */}
       <br/>
       <small>УМЕНЬШИТЕ МАСШТАБ!!! (КОГДА ДЕЛАЛ АНИМАЦИИ- ЗАБЫЛ ВЕРНУТЬ МАСШТАБ 1:1, И СДЕЛАЛ В 50% ОКНЕ) Ещё не адаптировал.</small>
       <br/>
      <h1><Title1 indentX={-100} >Описание:</Title1></h1>
      {/* <h1>Описание:</h1> */}
      <br/><br/>
      <LayoutGroup id="group1">
      <h1><Title1 indentX={-130}>Размещение</Title1></h1>
      <Letters 
      // title = {"Размещение"}
       moving = {moving} >
          В номерной фонд 4-этажного отеля включены 3-, 4-, 5-местные стандартные номера с классическим интерьером и прекрасным видом из окон. В номерах: одна двуспальная или несколько односпальных кроватей, телевизор, холодильник, санузел с душем. Бесперебойная подача горячей и холодной воды превращает отдых в удовольствие.
      </Letters>
      </LayoutGroup>
      <br/><br/><br/>
      <LayoutGroup id="group2">
      <div  onClick={clickVisibility}  style={{ // backgroundColor: 'orange',width: '300px',
        border:isVisible?'dashed 5px lightgreen':'solid 5px red', borderRadius:30, textAlign:'center', marginBottom:150,
        marginTop:150 }}> <h2  style={{color:isVisible?"crimson":"forestgreen"}}> {isVisible?"Скрыть ДЕТАЛИ":"Отобразить ДЕТАЛИ"}</h2>
      
      <AnimatePresence>
        { isVisible&&<motion.div layout
        initial={{  border:'dotted 5px yellow', borderRadius:30, color:'green', height:0, opacity: 0.7, overflow: 'hidden', }}

    animate={{color: 'white', opacity: 1,   transition:{ease: [0.01, 0.9, 0.9, 0.9], delay:0.1, duration: 0.1,  height:{duration:10}, type:"just", repeatType:'mirror', repeat:41, repeatDelay:0.1,  }, height:"auto"}} /*    */
 
    exit={{background:"brown", color: 'red',borderRadius:1, opacity:0.7, height:0, margin:"auto", scaleX:0.7, scaleY:1.2, transition:{ delay:0.1, duration:0.5, opacity:{duration:0.9}, height:{duration:5}, repeat:8, repeatDelay:0.1, opacity:{repeatType:"loop"}, repeatType: 'reverse', type:"just"}}}
        >
        <div className='details'>
        <UnorderList >
          {[
                       
            '- 3-местный номер "Эконом". Номер (санузел на этаже) площадью 16 м2 на первом этаже на 3-4 человека. Номер с двухспальной кроватью, одной полуторной кроватью, прикроватными тумбочками, телевизором, сплит-системой, шкафом. Сан узел на 2 этаже индивидуально для этого номера.',
            '- 2-местный номер "Стандарт". 1-комнатный номер (15 м2) с балконом оборудован двумя прикроватными тумбочками, двух-спальной кроватью, сплит-системой, телевизором, санузлом. Фен, утюг, сушилка для белья на этаже. Номер на 4 этаже с видом на море.',
            '- 3-местный номер "Стандарт". 1-комнатный номер (20 м2) оборудован: три одно-спальные кровати, две прикроватные тумбочки, платяной шкаф, сплит-система, телевизор, санузел, балкон на весь этаж. Фен, утюг, сушилка для белья на этаже. Окна выходят во двор.',
            '- 4-местный номер "Стандарт". 1-комнатный номер (20 м2) оборудован: четыре одно-спальные кровати, две прикроватные тумбочки, платяной шкаф. телевизор, сплит-система, санузел. Фен, утюг, сушилка для белья на этаже.Окна выходят во двор, балкон на весь этаж.'         
          ]}
        </UnorderList>
            Во дворе гостиницы можно насладится прохладой в тени цветов, сидя за столиками. Шум городской суеты не слышен, детей никто не потревожит.
        </div>  
          

           {/* <div className='details' >
            <ul><li>
            - 3-местный номер "Эконом". Номер (санузел на этаже) площадью 16 м2 на первом этаже на 3-4 человека. Номер с двухспальной кроватью, одной полуторной кроватью, прикроватными тумбочками, телевизором, сплит-системой, шкафом. Сан узел на 2 этаже индивидуально для этого номера.
            </li><li>
            - 2-местный номер "Стандарт". 1-комнатный номер (15 м2) с балконом оборудован двумя прикроватными тумбочками, двух-спальной кроватью, сплит-системой, телевизором, санузлом. Фен, утюг, сушилка для белья на этаже. Номер на 4 этаже с видом на море.
            </li><li>
            - 3-местный номер "Стандарт". 1-комнатный номер (20 м2) оборудован: три одно-спальные кровати, две прикроватные тумбочки, платяной шкаф, сплит-система, телевизор, санузел, балкон на весь этаж. Фен, утюг, сушилка для белья на этаже. Окна выходят во двор.
            </li><li>
            - 4-местный номер "Стандарт". 1-комнатный номер (20 м2) оборудован: четыре одно-спальные кровати, две прикроватные тумбочки, платяной шкаф. телевизор, сплит-система, санузел. Фен, утюг, сушилка для белья на этаже.Окна выходят во двор, балкон на весь этаж.
            </li></ul>
            Во дворе гостиницы можно насладится прохладой в тени цветов, сидя за столиками. Шум городской суеты не слышен, детей никто не потревожит.
           </div>    */}
        </motion.div>
        }
      </AnimatePresence>
      </div>
      

      {/* <AnimatePresence> */}
      {/* translateY:'50%' */}
      <motion.h2 layout 
      // animate={{ rotateX:-1.01, rotateY:0.05, rotateZ:0.05}} transition={{duration:5, repeat:spring}}
      initial = {"unMoving"}
      animate={[moving ? "move" : "unMoving", isHover ? "hover" : "unHover"]}
      variants={titleVariants}
      // ****************************************************
      whileTap="press"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      // whileHover={{scale:1.2 }}
      // ******************************************************
      > Достоинства:</motion.h2>
      {/* </AnimatePresence> */}

 
      <motion.ol layout className='pererences'
          variants={olContainer}
          initial="init"
          animate="anime"
      >
        <motion.li variants={LiVariant1}>
      - сплит система в номере позволяет поддерживать комфортный температуру.
      </motion.li><motion.li variants={LiVariant2}>
      - в любое время суток можно отдохнуть на свежем воздухе, перекусить столиками.
      </motion.li><motion.li variants={LiVariant1}>
      - территория гостиницы огорожена, проникновение посторонних лиц не допускается.
      </motion.li><motion.li variants={LiVariant2}>
      - находится в тихом месте п.Лазаревское (частный сектор).
      </motion.li><motion.li variants={LiVariant1}>
      - наличие телевизора для любителей сериалов.
      </motion.li><motion.li variants={LiVariant2}>
      - удобные, мягкие кровати, чистое белье (полотенца, постельное белье).
      </motion.li><motion.li variants={LiVariant1}>
      - домашний уют и чистота - становятся явлением одного порядка.
      </motion.li><motion.li variants={LiVariant2}>
      - бесперебойная подача горячей и холодной воды превращает ваш отдых в удовольствие.
      </motion.li><motion.li variants={LiVariant1}>
      - наличие балкона (один на весь этаж).
      </motion.li><motion.li variants={LiVariant2}>
      - не слышен шум городской суеты, сон ваших детей никто не потревожит.
      </motion.li><motion.li variants={LiVariant1}>
      - приготовление пищи на нашей кухне под вашим контролем.
      </motion.li><motion.li variants={LiVariant2}>
      - близость магазинов, кафе-баров, развлечений, достопримечательностей, пляжа.
      </motion.li></motion.ol> 
     </LayoutGroup> 
     <LayoutGroup id="group3">   
        {/* ***********  test motion - 'framer-motion';  *********  */}
        <motion.img 
          src='../../../img/icon.png' alt='' width={'10%'}/* или width='10%' */
initial={{x:'10vw', opacity:0.8,rotateY:-720}} 
animate={{x:'0vw', opacity:1, rotateY:720 }}
transition={{delay:1, duration:5,repeat:Infinity, repeatDelay:0, repeatType: "mirror", type:"keyframes", 
// ease: "circInOut"
}} />


        <motion.img 
          src='../../../img/ballPlus.png' alt='' width={'10%'}/* или width='10%' */
initial={{x:'50vw', opacity:0.8,}} 
animate={{x:'30vw',/*-6vw */opacity:1, rotate:720 }}
transition={{delay:1, duration:5,repeat:Infinity, repeatDelay:0, repeatType: "mirror", type:"keyframes", 
// ease: "circInOut"
}} 

        //  initial={{ x:(window.innerWidth/2)-50*rnd5()}}
        //  animate={{rotate:360*rnd5(),rotateY:45*rnd5(), x:(window.innerWidth/2)-50*rnd5()}} 
        // transition={{delay:1, duration:10, repeat:Infinity, repeatDelay:0.5, repeatType: "mirror", type:"spring",}}
         />

        {/* <div style={{width:'fit-content'}}> */}
        <motion.p 
        initial={{x:'60vw' /*800*/, opacity:0.2, fontWeight:900, color:'pink' }} 
        animate={{x:-80,/*-6vw */opacity:1, fontWeight:100,}}
        transition={{delay:1, duration:5,repeat:Infinity, repeatDelay:0, repeatType: "mirror", type:"keyframes",
        //  ease: "circInOut"
        }} 
            // transition={{delay:0.5, duration:2,repeat:Infinity, repeatDelay:0.3, repeatType: 'loop', type:'just'}} 
        style={{width:'fit-content', fontSize:'250%'}}>ПОДВИЖНЫЙ ТЕКСТ</motion.p> 
       {/* </div> */}
      </LayoutGroup> 

    </div>
  )
}

export default Description

const olContainer = {
  init: { y:-950, opacity:0.8 },
  anime:{ y:0,     opacity:1,
      transition: {
        duration:14,
        staggerDirection: -1,
        delayChildren:1,
        when: "afterChildren",
        staggerChildren: 3,
        repeat:0,
        repeatType:"reverse", type:"tween",
      }
  }
}

const LiVariant1 = {
  init:{x: -30, y: 50, opacity:0.0, },
  anime:{x:-30, y: -100, opacity:1,
     transition: {duration:1,
    repeat:4,  repeatType:"reverse",
    //  type:"spring",  
    // ease: "circIn"
  }}}
const LiVariant2 = {
  init:{ x:-180, y:-100, opacity:0.0,},
  anime:{x: -30, y:-100, opacity:1, transition:{duration:3,
    repeat:3,  repeatDelay:0.1, repeatType: "mirror", type:"keyframes", ease: "circInOut"
  }}}
