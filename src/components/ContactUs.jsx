import React from 'react'
import './contact-us.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


export default function ContactUs() {
  

  return (

    <div className='wrapper'>
     <main>
      <Link to='/'>
        <img src="/images/right-arrow.svg " className="arrow" alt="" />
      </Link>
       <h1>Hey, we are still in the works, <br/>but you can send us a message</h1>
    

          <section className='form wrapper'>
            <div className='form-group'>
              <label htmlFor='name' >First name</label><br />
              <input type='text' className='form-control' placeholder='Enter your first name'/>
            </div>
            <div className='form-group'>
              <label htmlFor='email' >Last name</label><br />
              <input type='text' className='form-control' placeholder='Enter your last name'/>
            </div>
            <form >
              <div className='form-group'>
                <label htmlFor='product' >Email address</label><br />
                <input type='text' className='form-control' placeholder='Enter your Email Address'/>
              </div>
              <div className='form-group'>
                <label htmlFor='channel'>Tell Us What You Need Help With:</label><br />
                <textarea
                  name='channel'
                  id='channel'
                  className='form-control'
                  placeholder='Enter A Topic Like "Channel Problem..."'
                ></textarea>
              </div>
              <div className='form-group'>
                <a href="" className='button primary btn-xl'>SEND NOW</a>
              </div>
            </form>
          </section>
        </main>
    </div> 
  )
}
