import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,  // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
})

export async function POST(request: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    return NextResponse.json({ success: true, emailSent: false });
  }

  try {
    const data = await request.json()
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '💕 New Date Response!',
      html: `
        <h1>She responded!</h1>
        <p>Date: ${new Date(data.date).toLocaleDateString()}</p>
        <p>Time: ${data.time}</p>
        <p>Food: ${data.food.join(', ')}</p>
        <p>Chill tiếp: ${data.chillActivity}</p>
        <p>Excitement: ${data.excitement}/100</p>
      `,
      attachments: [{
        filename: `date-response-${new Date().toISOString()}.json`,
        content: JSON.stringify(data, null, 2),
        contentType: 'application/json'
      }]
    })
    
    return NextResponse.json({ success: true, emailSent: true })
  } catch {
    return NextResponse.json({ success: true, emailSent: false })
  }
}
