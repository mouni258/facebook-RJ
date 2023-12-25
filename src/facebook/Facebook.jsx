import React from 'react'
import './Facebook.css'

const Facebook = () => {
  return (
    <div className='box'>
        <div className='tittle-box'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxyaUGIqsWet2DBlKxu5xwOlGaKkGh3seKA&usqp=CAU' alt='facebook'></img>
            <p>Facbook helps you connect and share with the people in your life.</p>
        </div>

        <div className='form-box'>
          <form action='#'>
            <input type='text' placeholder='User name'></input>
            <input type='text' placeholder='Email Address'></input>
            <input type='password' placeholder='Password'></input>

            <button type="submit">Login</button>

            <a href="#">forgot password</a>

          </form>
          <hr></hr>
          <div className='create-btn'>
            <a href="#">Create New Account</a>
          </div>
        </div>
        
        
      
    </div>
  )
}

export default Facebook;
