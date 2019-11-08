import React from 'react';
import { Container, Row, Col } from 'reactstrap';
class Resume extends React.Component {
    render() {
        return (

            <div className="resume">
                <div className="box-resume">
                    <div id="skils">
                        <Container>
                            <h3>MySkills</h3>
                            <div className="bar back expert" data-skill="HTML5" />
                            <div className="bar back advanced" data-skill="CSS3" />
                            <div className="bar back advanced" data-skill="PHP" />
                            <div className="bar back advanced" data-skill="JavaScript" />

                            <div className="bar back advanced" data-skill="Bootstrap" />
                            <div className="bar back basic" data-skill="React.Js" />
                            <div className="bar back expert" data-skill="Corel Draw" />
                            <div className="bar back advanced" data-skill="Wordpress" />
                            <h3>My Service</h3>
                            <div className="service">
                                <div className="service"></div>
                            </div>
                            <Row>
                                <Col md="6" className="text-center">
                                    <div className="service">
                                        <i className="fa  fa-lightbulb-o"></i>
                                        <h4>Inovative Idea</h4>
                                        <hr />
                                        <p>I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications.</p>
                                    </div>
                                </Col>
                                <Col md="6" className="text-center">
                                    <div className="service">
                                        <i className="fa  fa-code"></i>
                                        <h4>Clean Code</h4>
                                        <hr />
                                        <p>I always give a clean code to the consumer so the application is easy to understand and easy to develop.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6" className="text-center">
                                    <div className="service">
                                        <i className="fa  fa-money"></i>
                                        <h4>Low Price</h4>
                                        <hr />
                                        <p className="text-center">Tell your great app to me. Adjust your budget. And "BOOM", your app ready to published.</p>
                                    </div>
                                </Col>
                                <Col md="6" className="text-center">
                                    <div className="service">
                                        <i className="fa  fa-diamond"></i>
                                        <h4>Best Result</h4>
                                        <hr />
                                        <p className="text-center">I will give you the best applications for your best ideas.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>


        )
    }
}


export default Resume;