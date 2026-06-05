import nodemailer from 'nodemailer';

export const prerender = false;

// Helper function to escape HTML tags and prevent injection attacks
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Escape user input to prevent HTML injection in the email client
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Configure the mail transporter from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${safeName}" <${safeEmail}>`,
      to: process.env.DIRECTOR_EMAIL || 'sculpture489@gmail.com',
      subject: `The Smart Salon - New Contact Submission: ${safeSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #E94F37; padding-left: 10px; margin-left: 0; color: #333; background-color: #f9f9f9; padding: 10px 15px; border-radius: 4px;">
          ${safeMessage.replace(/\n/g, '<br/>')}
        </blockquote>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Error sending email: ' + error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
