const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div>
            <img src="img/logo-white.svg" className="h-8 mb-3" alt="" />
          </div>
          {/* Social links  */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src="img/icon-facebook.svg" alt="" className="h-6" />
            </a>
            <a href="#">
              <img src="img/icon-instagram.svg" alt="" className="h-6" />
            </a>
            <a href="#">
              <img src="img/icon-pinterest.svg" alt="" className="h-6" />
            </a>
            <a href="#">
              <img src="img/icon-twitter.svg" alt="" className="h-6" />
            </a>
            <a href="#">
              <img src="img/icon-youtube.svg" alt="" className="h-6" />
            </a>
          </div>
          {/* List Container  */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
