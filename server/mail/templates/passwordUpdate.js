const emailStyles = require('./emailStyles');

exports.passwordUpdateEmail = (name) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Password Updated - Vidyarthi</title>
      <style>
        ${emailStyles}
      </style>
    </head>
  
    <body>
      <div class="email-container fade-in">
        <div class="email-header">
          <h1 class="header-title">🔐 Password Updated</h1>
          <p class="header-subtitle">Your account security has been enhanced</p>
        </div>

        <div class="email-content">
          <div class="greeting">Hi ${name},</div>
          <div class="message-body">
            <p>
              We wanted to let you know that the password for your <strong style="color: #e94560;">Vidyarthi</strong> account has been updated successfully.
            </p>

            <div class="success-box">
              <h4 style="color: #059669; margin-bottom: 10px; font-size: 16px;">✅ Security Update Confirmed</h4>
              <ul style="margin: 0; padding-left: 20px; color: #065f46;">
                <li>Your new password is now active</li>
                <li>All your account data remains secure</li>
                <li>You can continue learning without interruption</li>
                <li>Your course progress is preserved</li>
              </ul>
            </div>

            <div class="warning-box">
              <h4 style="color: #dc2626; margin-bottom: 10px; font-size: 16px;">⚠️ Security Reminder</h4>
              <ul style="margin: 0; padding-left: 20px; color: #991b1b;">
                <li>Keep your password secure and private</li>
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication if available</li>
                <li>Log out from shared devices</li>
              </ul>
            </div>

            <p>
              If you didn't make this change, please contact our support team immediately.
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a
              href="https://Vidyarthi-edtech-project.vercel.app/login"
              class="cta-button"
            >
              🔐 Access Your Account
            </a>
          </div>
        </div>

        <div class="email-footer">
          <div class="footer-divider"></div>
          <div class="support-text">
            Need help? Contact our security team at
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
