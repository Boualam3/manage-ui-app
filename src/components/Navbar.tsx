import GetStartedBtn from './GetStartedBtn'

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6 md:px-2">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="img/logo.svg" alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayisBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayisBlue">
            Products
          </a>
          <a href="#" className="hover:text-darkGrayisBlue">
            About US
          </a>
          <a href="#" className="hover:text-darkGrayisBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayisBlue">
            Community
          </a>
        </div>
        <GetStartedBtn className="hidden md:block " />
      </div>
    </nav>
  )
}

export default Navbar
