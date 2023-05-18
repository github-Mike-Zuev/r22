import React from 'react'
import axios from 'axios';
// import Slider from './slider/Slider'
import Tour from './tour/Tour'
import './module.main.css'
import { StartContext } from '../../Start';

const Main = (props) => {
  const context = React.useContext(StartContext);
  /** обработка нажатия - добавление в избранное */
  const addfavorList = async (obj)=>{
    try{    /** findInfavorList => obj если имеется в избранном */
      const findInfavorList = context.favorList.find(objFav=> objFav.myId === obj.myId)
      if(findInfavorList){ /** удаление найденного эл-та из mockapi.io/favorites */
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findInfavorList.id}`)
        context.setFavorList((except) => except.filter(o=>o.myId !== obj.myId))
      }
      else{/** запись в mockapi.io/favorites переданного в функцию аргумента obj */
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)/** после записи - добавление к State-избанного - аргумента obj*/
        context.setFavorList([...context.favorList, data])
      }
    }
    catch{
      alert('Ошибка mockapi.io/favorites')
    }
  }
  /** обработка нажатия - добавление в корзину */
  const addСartList = async (obj)=>{
    try{  /** findInСartList => obj если имеется в корзине */
      const findInСartList = context.cartList.find(objOver=> objOver.myId === obj.myId)
      if(findInСartList){/** удаление найденного эл-та из mockapi.io/cart/ */
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findInСartList.id}`)
        context.setCartList((except) => except.filter(o=>o.myId !== obj.myId))
      }
      else{ /** запись в mockapi.io/cart переданного в функцию аргумента obj */
        const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj) /** после записи - добавление к State-корзины аргумента obj*/
        context.setCartList([...context.cartList, data])
      }
    }
    catch{
      alert('Произошла ошибка')
    }
  }
  return (context.tourList.map(tour=>{ 
  return (    <Tour   key = {tour.id}
    {...tour} 
    btnAddСartList={(cartObj) => { addСartList(cartObj) }}
    btnAddfavorList={ (favObj) => {addfavorList(favObj) } }
    
        />
  ) }))
}

export default Main

    // <div className=''>
    //     <div className='container py-5'>
    //         <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 rounded  justify-content-center '>
    //             <div className='item  col py-4 rounded'> 
    //                 <div className='item-header py-2'>
    //                    <h1>СПА ОТЕЛЬ ВЕРШИНЫ</h1>
    //                 </div>
    //              <Slider  />
    //             </div>
    //         </div>
    //     </div>

    // </div>