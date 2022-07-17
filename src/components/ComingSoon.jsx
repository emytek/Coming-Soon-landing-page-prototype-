import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const ComingSoon = () => {
  return (
    <div >
        <nav>
            <input type="checkbox" id="check" />
                <label for='check' className='checkbtn'>
                    <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
                </label>
            <label className="logo">Design</label>
            <ul>
                <Link to='/about'>
                    <li><a  href="#">About us</a></li>
                </Link>
                <Link to='/blog'>
                    <li><a href="#">Blog</a></li>
                </Link>
                <Link to='/contact-us'>
                    <li><a className='active' href="#">Contact us</a></li>
                </Link>
            </ul>
        </nav>
        <header className='title'>
            <h1>SOMETHING AWESOME IS <br/>
                <span className='break-text'>COMING SOON</span></h1>
            <p>Your all in one affiliate marketing tracking software
                <span> track,automate and <br/>
                optimize your campaigns</span>
            </p>
        </header>

        <main>
            <div className="countdown">
                <div id="day">7</div>
                <div id="hour">24</div>
                <div id="minute">54</div>
                <div id="second">11</div>
            </div>
            
            <div>
                <form >
                    <div className='input-name'>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder="Last Name" />
                    </div>
                </form>
                <form className='form-center'>
                    <input
                    className="input-email"
                    type="text"
                    placeholder="Enter your email address..."
                    />
                    <input className="main-btn" type="submit" value="JOIN OUR WAITING LIST" />
                </form>
            </div>
 
        </main>

        <footer>
            <ul className="footer-nav">
                <li><img src="/images/logo-youtube.svg" alt="" /></li>
                <li><img src="/images/logo-facebook.svg" alt="" /></li>
                <li><img src="/images/logo-linkedin.svg" alt="" /></li>
                <li><img src="/images/logo-instagram.svg" alt="" /></li>
                <li><img src="/images/logo-twitter.svg" alt="" /></li>
            </ul>

            <p>Terms of services      Privacy policy</p>
            <p className="copyright">&copy; Copyright 2021@Peddle. All rights reserved.</p>
        </footer>
   
    </div>
  )
}
