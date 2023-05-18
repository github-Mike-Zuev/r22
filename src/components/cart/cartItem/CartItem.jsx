import  React from 'react';
//import context from 'react-bootstrap/esm/AccordionContext'
import { StartContext } from '../../../Start'
const CartItem = (props) => {

/********************************************************** */
/***********  CartItem - ОБЪЕКТ КОРЗИНЫ ПОКУПАТЕЛЯ  ****** */
const context = React.useContext(StartContext)
  return (
    <div className='row row-cols-1 justify-content-evenly 
    row-cols-md-3 row-cols-sm-2 text-center'>
        <div className='col px-3 py-3'>
            <div className='card md-6 rounded'>
                <div className='card-header py-2 px-3'>
                  <h5>{props.title}</h5>
                  <img className='rounded' width={'50%'} src={props.img}></img>
                  <h5>
                    <br/>
                    <span>{props.price} руб.</span>
                  </h5>
                  <button type='button' className='w-100 btn btn-lg btn-primary'
                 onClick={()=> {
                   props.onDelCartItem(props.id)
                 // context.setCartList(props.deleteByPath("cart/" + props.id)); //2
                //   props.deleteByPath("cart/" + props.id); // 3
                //  context.setCartList((group)=> group.filter(item=> item.id !== props.id));  //3
                 }} >X 
                {/* onClick={()=> props.deleteItems(props.id)} >X   */}
                </button>
            </div></div>

        </div>
    </div>
  )
}
export default CartItem