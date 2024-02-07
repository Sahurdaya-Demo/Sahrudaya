import React,{useEffect} from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import {Player} from '@lottiefiles/react-lottie-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../Home/assets/css/style.css'

import '../Home/assets/bootstrap-icons/bootstrap-icons.css';

import LoadExternalScript from "../../LoadExternalScript";
function Home(){
     useEffect(() => {
    LoadExternalScript(['js/main.js']);
    AOS.init();
    AOS.refresh();
    new PureCounter();
    
  }, []);
return(
    <>
      <header id="header" className="header fixed-top">
 <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <div  className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" style={{width:"70px"}} alt=""/>
        <span>Sahrudaya Rajagiri</span>
      </div>

      <nav id="navbar" className="navba">
        <ul>
          <li><a className="nav-link scrollto" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#">Login</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    <section id="hero" className="hero d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-lg-4">
          <h1 data-aos="fade-up">UNITING HEARTS FOR EMPOWERMENT AND DEVELOPMENT</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented counsellors making lifes of people easier</h2>
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="text-center text-lg-center">
              <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>Get Started</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-img mb-lg-5 pb-lg-5 ps-lg-5 pe-0" data-aos="zoom-out" data-aos-delay="200">   
          <Player 
          src='https://lottie.host/7ad77614-47f2-4d16-bc98-1e43dad79c14/Mr1blwHvwo.json'
          className="player ms-5"  

          autoplay
          loop
          />
        </div>
      </div>
    </div>

  </section>

  <main id="main">
    <section id="about" className="about">

      <div className="container" data-aos="fade-up">
        <div className="row gx-0">

          {/* <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
              </p>
              <div className="text-center text-lg-start">
                <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div> */}

        </div>
      </div>
    </section>


    <section id="services" className="services">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Services</h2>
          <p>"Life is for service"</p>
        </header>

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-box blue">
              <i className="bi bi-activity icon"></i>
              <h3>COMMUNITY MENTAL HEALTH CENTER</h3>
              <p>Sahrudaya provides educational services to the poor children.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-box orange">
              <i className="bi bi-person-arms-up icon"></i>
              <h3>SENIOR CITIZENS’ GROUP</h3>
              <p>Self Help Groups Formation and animation of Self Help Groups.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-box green">
              <i className="bi bi-hearts icon"></i>
              <h3>HEAL-A-FAMILY</h3>
              <p>Sahrudaya commits to build ten houses a year for providing shelter.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-box red">
              <i className="bi bi-balloon-heart icon"></i>
              <h3>CHILD SPONSERSHIP</h3>
              <p>Sahrudaya provides educational services to the poor children.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-box purple">
              <i className="bi bi-gender-female icon"></i>
              <h3>SELF HELP GROUPS (Women)</h3>
              <p>Self Help Groups Formation and animation of Self Help Groups.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
            <div className="service-box pink">
              <i className="bi-house-heart icon"></i>
              <h3>HOUSING PROJECT</h3>
              <p>Sahrudaya commits to build ten houses a year for providing shelter.</p>
              <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section id="team" className="team">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Administrators</h2>
          <p>Our helping Administrators</p>
        </header>

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>FR. BENNY NALKARA CMI</h4>
                <span>PATRON</span>
                <p>Fr Benny Nalkara, CMI Provincial of the CMI Sacred Heart Province and Manager Fr Benny Nalkara, CMI has been serving as a faculty for New Testament and Biblical Greek in the Faculty of Theology at Dharmaram Vidya Kshetram, Bangalore, Pontifical Athenaeum of Philosophy, Theology and Canon Law since 2008.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>FR. DR. SHINTO THALIYAN</h4>
                <span>CMI CHAIRMAN</span>
                <p>Fr. Shinto completed his post-graduation in social work with a specialization in medical and psychiatric social work from Loyola College (Autonomous) Chennai. He holds an MPhil in Social Work from Rajagiri College of Social Sciences, Kalamassery and secured PhD on the topic “Psycho-social well-being of adolescents.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>REV. FR. DIBIN MANGALATH</h4>
                <span>CMI SECRETARY</span>
                <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="member">
              <div className="member-img">
                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>FR. PAUL NEDUMCHALIL CMI</h4>
                <span>TREASURER</span>
                <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    <section id="clients" className="clients">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Sahrudaya</h2>
          <p>In collaboration with</p>
        </header>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/></SwiperSlide>
        <SwiperSlide><img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/></SwiperSlide>
        <SwiperSlide><img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/></SwiperSlide>
        <SwiperSlide><img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/></SwiperSlide>
      </Swiper>
      </div>

    </section>

  <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <div>
                <div className=" d-flex">
                <span data-pure-start="0" data-purecounter-end="337" data-pure-duration="1" className="purecounter"></span>              
                </div>
                <p>Team Members</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-journal-richtext" style={{color: "ee6c20"}}></i>
              <div>    
              <div className="d-flex">
                <span data-pure-start="0" data-purecounter-end="30" data-purecounter-duration="1" className="purecounter"></span>              
                <span>+</span>
                </div>
                <p>Experienced</p>             
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-award" style={{color: "#15be56"}}></i>
              <div>
               <div className="d-flex">
                <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                 <span>+</span>
                </div>
                <p>Winning Awards</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-easel" style={{color: "#bb0852"}}></i>
              <div>
              <div className=" d-flex">
                <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" className="purecounter"></span>
                <span>+</span>
                </div>
                <p>Project Done</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        <section id="contact" className="contact">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </header>

        <div className="row gy-4">

          <div className="col-lg-6">

            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street,<br/>New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br/>contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday<br></br>9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </section>

  </main>
  {/* <!-- ======= Footer ======= -->
  <footer id="footer" className="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="">
              <span>FlexStart</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer> */}
</>
)
};
export default Home