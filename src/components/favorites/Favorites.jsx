import React from 'react'
import { Link } from 'react-router-dom'; 
import FavorItem from './favorItem/FavorItem';
import axios from 'axios';
import { StartContext } from '../../Start'
/******************************************************************************* */
/***********  Favor -  Избранные товары покупателя (аналог Cart)  ************* */
const Favorites = () => {
  const context = React.useContext(StartContext)
  const delFavorItem = (id)=> {  // ("favorites", props.id)
    context.deleteByPath("favorites", id);
  }

    /** обработка нажатия - добавление в корзину */
    const addСartList = async (obj)=>{
      try{  /** findInСartList => obj если имеется в корзине */
        const findInСartList = context.cartList.find(objOver=> objOver.myId === obj.myId)
        if(findInСartList){/** удаление найденного эл-та из mockapi.io/cart/ */
          // axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findInСartList.id}`)
          // context.setCartList((except) => except.filter(o=>o.myId !== obj.myId))
          context.deleteByPath("cart", findInСartList.id)
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
    
  return (
    <div>
      {console.log(".favorList",context.favorList)}
      <h1 className='text-center py-5'>ЛЮБИМЫЕ ТОВАРЫ</h1>
       <div className='row row-cols-1 justify-content-end row-cols-md-3 row-cols-sm-2 text-center'>     
        <h2>В избранном: {context.favorList.length} товара.</h2>
        <Link exact to={'/cart'}>
             <button type='button' className='w-10 btn btn-lg btn-primary'>Перейти к корзине</button>   
        </Link>
    </div>

      <div>
        {
          (context.favorList === undefined || context.favorList.length === 0) ?
          <h1 className='col-md-8 offset-md-2'>Вы не выбрали</h1>
            :          
            <div>
                      {console.log("favorList.JSX:context.favorList ===", context.favorList)} 
            {
              context.favorList.map(favorUnit =>{
                return(
                 <FavorItem key={favorUnit.id}
                 { ...favorUnit }
                 onDelFavorItem = { delFavorItem }
                 btnAddСartList={(cartObj) => { addСartList(cartObj) }}
                 />
                )
              })
            }
          </div>
        }
        <div className='row'>
          <div className='col-md-8 offset-md-8'>
          <Link exact to={'/cart'}>
             <button type='button' className='w-10 btn btn-lg btn-primary'>Перейти к корзине</button>   
          </Link>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}

export default Favorites