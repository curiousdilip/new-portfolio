import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="copy">
            <img src="https://www.dilipmaurya.in/logo-black.svg" alt="" />

            <p>
              Designed by <a href="#">Arnau</a> and Developed by{" "}
              <a href="#">Dilip </a>
            </p>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="#">
                  <img src="/facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/linkedin.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/github.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
