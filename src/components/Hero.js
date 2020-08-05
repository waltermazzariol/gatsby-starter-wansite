import React from "react"
import DownArrow from "../assets/images/down-arrow.svg"
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Hero(props) {
  var bg = props.data.image.publicURL

  return (
    <Container as={"header"} fluid={true} className="hero" style={{ background: 'linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' + bg + ') 40% 0', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Row className="hero-wrapper" noGutters>
        <div className="col-12 align-self-end">
          <Fade>
            <h1 className="hero-title">{props.data.title}</h1>
            <div className="hero-subtitle">{props.data.subtitle}</div>
            <button className="btn-basic mt-4"><a href={props.nav.cta_link} target="_blank" rel="noopener noreferrer"><i className={`fab fa-${props.nav.cta_type} mr-2`}></i>{props.nav.cta_button}</a></button>
          </Fade>
        </div>
        <div className="col-12 hero-arrow align-self-end">
          <Bounce down>
            <img src={DownArrow} className="icon" alt="chevron" />
          </Bounce>
        </div>
      </Row>
    </Container>
  )
}

export default Hero