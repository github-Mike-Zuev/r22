import React from 'react'
import { useForm } from "react-hook-form";
import  axios  from "axios";
import "./module.form1.css";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, Tooltip, CircleMarker, Polygon } from 'react-leaflet';
const colorOptions={color:'purple'}; //цвет фона карты
const centerPolygon=[[ [55.790823, 37.539031],[55.688479, 37.521845],[55.690906, 37.775819],[55.813141, 37.760065] ]];
const center=[55.769667, 37.627671];



const Form1 = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data); /** заменено */
    const onSubmit = (data) => {
        axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
        alert('Ваша заявка зарегистрирована, ожидайте звонка!')
        console.log("Form1 axios.post ==>",data); // тест
    }

    console.log(watch("example")); // watch input value by passing the name of it     
    return (

    <div className={'form1outer'}>
        <h1>Заполните заявку на заказ звонока</h1>
      <form className='form1' onSubmit={handleSubmit(onSubmit)} name='f1' method='post' action='/test' >

      <div className='inp'>
        <div className="labelInp">Фамилия</div>
        <input placeholder="Укажите фамилию" {...register("lName",{pattern:/^[А-Яа-яa-zA-Z]+$/i, minLength:2})}  />
        <div className="errMessage">
          {errors?.lName?.type === 'pattern'&&( <p>Поле заполненно некорректно</p> )}
          {errors?.lName?.type === 'minLength'&&( <p>должно быть не менее 2 букв</p> )}
        </div>
      </div>  

      <div className='inp'>
        <div className="label">Имя</div>
        <input placeholder="Укажите имя" {...register("fName",{pattern:/^[А-Яа-яa-zA-Z]+$/i, minLength:2, required:true})}  />
        <div className="errMessage">
          {errors?.fName?.type === 'pattern'&&( <p>Поле заполненно некорректно</p> )}
          {errors?.fName?.type === 'minLength'&&( <p>должно быть не менее 2 букв</p> )}
          {errors?.fName?.type === 'required'&&( <p>Необходимо указать имя</p> )}  
        </div>
      </div>   
      

      <div className='inp'>
        <div className="label"></div>
        <input placeholder="Укажите отчество" {...register("mName",{pattern:/^[А-Яа-яa-zA-Z]+$/i, minLength:2})}  />
        <div className="errMessage">
          {errors?.mName?.type === 'pattern'&&( <p>Поле заполненно некорректно</p> )}
          {errors?.mName?.type === 'minLength'&&( <p>должно быть не менее 2 букв</p> )}
        </div>
      </div>   
    

      <div className='inp'>
        <div className="label"></div>
        <input placeholder="Укажите телефон" {...register("tel",{pattern:/^((\+7|7|8)+([0-9]){10})$/, minLength:7, required:true})} type='tel' />
        <div className="errMessage">
          {errors?.tel?.type === 'pattern'&&( <p>Поле заполненно некорректно</p> )}
          {errors?.tel?.type === 'minLength'&&( <p>должно быть не менее 7 цифр</p> )}
          {errors?.tel?.type === 'required'&&( <p>Необходимо указать номер телефона</p> )}
        </div>
      </div> 
      
      <div className='inp'>
        <div className="label"></div>
        <input placeholder="Укажите e-mail" {...register("mail",{pattern:/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i})} type='email' />
        <div className="errMessage">
          {errors?.mail?.type === 'pattern'&&( <p>Поле заполненно некорректно</p> )}
        </div> 
      </div>  
    
    

      <button  className='button' type="submit">
        <div className='btnTxt1'>Заказать</div>  
        <div className='btnTxt2'>обратный</div>
        <div className='btnTxt3'>звонок</div>
        </button>
        {/* style={{margin: "auto auto 100px", width:'70vw', height:"500px"}} */}
    </form>
      {/* <div className='map'> */}
      <br/><br/>
        <h2>карта .........</h2>
      <MapContainer className='map' center={center} zoom={50} >
      
      <TileLayer  url='https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=kmwk3Q9DhIZQueVJoALQ'
       attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      //   url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
      // attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      /><CircleMarker center={center} pathOptions={{color:'black'}} radius={10} // макрер-круг
/> <Marker position={center}> <Popup>Мы находимся тут</Popup><Tooltip>При наведении</Tooltip>
 </Marker> <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
        <br />

{/* </div> */}
    </div>
    )
}

export default Form1