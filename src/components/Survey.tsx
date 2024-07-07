import Image from 'next/image'
import React from 'react'

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[55%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-[90%] lg:h-[80vh] shadow-lg shadow-gray-500/50" /* Added shadow and adjusted height */
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 pt-16">
            A survey for our restaurant is a powerful way to connect with our customers and gather insights to enhance their dining experience.
            By asking targeted questions about various aspects such as food quality.
          </p>
          <p className="text-gray-700 pt-8">
            This feedback is invaluable in helping you make informed decisions, ensuring that you continually meet and exceed customer expectations,
            fostering loyalty, and ultimately driving our restaurant’s success.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Survey;
