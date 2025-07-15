const emailStyles = require('./emailStyles');

exports.courseEnrollmentEmail = (courseName, name) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Enrollment Confirmation - Vidyarthi</title>
      <style>
        ${emailStyles}
      </style>
    </head>
  
    <body>
      <div class="email-container fade-in">
        <div class="email-header">
          <h1 class="header-title">🎉 Enrollment Confirmed!</h1>
          <p class="header-subtitle">Welcome to your premium learning experience</p>
        </div>

        <div class="email-content">
          <div class="greeting">Hi ${name},</div>
          <div class="message-body">
            <p>
              Congratulations! You've successfully enrolled in
              <strong style="color: #e94560;">${courseName}</strong> on <strong style="color: #e94560;">Vidyarthi</strong>. We're thrilled to have
              you on board for this journey.
            </p>

            <div class="highlight-box">
              <h3 style="color: #e94560; margin-bottom: 10px; font-size: 18px;">📘 Course Enrolled</h3>
              <p style="margin: 0; font-weight: 600; color: #1e293b;"><strong>${courseName}</strong></p>
              <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Your course is ready and available on your dashboard.</p>
            </div>

            <div class="success-box">
              <h4 style="color: #059669; margin-bottom: 10px; font-size: 16px;">✅ What's Next?</h4>
              <ul style="margin: 0; padding-left: 20px; color: #065f46;">
                <li>Access course materials anytime, from anywhere</li>
                <li>Track your learning progress</li>
                <li>Engage with instructors and fellow learners</li>
                <li>Earn your certificate upon completion</li>
              </ul>
            </div>

            <p>
              Start learning today and make the most of your premium experience with
              <strong style="color: #e94560;">Vidyarthi</strong>.
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a
              href="https://Vidyarthi-edtech-project.vercel.app/dashboard"
              class="cta-button"
            >
              🚀 Go to Dashboard
            </a>
          </div>

          <div class="premium-box">
            <h4 style="color: #7c3aed; margin-bottom: 10px; font-size: 16px;">💡 Learning Tips</h4>
            <ul style="margin: 0; padding-left: 20px; color: #5b21b6;">
              <li>Set learning goals and maintain consistency</li>
              <li>Take notes and revisit topics regularly</li>
              <li>Participate in discussions to deepen understanding</li>
              <li>Reach out to instructors whenever needed</li>
            </ul>
          </div>
        </div>

        <div class="email-footer">
          <div class="footer-divider"></div>
          <div class="support-text">
            Need help? Contact our team at
            <a href="mailto:info@Vidyarthi.com" class="support-link">info@Vidyarthi.com</a>
          </div>
          <div style="margin-top: 15px; font-size: 12px; color: rgba(255, 255, 255, 0.6);">
            © 2024 Vidyarthi. All rights reserved.
          </div>
        </div>
      </div>
    </body>
  </html>`;
};