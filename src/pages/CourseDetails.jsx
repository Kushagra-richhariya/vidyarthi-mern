import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmationModal from "../components/common/ConfirmationModal"
import Footer from "../components/common/Footer"
import RatingStars from "../components/common/RatingStars"
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
import { formatDate } from "../services/formatDate"
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
import { buyCourse } from "../services/operations/studentFeaturesAPI"
import GetAvgRating from "../utils/avgRating"
import Error from "./Error"

function CourseDetails() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.profile)
  const { paymentLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Getting courseId from url parameter
  const { courseId } = useParams()
  // console.log(`course id: ${courseId}`)

  // Declear a state to save the course details
  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ;(async () => {
      try {
        const res = await fetchCourseDetails(courseId)
        // console.log("course details res: ", res)
        setResponse(res)
      } catch (error) {
        console.log("Could not fetch Course Details")
      }
    })()
  }, [courseId])

  // console.log("response: ", response)

  // Calculating Avg Review count
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
    setAvgReviewCount(count)
  }, [response])
  // console.log("avgReviewCount: ", avgReviewCount)

  // // Collapse all
  // const [collapse, setCollapse] = useState("")
  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    )
  }

  // Total number of lectures
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)
  useEffect(() => {
    let lectures = 0
    response?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0
    })
    setTotalNoOfLectures(lectures)
  }, [response])

  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (!response.success) {
    return <Error />
  }

  const {
    // _id: course_id,
    courseName,
    courseDescription,
    
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
  } = response.data?.courseDetails

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch)
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  if (paymentLoading) {
    // console.log("payment loading")
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <div className={`relative w-full bg-richblack-800`}>
        {/* Hero Section */}
        <div className="mx-auto box-content px-2 sm:px-4 lg:w-[1260px] 2xl:relative ">
          <div className="mx-auto grid min-h-[350px] sm:min-h-[450px] max-w-full sm:max-w-maxContentTab justify-items-center py-6 sm:py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            {/* Responsive Thumbnail */}
            <div className="relative block w-full max-h-60 sm:max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Course Info */}
            <div
              className="flex z-30 flex-col gap-2 sm:gap-4 justify-center py-3 sm:py-5 my-3 sm:my-5 text-base sm:text-lg text-richblack-5 w-full"
            >
              <div>
                <p className="text-2xl sm:text-4xl font-bold text-richblack-5">
                  {courseName}
                </p>
              </div>
              <p className="text-richblack-200 text-sm sm:text-base">{courseDescription}</p>
              <div className="flex flex-wrap gap-2 items-center text-sm sm:text-md">
                <span className="text-yellow-25">{avgReviewCount !== undefined && !isNaN(Number(avgReviewCount)) ? avgReviewCount : "N/A"}</span>
                <RatingStars Review_Count={avgReviewCount !== undefined && !isNaN(Number(avgReviewCount)) ? avgReviewCount : 0} Star_Size={20} />
                <span>{`(${ratingAndReviews && Array.isArray(ratingAndReviews) ? ratingAndReviews.length : 0} reviews)`}</span>
                <span>{`${studentsEnrolled && Array.isArray(studentsEnrolled) ? studentsEnrolled.length : 0} students enrolled`}</span>
              </div>
              <div>
                <p className="text-xs sm:text-base">
                  Created By {`${instructor.firstName} ${instructor.lastName}`}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-5 text-xs sm:text-lg">
                <p className="flex gap-2 items-center">
                  <BiInfoCircle /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex gap-2 items-center">
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>
            {/* Price & Actions for Mobile */}
            <div className="flex flex-col gap-3 sm:gap-4 py-3 sm:py-4 w-full border-y border-y-richblack-500 lg:hidden">
              <p className="pb-2 sm:pb-4 space-x-3 text-2xl sm:text-3xl font-semibold text-richblack-5">
                Rs. {price !== undefined && !isNaN(Number(price)) ? price : "N/A"}
              </p>
              <button className="yellowButton w-full" onClick={handleBuyCourse}>
                Buy Now
              </button>
              <button className="blackButton w-full">Add to Cart</button>
            </div>
          </div>
          {/* Courses Card for Desktop */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-full sm:w-1/2 md:w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute lg:block">
            <CourseDetailsCard
              course={response?.data?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
      </div>
      {/* Main Content Section */}
      <div className="mx-auto box-content px-2 sm:px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-full sm:max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
          <div className="p-4 sm:p-8 my-6 sm:my-8 border border-richblack-600 rounded-md">
            <p className="text-xl sm:text-3xl font-semibold">What you'll learn</p>
            <div className="mt-3 sm:mt-5 text-sm sm:text-base">
              <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="max-w-full sm:max-w-[830px] ">
            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-lg sm:text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-between">
                <div className="flex gap-2 text-xs sm:text-base">
                  <span>
                    {courseContent && Array.isArray(courseContent) ? courseContent.length : 0} {`section(s)`}
                  </span>
                  <span>
                    {totalNoOfLectures !== undefined && !isNaN(Number(totalNoOfLectures)) ? totalNoOfLectures : 0} {`lecture(s)`}
                  </span>
                  <span>{response.data?.totalDuration !== undefined && !isNaN(Number(response.data?.totalDuration)) ? response.data?.totalDuration : "N/A"} total length</span>
                </div>
                <div>
                  <button
                    className="text-yellow-25 text-xs sm:text-base"
                    onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>
            </div>

            {/* Course Details Accordion */}
            <div className="py-2 sm:py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="py-4 mb-8 sm:mb-12">
              <p className="text-lg sm:text-[28px] font-semibold">Author</p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center py-2 sm:py-4">
                <img
                  src={
                    instructor.image
                      ? instructor.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                  }
                  alt="Author"
                  className="object-cover w-12 h-12 sm:w-14 sm:h-14 rounded-full"
                />
                <p className="text-base sm:text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
              </div>
              <p className="text-richblack-50 text-sm sm:text-base">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default CourseDetails