import React, { useState } from 'react';
import './UI.css';
import barbershop2 from './barber4.jpg';
import barber3 from './barber3.jpg';
import calendar3 from './calendar3.png';
import Typed from 'react-typed';
import revenue from './revenue.jpg';
import marketing from './marketing10.png';
import analyzing2 from './analyzing2.jpg';
import customercare from './customercare.jpg';
import barber from './barber7.jpg';
import calendar from './calendar5.webp'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiTwotoneLike } from 'react-icons/ai';
import links from './links-s.webp';



function UI() {
  const [like, setLike] = useState(<AiTwotoneLike className='like-icon' />);
  return (
    <div className='UI'>
        <div id='home'>
        <div className='container'>
      <div className='title'>
        <h1><span>Sa</span>tise<span>rv</span></h1>
      </div>
      <div className='nav'>
        <ul>
          <li><a href='#home' className='home'>Home</a></li>
          <li><a href='#contact' className='contact'>Contact us</a></li>
          <li><a href='#suppliers' className='suppliers'>Suppliers</a></li>
        </ul>
      </div>
      </div>
      <div className='home2'>
        <div className='home-description'>
          <h1>Book your Service</h1>
          <div>
            <p>Why You are still waiting you turn to shave , Book and shave now</p>
          </div>
          <div className='whats'>
          <Typed
            strings={['Looks good , feel good , Play good']}
            typeSpeed={120}
            backSpeed={140}
            loop 
            />
          </div>  
        </div>
        <div className='home-img'>
          <img src={barbershop2} />
        </div>
      </div>
      <div className='hello'>
      <div className='cutting-hair'>
        <img src={barber3} />
        <p>A barber transforms you into a gentleman</p>
      </div>
      <div className='calendar'>
        <img src={calendar3} />
        <p>Book your appointment and save your time</p>
      </div>
      </div>
        </div>
      <div id='contact'>
      <div className='years'>
      <h6>Get in touch</h6>
      <form className='short'>
        <input type='text' name="name" placeholder="Name"/><br />
        <input type='email' name="email" placeholder="email"/><br />
        <input type='tel' name="telephone" placeholder="phone"/><br />
        <textarea name="message" placeholder="Message"></textarea><br />
        <button type='submit'>Contact Us</button><br />
      </form>
      </div>
      </div>
      <div id='suppliers'>
      <div className='imgs'>
     <div className='revenue'>
        <img src={revenue} />
        <p>Increase your orders</p>
      </div>
      <div className='marketing'>
        <img src={marketing} /> 
        <p>Marketing Tools</p>
      </div>
      <div className='analyzing'>
        <img src={analyzing2} />
        <p>Satiserv for analytics</p>
      </div>
      <div className='customercare'>
        <img src={customercare} />
        <p>Satiserv customer care</p>
      </div>
      <div className='barber-ing'>
        <img src={barber} />
        <p>Add your new services</p>
      </div>
      <div className='calendar-ing'>
        <img src={calendar} />
        <p>Arrange your appointments</p>
      </div>
     </div>
      <h3 className='ksa'>Register Now and get your 2 month for free
      <br />
Increase your orders now for free</h3>
      <form className='kaso'>
        <input type='text' name="name" placeholder="Business Name" /><br />
        <input type='text' name="name" placeholder="Name"/><br />
        <input type='email' name="email" placeholder="email"/><br />
        <input type='tel' name="telephone" placeholder="phone"/><br />
        <button type='submit'>register now</button><br />
      </form>
      </div>
      <div className='jojo'>
      <img src={links} />
      </div>
      <div className='go'>
        <h3><strong>download the app now</strong></h3>
      </div>
      <div className='socal-media'>
        <div className='twitter'>
          <a href='' target='_blank' rel="noreferrer"><AiFillTwitterCircle className='twitter-icon' /></a>
        </div>
        <div className='facebook'>
          <a href='' target='_blank' rel="noreferrer"><FaFacebook className='facebook-icon' /></a>
        </div>
        <div className='whats-up'>
          <a href='' target='_blank' rel="noreferrer"><IoLogoWhatsapp className='whats-up-icon' /></a>
        </div>
        <div className='like' onClick={() => setLike(<AiTwotoneLike className='like-icons' />)}>
            {like}
      </div>
      </div>
      <div className="dior">
            <p>© 2022 | Developed and designed by ibrahim seraj & khalid mohd</p>
        </div>
    </div>
  )
}

export default UI;