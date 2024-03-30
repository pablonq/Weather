import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import '../estilos/WeatherApp.css';
import Logo from '../imagenes/logo.png';
function WeatherApp(){
  const[weather, setweather]=useState(null);

  useEffect(()=>{
    cargarInfo(); /**cada vez q reinicie va a llamar a la funcion "cargarInfo()" y va a cargar*/
  }, []   /* Hook de efectos colaterales, sirve para: ejecutar codigo cuando carga la app, cuando existe un renderizado ó cuando el componente se destruye. Esta funcion recibe un llamado. En este caso una funcion anonima. Recibe una funcion y un arreglo de dependencias */
  
  ); 
  useEffect(()=>{
    document.title = `Clima | ${weather?.location.name ?? ""}`; /** cada vez q reinicie va a tomar el dato de weather y lo va asignar al nombre de la web en el caso de que esté dispinible sino asigna arreglo vacio  */
  }, [weather]
 );
    

 async function cargarInfo(city = 'Neuquen'){
  try{
    const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
    const json= await request.json();
    console.log(json);
    setweather(json);
  }catch (error){}

  }

  function manejoCambioCiudad(city){
    setweather(null);
    cargarInfo(city);

  }
  return(
    <div className="container">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src = {Logo}
        alt = 'logo' />
      </div>
      <WeatherForm onChangeCity={manejoCambioCiudad}/>
      
      <WeatherMainInfo weather={weather}/>
      </div>
    );
  };
  export default WeatherApp;