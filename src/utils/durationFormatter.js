// Helper function to convert total seconds to the duration format
export const convertSecondsToDuration = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor((totalSeconds % 3600) % 60)

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`
  } else {
    return `${seconds}s`
  }
}

// Function to calculate total duration from course content
export const calculateCourseDuration = (courseContent) => {
  if (!courseContent || !Array.isArray(courseContent)) {
    return "0s"
  }

  let totalDurationInSeconds = 0
  
  courseContent.forEach((content) => {
    if (content.subSection && Array.isArray(content.subSection)) {
      content.subSection.forEach((subSection) => {
        const timeDurationInSeconds = parseInt(subSection.timeDuration) || 0
        totalDurationInSeconds += timeDurationInSeconds
      })
    }
  })

  return convertSecondsToDuration(totalDurationInSeconds)
} 