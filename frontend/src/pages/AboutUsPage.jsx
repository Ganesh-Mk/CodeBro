import React from 'react'
import '../style/AboutUs.scss'
import { images } from '../javascripts/images'
import ContactUs from '../components/ContactUs'
import FooterComp from '../components/FooterComp'
import Navbar from '../components/Navbar'

function AboutUsPage() {
  return (
    <>
      <Navbar />

      <div className="aboutusContainer">
        <div className="AboutUsHeading">
          <h1>About Us</h1>
        </div>
        <div className="creatorsPhoto">
          <div className="photo"></div>
        </div>
        <div className="descriptionSection">
          <div class="card">
            <div className="name">
              <p>Tej MH</p>
            </div>
            <div className="working">Worked on frontend and Authentication</div>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, aliquam quasi odio vitae exercitationem velit! Quos
              omnis ex nemo! Amet quisquam neque magni magnam quod!
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/tej-hagargi">
                <img src={images.linkedin} alt="" />
              </a>
              <a href="https://github.com/tejhagargi9">
                <img src={images.github} alt="" />
              </a>
              <a href="https://www.instagram.com/tejhagargi9/">
                <img src={images.instagram} alt="" />
              </a>
            </div>
          </div>
          <div class="card">
            <div className="name">
              <p>Ganesh MK</p>
            </div>
            <div className="working">
              Worked on Structure of project and Backend
            </div>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, aliquam quasi odio vitae exercitationem velit! Quos
              omnis ex nemo! Amet quisquam neque magni magnam quod!
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/ganesh-koparde/">
                <img src={images.linkedin} alt="" />
              </a>
              <a href="https://github.com/Ganesh-Mk">
                <img src={images.github} alt="" />
              </a>
              <a href="https://www.instagram.com/ganesh_mk_247/">
                <img src={images.instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
        <ContactUs />
        <FooterComp />
      </div>
    </>
  )
}

export default AboutUsPage
