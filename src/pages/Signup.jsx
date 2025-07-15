import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
  title="Join millions of learners building their tech skills with Vidyarthi — for free"
  description2="Empower your future with practical, career-ready education."
  image={signupImg}
  formType="signup"
/>

  )
}

export default Signup