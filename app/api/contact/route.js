import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message, budget } = await request.json()
 //console.log('All data from contact', name, email, phone, company, service, message, budget );
 
    // Validate required fields
    if (!name || !email || !service || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Beautiful HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8f9fa;
          }
          .container {
            background-color: white;
            margin: 20px;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 30px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 4px solid #667eea;
            background-color: #f8f9fa;
            border-radius: 4px;
          }
          .field-label {
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
            display: block;
          }
          .field-value {
            margin: 0;
            color: #555;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Contact Form Submission</h1>
            <p>You have received a new message from your website!</p>
          </div>

          <div class="field">
            <span class="field-label">👤 Full Name</span>
            <p class="field-value">${name}</p>
          </div>

          <div class="field">
            <span class="field-label">📧 Email Address</span>
            <p class="field-value">${email}</p>
          </div>

          ${phone ? `
          <div class="field">
            <span class="field-label">📞 Phone Number</span>
            <p class="field-value">${phone}</p>
          </div>
          ` : ''}

          ${company ? `
          <div class="field">
            <span class="field-label">🏢 Company Name</span>
            <p class="field-value">${company}</p>
          </div>
          ` : ''}

          <div class="field">
            <span class="field-label">🔧 Service Interested In</span>
            <p class="field-value">${service}</p>
          </div>

          ${budget ? `
          <div class="field">
            <span class="field-label">💰 Project Budget</span>
            <p class="field-value">${budget}</p>
          </div>
          ` : ''}

          <div class="field">
            <span class="field-label">💬 Message</span>
            <p class="field-value">${message}</p>
          </div>

          
          <div class="footer">
            <p>This message was sent from your website contact form.</p>
            <p>Please respond to the inquiry as soon as possible.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: htmlTemplate,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return Response.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email sending error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

