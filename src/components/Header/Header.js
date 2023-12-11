import React from 'react'
import './header.css'
import { Notifications ,AccountCircle }from '@mui/icons-material';

const Header = () => {
  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='logo'>Header</div>
        <div className="iconContainer">
          <div className='notification'>
            <Notifications/>
            </div>
          <div className='avatar'>
            <AccountCircle/>
          </div>
          </div>
      
      </div>
      
      </div>
  )
}

export default Header