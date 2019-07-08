import React from 'react';
import AppWrapper from '../AppWrapper';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {URL_COURSE_CART_VIEW} from '../../consts';
import './Home.css';
import MY_PIC from '../../assets/my_pic.jpg';
import {MOBILE, DESKTOP} from '../../consts';
import NavBar from './NavBar';


const HomeView = props => {
    return (
        <AppWrapper>
            <Container>
                <Row>
                    {props.appView === DESKTOP ?
                        <Col xs={2}>
                            <NavBar/>
                        </Col>
                    : null}
                    <Col>
                        <Container id='HomeView'>
                            <Row>
                                <Col xs={4} className='d-flex justify-content-center'>
                                    <div className='img-cropper'>
                                        <img
                                            id='profile-img'
                                            alt='pic'
                                            src={MY_PIC}
                                        />
                                    </div>
                                </Col>
                                <Col xs={8} id='about-me'>
                                    <div>About Me</div>
                                    <p>
                                        Enthusiastic about technologies in general and user inerfaces in particular, huge basketball fan, I love dogs, and I teach English in my spare time    
                                    </p>
                                    <div id='contact'>
                                        <div>Contact</div>
                                        <div>
                                            <b>
                                                050-898-0708 || lioryarkon9@gmail.com
                                            </b>
                                        </div> 
                                    </div>
                                </Col>
                            </Row>
                            {props.appView === MOBILE ? 
                                <Row className='margin-top-3'>
                                    <Col className='text-center'>
                                        <Link to={URL_COURSE_CART_VIEW}>
                                            Explore Projects
                                        </Link>
                                    </Col>
                                </Row>
                            : null}
                            <Row className='margin-top-3'>
                                <Col className='cv-section'>
                                    <div className='title'>Skills</div>
                                    <div>
                                        Javascrript, HTML, CSS, Bootstrap.css, React (+ Redux & Router), MySQL, Python, Node.JS, UX/UI
                                    </div>
                                </Col>
                            </Row>
                            <Row className='margin-top-3'>
                                <Col id='experience-div' className='cv-section'>
                                    <div className='title'>Experience</div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <span>Warriors Solutions,</span> <span>Nes Ziona</span> <span>— Web Developer</span>
                                            </div>
                                            <div>
                                                Jan. 2019 - present
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>Providing digital solutions for individual customers</li>
                                                    <li>Plan, design and maintain various web pages using cloud platforms</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='item margin-top-3'>
                                            <div className='title'>
                                                <span>EasySend,</span> <span>Tel Aviv</span> <span>— Front End Developer</span>
                                            </div>
                                            <div>
                                                Aug. 2016 - Jan. 2019
                                            </div>
                                            <div>
                                                <p>
                                                    EasySend is a DTM (Data Transaction Management) platform for turning manual processes into digital ones. Its clients are enterprise companies in the financial and insurance sectors. I was an important part of the company’s professional services team. Some of my responsibilities were:
                                                </p>
                                                <ul>
                                                    <li>
                                                        Plan, design and execute high-quality digital processes using modern Javascript, CSS & HTML through EmberJS platform
                                                    </li>
                                                    <li>
                                                        Construct high level integrations using API implementation mostly using JSON data structure
                                                    </li>
                                                    <li>
                                                        tutorial kits for new employees providing useful information regarding the company’s technology
                                                    </li>
                                                    <li>
                                                        Advise customers regarding the best solutions for their needs
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='margin-top-3'>
                                <Col id='education-div' className='cv-section'>
                                    <div className='title'>Education</div>
                                    <div className='content'>
                                        <div className='item'>
                                            <div className='title'>
                                                <span>College of Management,</span> <span>Rishon Le Zion</span> <span>— B.A.</span>
                                            </div>
                                            <div>
                                                Sep. 2008 - Jun. 2011
                                            </div>
                                            <div>
                                                <p>
                                                    B.A. in Business Management specializing in Information Technologies. This learning period has given me a wide range of useful fundamentals to open my “appetite” for my passion towards technology.
                                                    My practical knowledge has been acquired through self-motivated learning.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </AppWrapper>
    );
}

const MapStateToProps = state => {
    return {
        appView: state.appView
    }
}

export default connect(MapStateToProps)(HomeView);