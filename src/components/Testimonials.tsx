import { useState } from 'react'
import { testimonialsData } from '../data/testimonials'
import { testimonialsObj } from '../types/types'
import GetStartedBtn from './GetStartedBtn'
const Testimonials = () => {
  const [testiData] = useState<testimonialsObj[]>(testimonialsData)
  return (
    <section id="testimonials" className="mb-6">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6 ">
          {testiData.map(obj => (
            <div className="flex flex-col items-center p-6 rounded-lg space-y-6 bg-veryLightGray mb-8 border  md:mb-3 md:w-1/3 md:border-0">
              <img src={obj.img_path} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">{obj.full_name}</h5>
              <p className="text-sm text-darkGrayishBlue">{obj.desc}</p>
            </div>
          ))}
        </div>
        <GetStartedBtn />
      </div>
    </section>
  )
}

export default Testimonials
