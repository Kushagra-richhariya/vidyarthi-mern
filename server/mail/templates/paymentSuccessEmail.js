const emailStyles = require('./emailStyles');

exports.paymentSuccessEmail = (name, courseName, amount) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Payment Confirmation - Vidyarthi</title>
      <style>
        ${emailStyles}
      </style>
    </head>
  
    <body>
      <div class="email-container fade-in">
        <div class="email-header">
          <h1 class="header-title">💳 Payment Successful!</h1>
          <p class="header-subtitle">Your premium learning journey begins now</p>
        </div>

        <div class="email-content">
          <div class="greeting">Hi ${name},</div>
          <div class="message-body">
            <p>We're excited to confirm your payment. You're now enrolled in premium learning with <strong style="color: #e94560;">Vidyarthi</strong>!</p>

            <div class="highlight-box">
              <h3 style="color: #e94560; margin-bottom: 10px; font-size: 18px;">📋 Payment Details</h3>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <span style="color: #64748b;">Course:</span>
                <span style="font-weight: 600; color: #1e293b;">${courseName}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <span style="color: #64748b;">Amount:</span>
                <span style="font-weight: 600; color: #1e293b;">₹${amount}</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #64748b;">Status:</span>
                <span style="font-weight: 600; color: #059669;">✅ Confirmed</span>
              </div>
            </div>

            <div class="success-box">
              <h4 style="color: #059669; margin-bottom: 10px; font-size: 16px;">🎉 What You Get</h4>
              <ul style="margin: 0; padding-left: 20px; color: #065f46;">
                <li>Full access to course content</li>
                <li>Lifetime access to materials</li>
                <li>Certificate upon completion</li>
                <li>Premium support from instructors</li>
              </ul>
            </div>

            <p>Your course is now available in your dashboard. Start learning immediately!</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a
              href="https://Vidyarthi-edtech-project.vercel.app/dashboard"
              class="cta-button"
            >
              🚀 Start Learning Now
            </a>
          </div>

          <div class="premium-box">
            <h4 style="color: #7c3aed; margin-bottom: 10px; font-size: 16px;">💡 Pro Tips</h4>
            <ul style="margin: 0; padding-left: 20px; color: #5b21b6;">
              <li>Set aside dedicated time for learning</li>
              <li>Take notes and practice regularly</li>
              <li>Engage with the community</li>
              <li>Don't hesitate to ask questions</li>
            </ul>
          </div>
        </div>

        <div class="email-footer">
          <div class="footer-divider"></div>
          <div class="support-text">
            Questions about your purchase? Contact us at
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
