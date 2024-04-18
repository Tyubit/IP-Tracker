import { GoogleMap, MarkerF} from '@react-google-maps/api'
import { useState,useMemo } from 'react'
import marker from '../../assets/icon-location.svg'
import './map.scss'



const Map = ({coordinates}) => {
    //33.23107702737697, -117.25595722335544
    console.log(typeof(coordinates[1]))
    console.log(coordinates[0])
    const center = useMemo(() => ({ lat: coordinates[0], lng: coordinates[1]}),[coordinates])
    
    const defMapOptions = {
        disableDefaultUI: true,
        scrollwheel: false,
        isMarkerShown: true,
    }
  return (
      <div className='map'>

        <GoogleMap
            mapContainerClassName='map-container'
            center={{lat: coordinates[0], lng: coordinates[1]}}
            zoom={16}
            options={defMapOptions}
        >
            
            <gmp-advanced-marker position={`${ coordinates[0]},${coordinates[0] }`}
            options={{icon: marker}}></gmp-advanced-marker>
        </GoogleMap>
    </div>
  )
}

export default Map