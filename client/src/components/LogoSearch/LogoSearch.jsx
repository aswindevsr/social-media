import React from 'react'
import './logosearch.css'
import logo from '../../assets/asw-lo.png'
import SearchIcon from '@mui/icons-material/Search';

const LogoSearch = () => {
  return (
    <div className="logo-search">
        <img src={logo} alt=""  className='logo'/>
        <div className="search">
            <input type="text"  placeholder='#Explore'/>
            <div className="search-icon">
               <SearchIcon/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch