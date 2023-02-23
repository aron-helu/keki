import argo from '../Image/cake-about.jpg';
import testimonial1 from '../Image/testimonial1.jpg';
import testimonial2 from '../Image/testimonial2.jpg';
import './About.css';

const About = () => (
  <>
    <div className="container-fluid bg-dark bg-img p-5 mb-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 text-uppercase text-white">About Us</h1>
          <i className="far fa-square text-primary px-2" />
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-2 pb-3">
          <h2 className="text-primary font-secondary">About Us</h2>
          <h1 className="display-4 text-uppercase">Welcome To Keki</h1>
        </div>
        <div className="row gx-5">
          <div className="imgCon col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative h-100">
              <img className="img-fluid position-absolute w-100 h-100" src={argo} alt="about-us" />
            </div>
          </div>
          <div className="col-lg-6 pb-5">
            <h4 className="mb-4">Delicious Cakes, Expertly Crafted</h4>
            <p className="mb-5">
              Satisfy your sweet tooth with Keki&apos;s online cake shop.
              Freshly made cakes delivered straight to your door.
              Wide variety of flavors and designs.
              Order now and make your occasion special!
            </p>
            <div className="row g-5">
              <div className="col-sm-6">
                <div className="fa-heartbeat-container argo-ab d-flex align-items-center justify-content-center bg-primary border-inner mb-4">
                  <i className="fa fa-heartbeat fa-2x text-white" />
                </div>
                <h4 className="text-uppercase">100% Healthy</h4>
                <p className="mb-0">Indulge in 100% healthy cakes from Keki, made with natural and organic ingredients. Try our gluten-free and vegan options today and taste the difference. </p>
              </div>
              <div className="col-sm-6">
                <div className="fa-heartbeat-container d-flex align-items-center justify-content-center bg-primary border-inner mb-4 argo-ab ">
                  <i className="fa fa-award fa-2x text-white" />
                </div>
                <h4 className="text-uppercase">Award Winning</h4>
                <p className="mb-0">Keki, an award-winning cake shop in Kenya, offers delicious and creative cakes. Order and taste the best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-img py-5 mb-5">
      <div className="container py-5">
        <div className="row gx-5 gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div className="fa-heartbeat-container bg-primary border-inner d-flex align-items-center justify-content-center mb-3">
                <i className="fa fa-star text-white" />
              </div>
              <div className="ps-5">
                <h6 className="text-primary text-uppercase">Our Experience</h6>
                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div className="fa-heartbeat-container bg-primary border-inner d-flex align-items-center justify-content-center mb-3">
                <i className="fa fa-users text-white" />
              </div>
              <div className="ps-4">
                <h6 className="text-primary text-uppercase">Cake Specialist</h6>
                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div className="fa-heartbeat-container bg-primary border-inner d-flex align-items-center justify-content-center mb-3">
                <i className="fa fa-check text-white" />
              </div>
              <div className="ps-4">
                <h6 className="text-primary text-uppercase">Complete Project</h6>
                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex">
              <div className="fa-heartbeat-container bg-primary border-inner d-flex align-items-center justify-content-center mb-3">
                <i className="fa fa-mug-hot text-white" />
              </div>
              <div className="ps-4">
                <h6 className="text-primary text-uppercase">Happy Clients</h6>
                <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3">
          <h2 className="text-primary font-secondary">Testimonial</h2>
          <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item bg-dark text-white border-inner p-4">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid flex-shrink-0" src={testimonial1} alt="testimonial" />
              <div className="ps-3">
                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p className="mb-0">
              Dolor et eos labore, stet justo sed est sed.
              Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
          </div>
          <div className="testimonial-item bg-dark text-white border-inner p-4">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid flex-shrink-0" src={testimonial2} alt="testimonial" />
              <div className="ps-3">
                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p className="mb-0">
              Dolor et eos labore, stet justo sed est sed.
              Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
          </div>
          <div className="testimonial-item bg-dark text-white border-inner p-4">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" alt="testimonial" />
              <div className="ps-3">
                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p className="mb-0">
              Dolor et eos labore, stet justo sed est sed.
              Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
          </div>
          <div className="testimonial-item bg-dark text-white border-inner p-4">
            <div className="d-flex align-items-center mb-3">
              <img className="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" alt="testimonial" />
              <div className="ps-3">
                <h4 className="text-primary text-uppercase mb-1">Client Name</h4>
                <span>Profession</span>
              </div>
            </div>
            <p className="mb-0">
              Dolor et eos labore, stet justo sed est sed.
              Diam sed sed dolor stet amet eirmod eos labore diam
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
