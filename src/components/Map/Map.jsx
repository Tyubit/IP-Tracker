import { GoogleMap, MarkerF} from '@react-google-maps/api'
import { useState,useMemo } from 'react'
import marker from '../../assets/icon-location.svg'
import './map.scss'



const Map = ({coordinates}) => {
    //33.23107702737697, -117.25595722335544
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
            center={center}
            zoom={16}
            options={defMapOptions}
        >
            
            <MarkerF position={{ lat: coordinates[0], lng: coordinates[1] }}
            options={{icon: marker}}/>
        </GoogleMap>
    </div>
  )
}

export default Map