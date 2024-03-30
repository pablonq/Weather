import { useState } from "react";
import '../estilos/WeatherForm.css';

function WeatherForm({onChangeCity}){
  const [city, setCity] = useState('');

  function manejarCambios(e){
    const value = e.target.value;
    if(value!==""){
    setCity(value);
    }
  }

  function manejarEnvio(e){
    e.preventDefault(); /* evita el comportamiento predeterminado de un evento, se aplica al evento e que se está pasando como argumento, el evento submit normalmente recarga la página o envía una solicitud al servidor. Al llamar a preventDefault(), puedes evitar que esto ocurra y controlar el comportamiento tú mismo. */
    onChangeCity(city);
  }
  return <form onSubmit={manejarEnvio} className="containerForm">
    <input type="text" onChange={manejarCambios} placeholder="Ciudad" />
    
  </form>
}
export default WeatherForm;