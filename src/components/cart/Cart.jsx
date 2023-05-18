import React from 'react'
import CartItem from './cartItem/CartItem';
import { StartContext } from '../../Start';
/******************************************************** */
/***********  Cart -  КОРЗИНА ПОКУПАТЕЛЯ   ************* */
const Cart = () => {
// const Cart = (props) => {
  const context = React.useContext(StartContext); 
  // const totalCart = context.cartList.reduce((element = context.cartList.length, obj)=>
  //   element + Number(obj.price), 0 ) // ЗАМЕНА props

  const delCartItem = (id)=> {  // ("cart", props.id)
    // context.setCartList(context.deleteByPath("cart", props.id));
    context.deleteByPath("cart", id);
  }

  return (
  
    <div>
      {console.log(".cartList",context.cartList)}
      <h1 className='text-center py-5'>КОРЗИНА</h1>
      <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
      <h2>В корзине {context.cartList.length} шт.</h2>
           <h2>Сумма корзины:
            <span> {context.cartList.reduce((A, B) =>  A + Number(B.price), 0 )}  руб.</span>
            </h2>
            <button type='button' className='w-10 btn btn-lg btn-primary col-md-1 '>Заказать</button>
    </div>
      <div>
        {
          (context.cartList === undefined || context.cartList.length === 0) ?
          <h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>
            :          
            <div>
            {console.log("CART.JSX:context.cartList ===", context.cartList)}
 
            {
              context.cartList.map(cartUnit =>{
                return(
                 <CartItem key={cartUnit.id}
                 { ...cartUnit }
                //  deleteItems = { props.deleteItems }
                //  deleteByPath = { context.deleteByPath }
                 onDelCartItem = { delCartItem }
                // onDelCartItem = { context.deleteByPath }
                 />
                )
              })
            }
          </div>
        }
      </div>
      <hr className='py-5'/>
      <br className='py-5'/>
    </div>
  )
}

export default Cart