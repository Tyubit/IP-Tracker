import { useState, useEffect} from 'react'
import { useLoadScript } from '@react-google-maps/api'


import './App.scss'
import './config'
import Header from './components/Headers/Header'
import Output from './components/Output/Output'
import Map from './components/Map/Map'

function App() {
  const { isLoaded} = useLoadScript({ googleMapsApiKey: "AIzaSyByucCkPMord9BNSKKANxm2UmZrI0Lb8H0"})
  const [ip, setIp] = useState('185.169.0.44')

  // ip,type,status,location,area,city,asn,postcode,time
  const [ipInfo, setIpInfo] = useState({})

  let url = `https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json&filter=ip,area,asn,city,location,postcode,time`

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "ca7ad9d72amsh0beacafc91a8fb6p1c4e25jsnf35a8d376821",
		'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
	}
};

  const fetchInfo = async () => {
    const res = await fetch(url, options)
    const data = await res.json()
    setIpInfo(data)
  }
  
  useEffect(() => {
    fetchInfo().catch('somthing wrong with fetch');
  }, [ip])

  
  return (
    <div className="container ">
      <Header setIp={ setIp}/>
      <Output ipInfo={ipInfo}/>
      {!isLoaded ? ('Loading...') : (<Map coordinates={[ipInfo.location?.latitude,ipInfo.location?.longitude]}/>)}
    </div>
  )
}

export default App