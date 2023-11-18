import GetStartedBtn from './GetStartedBtn'

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* Left items */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="mx-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="mx-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <GetStartedBtn />
          </div>
        </div>
        {/* Images */}
        <div className="md:w-1/2">
          <img src="img/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
