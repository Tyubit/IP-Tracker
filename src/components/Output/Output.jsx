import { useState } from 'react'
import React from 'react'
import './output.scss'

const Output = ({ ipInfo }) => {
  const stateRegX = /\w+$/
  const timeZoneRegx = /[A-Za-z]{3}-[0-9]{4}/ 
  console.log(Date(ipInfo?.time?.gtm_offset).toString().match(timeZoneRegx)[0])

  console.log()
  return (
    <ul>
      <li>
        <p>ip address</p>
        <h2>{ ipInfo?.ip}</h2>
      </li>
      <li>
        <p>location</p>
        <h2>{ipInfo?.city?.name}, { ipInfo?.area?.code.match(stateRegX)[0]} {ipInfo.postcode}</h2>
      </li>
      <li>
        <p>timezone</p>
        <h2>{Date(ipInfo?.time?.gtm_offset).toString().match(timeZoneRegx)[0]}</h2>
      </li>
      <li>
        <p>isp</p>
        <h2>{ ipInfo?.asn?.organisation}</h2>
      </li>
    </ul>
  )
}

export default Output