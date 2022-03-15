import React from 'react'
import './authpage.css'
import Logo from '../../images/logo.png'
export default function AuthPage({children, text1, text2}) {
  return (
    <div className='authContainer'>
      <div className='auth__left'>
        <img src={Logo} alt="" />
        <div className='text'>
          <h1>{text1},</h1>
          <p>{text2}</p>
        </div>
      </div>
      <div className='auth__right'>
        {children}
      </div>
    </div>
  )
}
