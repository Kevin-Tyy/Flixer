import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer= () => {
  return (
    <>
    <footer>
    <div className='footer-flex'>
        <div className='about'>
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora fugiat tenetur architecto officia aliquid iusto ducimus earum facere eius quo quasi quidem deserunt, impedit voluptate unde reprehenderit magni molestias quas assumenda sapiente aut adipisci aliquam. Laudantium exercitationem ut sint ab deserunt consequatur officia ad quisquam. Iure, tempora laboriosam! Facere voluptate culpa excepturi et rerum mollitia? Eos vel aperiam quo!</p>
        </div>
        <div>
            <h2 className='contact'>KEEP IN TOUCH</h2>
            <p><FontAwesomeIcon icon={faMapMarkerAlt}/> &nbsp;&nbsp;<span>Address: </span>city, state, country</p>
            <p><FontAwesomeIcon icon={faPhone}/> &nbsp;&nbsp;<span>Phone: </span> +250 788 000 000</p>
            <p><FontAwesomeIcon icon={faEnvelope}/> &nbsp;&nbsp;<span>Email: </span> info@infomail.com</p>
        </div>
    </div>
    <div className='social-icons'>
        <FontAwesomeIcon icon={faLinkedin} className="icons" title='Follow Us On LinkedIn'/>
        <FontAwesomeIcon icon={faTwitter} className="icons" title='Follow US On Twitter'/>
        <FontAwesomeIcon icon={faDiscord} className="icons" title='Join Our Discord Server'/>
        <FontAwesomeIcon icon={faInstagram} className="icons" title='Follow Us On Instagram'/>
    </div>
    </footer>
    </>
  )
}

export default Footer
