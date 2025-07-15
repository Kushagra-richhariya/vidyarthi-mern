const emailStyles = require('./emailStyles');

const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification - Vidyarthi</title>
    <style>
      ${emailStyles}
    </style>
  </head>
  
  <body>
    <div class="email-container fade-in">
      <div class="email-header">
        <h1 class="header-title">🔐 Email Verification</h1>
        <p class="header-subtitle">Complete your registration with Vidyarthi</p>
      </div>

      <div class="email-content">
        <div class="greeting">Hello there! 👋</div>
        <div class="message-body">
          <p>
            Welcome to <strong style="color: #e94560;">Vidyarthi</strong>!
            We're excited to have you join our premium learning community. To complete your registration, please verify your email address using the OTP below.
          </p>

          <div class="highlight-box">
            <div class="highlight-text pulse">${otp}</div>
            <p style="text-align: center; margin-top: 15px; color: #64748b; font-size: 14px; font-weight: 500;">Your verification code</p>
          </div>

          <div class="warning-box">
            <h4 style="color: #dc2626; margin-bottom: 10px; font-size: 16px;">⚠️ Important Security Notice</h4>
            <ul style="margin: 0; padding-left: 20px; color: #991b1b;">
              <li>This OTP is valid for <strong>5 minutes</strong></li>
              <li>Do not share this code with anyone</li>
              <li>If you didn't request this, you can safely ignore this email</li>
            </ul>
          </div>

          <p>Once verified, you'll have full access to our premium platform and all its learning features.</p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://Vidyarthi-edtech-project.vercel.app" class="cta-button">
            🚀 Start Learning Now
          </a>
        </div>
      </div>

      <div class="email-footer">
        <div class="footer-divider"></div>
        <div class="support-text">
          Need help? Our premium support team is here for you at 
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

module.exports = otpTemplate;
