import axios from 'axios'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Start.css";
import { Route, Routes } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import Home from "./components/Home"; 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Form1 from "./components/forms/Form1";
import Description from "./components/description/Description";
import Main from './components/main/Main';
import Cart from './components/cart/Cart';
import Favorites from './components/favorites/Favorites';

export const StartContext = React.createContext({})

function Start () {
  //  const [tours, setTours] = useState([]);
    const [tourList, setTourList] = useState([]);/** данные туров*/
    const [favorList, setFavorList] = useState([])/** избранное */
    const [cartList, setCartList] = useState([]) /** корзина */
    // useEffect( () => { axios.get("http://localhost:3000/")  }, []); //test nest
   
    useEffect( () => {
        async function getData(){ 	
            try {
               // const test_nest = await axios.get("http://localhost:3000/"); // test nest
                const tourData = await axios.get('https://63e2333fad0093bf29ca0c0e.mockapi.io/tyrs'); 
                setTourList(tourData.data);
                const favorData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
                setFavorList(favorData.data);	
                const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')
                setCartList(cartData.data);	
            } catch {
                 alert(`Ошибка чтения MockAPI !`);
        }   } getData();   
    }, []);	
    // console.log(tours);
    const deleteItems=(id)=>{ // !!!!замена deleteByPath
        axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
        setCartList((group)=> group.filter(item=> item.id !==id))
      }
      /** удаление по сроке-пути с id из mockapi.io/path## (path-строка, ##-число=id), из стэйтов - удалять отдельно в компонентах! иначе не отображаются изменения!!! */
      
      const deleteByPath = async (path, id)=>{
        /** 2 варианта folders:cart/${id} || favorites/${findFavorites.id}  */
        // const indexSlah = pathWithId.lastIndexOf("/");
        // const pathMyid = Number(pathWithId.slice(indexSlah + 1));
        // const mocId  = cartList.find(item=> item.myId === pathMyid).id;
         //console.log("PathWithId ===", pathWithId, "pathMyid= ", pathMyid, pathWithId.lastIndexOf("/")); // тест
        const mocPath  = path + "/" + id;
        const cartListIndex = cartList.findIndex
        
        //const pathMocId = pathWithId.slice(0, indexSlah + 1) + mocId
        // console.log("cartList=",cartList," mocId=", mocId," pathMocId=", pathMocId ); // тест
        console.log("cartList=",cartList," id=", id," mocPath=", mocPath ); // тест
      try {
          await axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/${mocPath}`)
       // var result = await axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/${pathMocId}`)
        //axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`) //заменено
        //const folderCase = pathWithId.slice(0, 4);
       // if(folderCase == "cart"){ // операция с директорией cart - корзины
        if(path == "cart"){ // операция с директорией cart - корзины
         // return cartList.filter(item=> item.id !== pathId);
          if(cartList.length == 1){setCartList([]); }
          else {
            const cartIndex = cartList.findIndex(item => item.id === id);
            cartList.splice(cartIndex, 1);
            const newList = Array.from(cartList);
            console.log("cartList=",cartList," cartIndex=", cartIndex ); // тест
            setCartList(newList);

        //  const newList = Array.from(cartList.filter(item=> item.id !== pathId));
        //  const firstElement = cartList[0];
        //  console.log("cartList=",cartList," cartList.splice(0,1)=",cartList.splice(0,1) ); // тест
        //  setCartList(cartList.splice(0,1));
        //  console.log("firstElement ===", firstElement ); // тест 
        //  setCartList([...cartList,
        //   {
        //     key:firstElement.id,
        //     id:firstElement.id,
        //     myId:firstElement.myId,
        //     title:"---", //firstElement.title,
        //     description:firstElement.description,
        //     price:firstElement.price,
        //     img:firstElement.img
        //   }
        // ]); //setSTATES-в компоненты(ренд.)
         //setCartList([firstElement, ...cartList]); //setSTATES-в компоненты(ренд.)
        //  setCartList((group)=> group.filter(item=> item.id !== pathId)) //setSTATES-в компоненты(ренд.)


           } 
        // }else if(folderCase == "favo"){ /** операция с директорией favorites -избранное */
        }else if(path == "favorites"){ /** операция с директорией favorites -избранное */
          // return favorList((group)=> group.filter(item=> item.id !== pathId));
          const favorIndex = favorList.findIndex(item=> item.id === id);
          favorList.splice(favorIndex, 1);
          const newList = Array.from(favorList);
          console.log("favorList=",favorList," favorIndex=", favorIndex ); // тест
          setFavorList(newList);
          /******** */
        }else console.log("===>ERROR:deleteByPath - folderCase",path + id)
      // }catch{alert('ошибка удаления mockapi.io/'+ pathWithId)}
       }catch{alert('ошибка удаления mockapi.io/'+ path+id)}
      }
      


      const isAdded=(myId)=>{ /** если находится в корзине */
        return cartList.some((item)=> item.myId === myId)
      }
      
      const isFav=(myId)=>{ /** если находится в избранном */
        return favorList.some((item)=> item.myId === myId)
      }
    return(
    <>
        <StartContext.Provider
            value={{
              //  tours, setTours,  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                tourList, setTourList, /** данные туров*/
                favorList, setFavorList,
                cartList, setCartList,
                isAdded, /** если находится в корзине */
                isFav,    /** если находится в избранном */
                deleteByPath, /** удаление по сроке-пути с id из mockapi.io/path## (path-строка, ##-число=id) */
            }}
        >
        <Header/>
        <Footer/>
        <Routes>
            <Route path = '/' element={
                <Home
                    //tours={ tourList }  //!!!!!!!!!!!!!!!!!!!!!
            />  }  />
            <Route path = "/form1" element={
                  <Form1
            />  }  />
            <Route path = "/description" element={
                  <Description
            />  }  />  
            <Route path = "/favorites" element={ 
                  <Favorites 
            />  }  />
            <Route path='/cart'  element={
                    <Cart
                    // totalPrice={
                    //   overlayItems.reduce((element = overlayItems.length, obj)=>
                    //   element+obj.price, 0 
                    //   )
                    // }
                   // deleteItems={deleteItems} //!!!
            /> } />      
        </Routes>
        </StartContext.Provider>
    </>
    )
}
export default Start;