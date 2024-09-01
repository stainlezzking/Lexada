export const contactUSEmailTemplate = function (data) {
  return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .email-header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #ddd;
        }
        .email-header h2 {
            margin: 0;
            font-size: 24px;
            color: #4CAF50;
        }
        .email-body {
            padding: 20px 0;
        }
        .email-body p {
            margin: 10px 0;
            line-height: 1.6;
        }
        .email-body strong {
            color: #555;
        }
        .email-footer {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h2>New Contact Us Submission On Lexada Web Application</h2>
        </div>
        <div class="email-body">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Phone Number:</strong> ${data.phone}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
        </div>
        <div class="email-footer">
            <p>This is an automated message. Please do not reply to this email. visit <a href="https://lexadaproperties.com">https://lexadaproperties.com </a> </p>
        </div>
    </div>
</body>
</html>

    `;
};
