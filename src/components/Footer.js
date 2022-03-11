import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className="section bg-footer">
        <div className="footercontainer">
          <div className="footerrow row">
            <div className="f1 col-lg-4">
              <div className="">
                <h6 className="footer-heading">U-APEXION</h6>
                <ul className="list-unstyled footer-link mt-4 d-none d-xl-block">
                  <li>Copyright © 2022</li>
                </ul>
              </div>
            </div>

            <div className="f2 col-lg-3 d-none d-xl-block">
              <div className="">
                <h6 className="footer-heading2">Services</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#/">Email Marketing</a>
                  </li>
                  <li>
                    <a href="#/">Campaigns</a>
                  </li>
                  <li>
                    <a href="#/">Branding</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="f2-p d-block d-xl-none">
              <div className="">
                <h6 className="footer-heading2">Services</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#/">Email Marketing</a>
                  </li>
                  <li>
                    <a href="#/">Campaigns</a>
                  </li>
                  <li>
                    <a href="#/">Branding</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="f3 col-lg-3 d-none d-xl-block">
              <div className="">
                <h6 className="footer-heading2">Furniture</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#/">Beds</a>
                  </li>
                  <li>
                    <a href="#/">Chair</a>
                  </li>
                  <li>
                    <a href="#/">All</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="f3-p d-block d-xl-none">
              <div className="">
                <h6 className="footer-heading2">Furniture</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#/">Beds</a>
                  </li>
                  <li>
                    <a href="#/">Chair</a>
                  </li>
                  <li>
                    <a href="#/">All</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="f4 d-none d-xl-block">
              <div className="">
                <h6 className="footer-heading2">Follow Us</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <i className="fa-brands fa-facebook-f"></i>{' '}
                    <a href="#/">Facebook</a>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>{' '}
                    <a href="#/">Twitter</a>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>{' '}
                    <a href="#/">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="f4-p d-block d-xl-none">
              <div className="">
                <h6 className="footer-heading2">Contract</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#/">Terms&Conditions </a>
                  </li>
                  <li>
                    <a href="#/">PrivacyPolicy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="f5 d-none d-xl-block">
            <p className="footer-alt mb-0 f-14">
              <a href="#/">Terms&Conditions </a>
              <a href="#/">PrivacyPolicy</a>
            </p>
          </div>

          <div className="f5-p d-block d-xl-none">
            <div className="">
              <ul className="list-unstyled footer-link mt-4">
                <a href="#/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#/">
                  <i className="fa-brands fa-instagram"></i>{' '}
                </a>
              </ul>
            </div>
          </div>

          <div className="f6 d-block d-xl-none">
            <ul className="list-unstyled footer-link mt-4">
              <li>Copyright © 2022</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
