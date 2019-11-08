import React from 'react';
import { Container, Row, Col } from 'reactstrap';
class Contact extends React.Component {
    render() {
        return (

            <div className="contact-body">
                <div className="contact-box">
                    <Container>
                        <h4>Contact Me</h4>
                        <hr />
                        <br/>
                        <Row>
                            <Col md="12">
                                <div className="map">
                                <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.274595839893!2d112.02961731471109!3d-7.866306994332529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7857e4428a95cb%3A0x32d49df71feb9b0d!2sJl.%20Raya%20Jegles%20No.46%2C%20Blabak%2C%20Kec.%20Pesantren%2C%20Kediri%2C%20Jawa%20Timur%2064135!5e0!3m2!1sid!2sid!4v1571059875155!5m2!1sid!2sid" width={800} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                                </div>
                            </Col>
                            
                            <Col md="12">
                            <br/>
                            <br/>
                                <bold>Jl. Raya Jegles No.46 Kediri, Indonesia</bold><br/>
                                <bold>+6281259001506 | douglasjauhar@gmail.com</bold>
                                </Col>
                        </Row>
                    </Container>
                </div>

            </div >

        )
    }
}


export default Contact;