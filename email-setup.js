// Email setup for contact form backend
// This is a Node.js script that you can use to set up email functionality
// You'll need to install nodemailer: npm install nodemailer

const nodemailer = require('nodemailer');

// Email configuration
const emailConfig = {
    service: 'gmail', // or your email service
    auth: {
        user: 'info.harshitpaneri@gmail.com',
        pass: 'your-app-password' // Use app-specific password for Gmail
    }
};

// Create transporter
const transporter = nodemailer.createTransporter(emailConfig);

// Email template
function createEmailTemplate(name, email, subject, message) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .content {
                    background: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .field {
                    margin-bottom: 15px;
                }
                .field strong {
                    color: #667eea;
                }
                .footer {
                    text-align: center;
                    color: #666;
                    font-size: 12px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>You have received a new message from your portfolio website.</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <strong>Name:</strong> ${name}
                </div>
                <div class="field">
                    <strong>Email:</strong> ${email}
                </div>
                <div class="field">
                    <strong>Subject:</strong> ${subject}
                </div>
                <div class="field">
                    <strong>Message:</strong>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
            
            <div class="footer">
                <p>This email was sent from your portfolio website contact form.</p>
            </div>
        </body>
        </html>
    `;
}

// Send email function
async function sendContactEmail(name, email, subject, message) {
    try {
        const mailOptions = {
            from: email,
            to: 'info.harshitpaneri@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: createEmailTemplate(name, email, subject, message),
            replyTo: email
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
}

// Auto-reply function
async function sendAutoReply(toEmail, name) {
    try {
        const autoReplyTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .header {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        padding: 20px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                    }
                    .content {
                        background: #f9f9f9;
                        padding: 20px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                    }
                    .signature {
                        border-top: 1px solid #eee;
                        padding-top: 20px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>Thank you for contacting me!</h2>
                </div>
                
                <div class="content">
                    <p>Hi ${name},</p>
                    
                    <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
                    
                    <p>In the meantime, feel free to check out my latest work and blog posts:</p>
                    <ul>
                        <li><a href="https://github.com/harshit-paneri">GitHub Profile</a></li>
                        <li><a href="https://www.linkedin.com/in/harshitpaneri29/">LinkedIn</a></li>
                        <li><a href="https://hashnode.com/@harshitpaneri">Blog on Hashnode</a></li>
                    </ul>
                    
                    <p>Best regards,</p>
                    
                    <div class="signature">
                        <strong>Harshit Paneri</strong><br>
                        Cloud Infrastructure Engineer - DevOps<br>
                        Jumbotail Technologies<br>
                        <a href="mailto:info.harshitpaneri@gmail.com">info.harshitpaneri@gmail.com</a>
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: 'info.harshitpaneri@gmail.com',
            to: toEmail,
            subject: 'Thank you for contacting me - Harshit Paneri',
            html: autoReplyTemplate
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Auto-reply sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending auto-reply:', error);
        return { success: false, error: error.message };
    }
}

// Express.js route example (if you want to use this with a backend)
function setupContactRoute(app) {
    app.post('/api/contact', async (req, res) => {
        const { name, email, subject, message } = req.body;
        
        // Validate input
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        
        try {
            // Send email to yourself
            const emailResult = await sendContactEmail(name, email, subject, message);
            
            if (emailResult.success) {
                // Send auto-reply to the sender
                await sendAutoReply(email, name);
                
                res.json({ 
                    success: true, 
                    message: 'Email sent successfully!',
                    messageId: emailResult.messageId 
                });
            } else {
                res.status(500).json({ 
                    error: 'Failed to send email', 
                    details: emailResult.error 
                });
            }
        } catch (error) {
            res.status(500).json({ 
                error: 'Server error', 
                details: error.message 
            });
        }
    });
}

// Test email function
async function testEmail() {
    const testResult = await sendContactEmail(
        'Test User',
        'test@example.com',
        'Test Subject',
        'This is a test message from the portfolio contact form.'
    );
    
    console.log('Test email result:', testResult);
}

module.exports = {
    sendContactEmail,
    sendAutoReply,
    setupContactRoute,
    testEmail
};

// Instructions for setup:
/*
1. Install nodemailer: npm install nodemailer
2. Set up Gmail App Password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an app-specific password
   - Replace 'your-app-password' with the generated password
3. For other email providers, update the emailConfig accordingly
4. To use with Express.js, install express: npm install express
5. Test the setup by running: node email-setup.js
*/ 