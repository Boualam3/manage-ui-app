import { useState } from 'react'
import { featuresData } from '../data/features'
import FeatureListItem from './FeatureListItem'
import { featuresObj } from '../types/types'

function Features() {
  const [featuresObjs] = useState<featuresObj[]>(featuresData)
  return (
    <section>
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* Whats Different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's Different About Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue">
            Manage provide all the functionality your team needs without the
            complexity . Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* mapping thought list items */}
          {featuresObjs.map((obj, idx: number) => (
            <FeatureListItem item={obj} key={idx} />
          ))}
          {/* =========================== */}
        </div>
      </div>
    </section>
  )
}

export default Features
