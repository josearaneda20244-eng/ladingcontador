import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validación básica
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Aquí puedes integrar con servicios como:
    // - SendGrid
    // - Nodemailer
    // - Resend
    // - EmailJS
    // - O cualquier otro servicio de email

    // Por ahora, simulamos el envío exitoso
    console.log('Nuevo mensaje de contacto:', {
      name: body.name,
      email: body.email,
      phone: body.phone || 'No proporcionado',
      company: body.company || 'No proporcionado',
      message: body.message,
      timestamp: new Date().toISOString()
    })

    // En producción, aquí enviarías el email
    // Ejemplo con Nodemailer:
    /*
    const transporter = nodemailer.createTransporter({
      // configuración del servicio de email
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'contacto@contadorpro.cl',
      subject: `Nuevo mensaje de ${body.name}`,
      html: `
        <h2>Nuevo mensaje desde la landing page</h2>
        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Teléfono:</strong> ${body.phone || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${body.company || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${body.message}</p>
      `
    })
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado exitosamente' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Manejar métodos no permitidos
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}