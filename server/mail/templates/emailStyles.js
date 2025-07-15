// Updated and professionally themed shared email styles for consistent modern UI
const emailStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f9fafb;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
  }

  .email-container {
    max-width: 620px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .email-header {
    background: linear-gradient(135deg, #1e40af, #3b82f6);
    padding: 40px 30px;
    text-align: center;
  }

  .logo-container {
    margin-bottom: 15px;
  }

  .logo {
    max-width: 160px;
    height: auto;
  }

  .header-title {
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    margin-top: 10px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-subtitle {
    color: rgba(255, 255, 255, 0.95);
    font-size: 16px;
    margin-top: 8px;
    font-weight: 500;
  }

  .email-content {
    padding: 40px 30px;
    background: #ffffff;
  }

  .greeting {
    font-size: 20px;
    color: #1e293b;
    margin-bottom: 20px;
    font-weight: 600;
  }

  .message-body {
    font-size: 16px;
    line-height: 1.7;
    color: #374151;
  }

  .message-body p {
    margin-bottom: 15px;
  }

  .highlight-box, .success-box, .info-box, .warning-box, .premium-box {
    padding: 20px;
    border-radius: 12px;
    margin: 25px 0;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .highlight-box {
    border-left: 4px solid #3b82f6;
    background: #f8fafc;
  }

  .highlight-text {
    font-size: 22px;
    font-weight: 700;
    color: #1d4ed8;
    text-align: center;
  }

  .info-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 20px;
  }

  .info-item {
    padding: 15px;
    border-radius: 10px;
    background: #f9fafb;
  }

  .info-label {
    font-size: 13px;
    color: #6b7280;
    font-weight: 600;
    text-transform: uppercase;
  }

  .info-value {
    font-size: 15px;
    color: #111827;
    margin-top: 4px;
  }

  .cta-button {
    display: inline-block;
    background: #3b82f6;
    color: #ffffff;
    text-decoration: none;
    padding: 14px 30px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 600;
    margin: 30px 0;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .cta-button:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }

  .email-footer {
    background: #1f2937;
    padding: 25px;
    text-align: center;
  }

  .support-text {
    font-size: 14px;
    color: #d1d5db;
    line-height: 1.6;
  }

  .support-link {
    color: #60a5fa;
    text-decoration: none;
  }

  .support-link:hover {
    text-decoration: underline;
  }

  .footer-divider {
    width: 60px;
    height: 3px;
    background: #3b82f6;
    margin: 20px auto;
    border-radius: 2px;
  }

  @media (max-width: 600px) {
    .email-content,
    .email-header,
    .email-footer {
      padding: 25px 20px;
    }
  }

  .fade-in {
    animation: fadeIn 0.8s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

module.exports = emailStyles;