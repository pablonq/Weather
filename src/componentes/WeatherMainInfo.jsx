import '../estilos/WeatherMainInfo.css';
function WeatherMainInfo({weather}){
  return (
  <div className='mainInfo'>
    <div className='city'>{weather?.location.name}</div>
    <div className='country'>{weather?.location.country}</div>
    <div className='row'>
      <div>
        <img 
        src={`http:${weather?.current.condition.icon}`} 
        width="128" 
        alt={weather?.current.condition.text} />
      </div>
      <div>
        <div className='condition'>{weather?.current.condition.text}</div>
        <div className='current'>{weather?.current.temp_c}°C</div>
      </div>
    </div>
    <iframe 
    title="mapa"
    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12410.436727194137!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1711824987511!5m2!1ses-419!2sar`} /** ` template string   */
    width="100%" 
    height="450" 
    style={{border:0}} 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>

  </div>
)};

export default WeatherMainInfo;