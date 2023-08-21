import { useState} from 'react'
import './header.scss'
import arrow from '../../assets/icon-arrow.svg'
const Header = ({ setIp}) => {
  const [tempIp, setTempIp] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const ipRegx = /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!ipRegx.test(tempIp)){
      setErrorMsg('wrong IP pattern')
      return
    }

    setErrorMsg('')
    setIp(tempIp)
    setTempIp('')
  }

  return (
    <header>
      <h1 id='title'>IP Address Tracker</h1>

      <span>{ errorMsg}</span>
      <form action="" id='search' onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Search for any IP address or domain'
          value={tempIp}
          onChange={(e) => setTempIp(e.target.value)} />
        <button type="submit"><img src={arrow} alt=" > " onSubmit={handleSubmit}/></button>
      </form>
    </header>
  )
}

export default Header