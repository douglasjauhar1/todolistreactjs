import React from 'react';
import { Progress, Container, } from 'reactstrap';
import { Grid, Cell } from 'react-mdl';
import { Scrollbar } from 'react-scrollbar';
class About extends React.Component {
    render() {
        return (

            <div style={{ width: '100%', margin: '20px auto' }}>
                <Grid className="Landing-grid">
                    <Container>
                        <div className="skillsbar">
                            <h3>About <bold>Me</bold></h3>
                            <hr />
                            <div className="bio-data">
                                <div className="iconname">
                                    <i className="fa fa-user ::before">  </i>
                                    Name
                        </div>
                                <div className="bio">
                                    M. Douglas Jauhar Nehru
                        </div>
                            </div>
                            <div className="bio-data">
                                <div className="iconname">
                                    <i className="fa fa-calendar ">  </i>Date of Birth
                        </div>
                                <div className="bio">
                                    September, 25th 1998
                        </div>
                            </div>
                            <div className="bio-data">
                                <div className="iconname">
                                    <i className="fa fa-send"></i>
                                    Email
                        </div>
                                <div className="bio">
                                    douglasjauhar@gmail.com
                        </div>
                            </div>
                            <div className="bio-data">
                                <div className="iconname">
                                    <i className="fa fa-phone"></i>
                                    Phone
                        </div>
                                <div className="bio">
                                    +6281259001506
                        </div>
                            </div>
                            <div className="bio-data">
                                <div className="iconname">
                                    <i className="fa fa-globe"></i>
                                    Website
                        </div>
                                <div className="bio">
                                    https://phsycode.id
                        </div>
                            </div>
                            {/*Section Educate*/}
                            <h3>Education</h3>
                            <hr />
                            <div className="timeline">
                                <div className="entry">
                                    <div className="title">
                                        <h3>2017 - Present</h3>

                                    </div>
                                    <div className="body">
                                        <p>Cahaya Surya Institue</p>
                                        <ul>
                                            <li>I majored in informatics engineering, to straighten out my hobby</li>
                                            <li> Started many programming projects at the college. And became a teaching assistant in the second year</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="entry">
                                    <div className="title">
                                        <h3>2014 - 2017</h3>

                                    </div>
                                    <div className="body">
                                        <p>Senior High School | SMA A. WAHID HASYIM TEBUIRENG JOMBANG</p>
                                        <ul>
                                            <li></li>
                                            <li>Start learn a programming language with Pascal. Being a (Java Bali IT Competition) And Become Finalist on Malang University (UM). Starting a computer programming competition on high-school level in universities.</li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="entry">
                                    <div className="title">
                                        <h3>2011 - 2014</h3>

                                    </div>
                                    <div className="body">
                                        <p>Junior High School | SMP A. WAHID HASYIM TEBUIRENG JOMBANG</p>
                                        <ul>
                                            <li></li>
                                            <li>Started liked in computer graphic design. Start a lot of projects in graphic design. </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="entry">
                                    <div className="title">
                                        <h3>2005 - 2011</h3>

                                    </div>
                                    <div className="body">
                                        <p>Elementary School | MI MIFTAHUL HUDA NGRECO KANDAT KEDIRI</p>
                                        <ul>
                                            <li></li>
                                            <li>MI MIFTAHUL HUDA is the first formal school which I attended. Many achievements were obtained and many experience gained.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container >
                </Grid>

            </div>


        )
    }
}


export default About;