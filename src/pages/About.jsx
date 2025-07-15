import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
// import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="flex relative flex-col gap-10 justify-between mx-auto w-11/12 text-center text-white max-w-maxContent">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Vidyarthi is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="flex flex-col gap-10 justify-between mx-auto w-11/12 max-w-maxContent text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-10 justify-between mx-auto w-11/12 max-w-maxContent text-richblack-500">
          <div className="flex flex-col gap-10 justify-between items-center lg:flex-row">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              This e-learning platform was born out of my passion for transforming education. As a student and self-driven learner, I recognized the growing need for accessible, flexible, and high-quality learning opportunities in todays rapidly evolving digital world. What began as a personal vision has grown into a platform dedicated to empowering others through technology and innovation.


              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              As a student, I experienced firsthand the limitations and challenges of traditional education systems. I believed that learning should not be confined to classroom walls or limited by geographical boundaries. This realization inspired me to envision a platform that bridges these gaps and empowers individuals from all walks of life to unlock their full potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between items-center lg:gap-10 lg:flex-row">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              With this vision in mind, I set out on a journey to create an e-learning platform that would revolutionize the way people learn. As the sole creator of this website, I worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              My mission goes beyond simply delivering online courses. I set out to create a vibrant learning community where individuals can connect, collaborate, and grow together. I believe that knowledge flourishes in an environment of sharing and open dialogue. This spirit of collaboration is brought to life through interactive forums, live sessions, and meaningful networking opportunities.


              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="flex flex-col gap-10 justify-between mx-auto mt-20 w-11/12 text-white max-w-maxContent">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="flex relative flex-col gap-8 justify-between items-center mx-auto my-20 w-11/12 text-white max-w-maxContent bg-richblack-900">
        {/* Reviws from Other Learner */}
        <h1 className="mt-8 text-4xl font-semibold text-center">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider />
      </div>
      {/* <Footer /> */}
      <Footer />
    </div>
  )
}

export default About