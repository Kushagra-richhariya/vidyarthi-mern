const { contactFormResponse } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log("Contact form data received:", req.body)
  
  try {
    // Validate required fields
    if (!email || !firstname || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide email, firstname, and message",
      })
    }

    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactFormResponse(firstname, email, message)
    )
    console.log("Email sent successfully:", emailRes.messageId)
    
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    console.error("Error message:", error.message)
    
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending email. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}