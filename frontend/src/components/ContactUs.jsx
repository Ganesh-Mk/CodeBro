import React from 'react'
import '../style/ContactUs.scss'
import { images } from '../javascripts/images'

const ContactUs = () => {

  return (
    <div className='wholeContactUsContainer'>
        <div className='heading'>
            <h3>Contact us</h3>
        </div>
        <div className='contactUsConatiner'>
        <div className='contactUspart1'>
            <div className='topContainer'>
                <h1>Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum quae culpa enim tempora.</p>
            </div>
            <div className='middleContainer'>
                <div className='middlepart'>
                    <div className='image'>
                        <a href="">
                        <img src={images.location} alt="" />
                        </a>
                    </div>
                    <div className='middlepart2'>
                        <p>Address</p>
                        <p>Gokak, KA</p>
                    </div>
                </div>
                <div className='middlepart'>
                    <div className='image'>
                        <a href=""><img src={images.phone} alt="" /></a>       
                    </div>
                    <div className='middlepart2'>
                        <p>Phone Number</p>
                        <p>+91 9380795986</p>
                    </div>
                </div>
                <div className='middlepart'>
                    <div className='image'>
                        <a href="">
                        <img src={images.mail} alt="" />
                        </a>
                    </div>
                    <div className='middlepart2'>
                        <p>E-Mail</p>
                        <p>xyz@abcde.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='contactuspart2'>
            <div className='topheading'>
                <p>Send a Message</p>
            </div>
            <div className='formPart'>
                <form style={{display:'flex', flexDirection:'column', gap:'1vw'}}>
                    <input type="text" placeholder='Name'style={{width:'22vw', height:'2.5vw', color:'white', padding:'.3vw',fontSize:'1vw'}}/>
                    <input type="Email" placeholder='E-mail address' style={{color:'white', fontSize:'1vw', height:'2.5vw', padding:'.3vw'}}/>
                    <textarea name="" id="" cols="30" placeholder='Feedback' rows="5" style={{color:'white', padding:'.3vw',fontSize:'1vw'}}></textarea>
                    <input type="submit" style={{backgroundColor:'#0077B5', borderRadius: '.3vw', color:'white', padding:'.3vw'}}/>
                </form>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default ContactUs
