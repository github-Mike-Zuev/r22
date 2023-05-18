import React, { useState } from 'react'
import { StartContext } from '../../../Start'
/************************************************************************************* */
/***********  FavorItem - ОБЪЕКТ ЛЮБИМЫХ ТОВАРОВ ПОКУПАТЕЛЯ (аналог FavorItem) ****** */
const FavorItem = (props) => {
const context = React.useContext(StartContext)
const [added, setAdded ] = useState(context.isAdded);
  /**обработка нажатия - добавление в корзину*/
  const onClickAddСartList =()=>{
    setAdded(!added);
    let id = props.id;
    let myId = props.myId;
    let title = props.title;
    let description = props.description;
    let price = props.price;
    let img = props.img;
    props.btnAddСartList({title, description, price, img,id, myId});
}
  return (
    <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
        <div className='col px-3 py-3'>
            <div className='card md-6 rounded'>
                <div className='card-header py-2 px-3'>
                  <h5 style={{backgroundColor: added ? "yellow" : "lightgreen" }}
                  >{props.title}</h5>

                  {   /** кнопка - добавление в корзину */ }
                  <button type='button' className='w-100 btn btn-lg btn-primary'
                    onClick={onClickAddСartList} > { context.isAdded(props.myId) ?  
                    <img width={13}
                    src={context.isAdded(props.myId) ? '/img/icon.png':'' }
                    alt=""/>:'Добавить в корзину' }
                  </button>

                  <img className='rounded' width={'100%'} src={props.img}></img>
                  <h5>
                    <br/>
                    <span>{props.price} руб.</span> 
                  </h5>
                  <p>{props.description}</p>
                  <button type='button' className='w-100 btn btn-lg btn-primary'
                 onClick={()=> {
                   props.onDelFavorItem(props.id)
                 }} >убрать из избранного 
                </button>
            </div></div>
        </div>
    </div>
  )
}
export default FavorItem