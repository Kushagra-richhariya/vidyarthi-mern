const emailStyles = require('./emailStyles');

exports.contactFormResponse = (name, email, message) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Message Received - Vidyarthi</title>
      <style>
        ${emailStyles}
      </style>
    </head>
  
    <body>
      <div class="email-container fade-in">
        <div class="email-header">
          <h1 class="header-title">📧 Message Received!</h1>
          <p class="header-subtitle">We've got your message and we're on it</p>
        </div>

        <div class="email-content">
          <div class="greeting">Hello there ${name},</div>
          <div class="message-body">
            <p>Thank you for reaching out to <strong style="color: #dc2626;">Vidyarthi</strong>! We've successfully received your message and our expert team is excited to help you.</p>

            <div class="highlight-box">
              <h3 style="color: #1d4ed8; margin-bottom: 10px; font-size: 18px;">📋 Your Message Details</h3>
              <div style="margin-bottom: 10px;">
                <strong style="color: #111827;">From:</strong> <span style="color: #374151;">${name} (${email})</span>
              </div>
              <div style="margin-bottom: 10px;">
                <strong style="color: #111827;">Subject:</strong> <span style="color: #374151;">Contact Form Submission</span>
              </div>
              <div style="margin-bottom: 10px;">
                <strong style="color: #111827;">Message:</strong>
                <p style="margin: 5px 0 0 0; color: #4b5563; font-style: italic; background: #f9fafb; padding: 10px; border-radius: 6px;">"${message}"</p>
              </div>
            </div>

            <div class="success-box">
              <h4 style="color: #059669; margin-bottom: 10px; font-size: 16px;">✅ What Happens Next?</h4>
              <ul style="margin: 0; padding-left: 20px; color: #065f46;">
                <li>Our team will review your message within 24 hours</li>
                <li>You'll receive a detailed response from our experts</li>
                <li>We'll provide personalized solutions for your needs</li>
                <li>Follow-up support to ensure your satisfaction</li>
              </ul>
            </div>

            <div class="premium-box">
              <h4 style="color: #7c3aed; margin-bottom: 10px; font-size: 16px;">💡 While You Wait</h4>
              <ul style="margin: 0; padding-left: 20px; color: #5b21b6;">
                <li>Explore our course catalog</li>
                <li>Check out our learning resources</li>
                <li>Read our FAQ section</li>
                <li>Join our community forums</li>
              </ul>
            </div>

            <p>We appreciate your interest in <strong style="color: #dc2626;">Vidyarthi</strong> and are committed to providing you with the best possible premium support experience!</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a
              href="https://Vidyarthi-edtech-project.vercel.app"
              class="cta-button"
            >
              🚀 Explore Our Platform
            </a>
          </div>

          <div class="warning-box">
            <h4 style="color: #dc2626; margin-bottom: 10px; font-size: 16px;">📞 Urgent Matters?</h4>
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              For immediate assistance, you can also reach us through our live chat feature available on our website.
            </p>
          </div>
        </div>

        <div class="email-footer">
          <div class="footer-divider"></div>
          <div class="support-text">
            Questions? Contact our support team at
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
