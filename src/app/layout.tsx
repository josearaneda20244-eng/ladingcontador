import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Leonardo Oliva Martinez · Contador auditor jurídico',
  url: 'https://contadorpro.cl',
  image: 'https://contadorpro.cl/images/og-image.jpg',
  description:
    'Contador auditor especializado en estudios jurídicos, notarías y arbitrajes. Auditorías tributarias, peritajes contables y control de honorarios.',
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  founder: {
    '@type': 'Person',
    name: 'Leonardo Oliva Martinez',
    jobTitle: 'Contador Auditor',
  },
  sameAs: [
    'https://www.linkedin.com/',
    'https://wa.me/56912345678',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Providencia 1234, Oficina 501',
    addressLocality: 'Santiago',
    addressRegion: 'RM',
    addressCountry: 'CL',
  },
  serviceType: [
    'Contabilidad para firmas legales',
    'Auditoría tributaria preventiva',
    'Peritajes contables',
    'Gobernanza y compliance financiero',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Trabajan únicamente con abogados o también con notarías y arbitrajes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestro servicio está diseñado para firmas jurídicas en sentido amplio: estudios boutique, notarías, conservadores y centros de arbitraje. Adaptamos plan de cuentas, controles y reportería según cada obligación regulatoria.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo acompañan un proceso de fiscalización del SII?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Preparamos carpetas con respaldo contable y tributario, simulamos preguntas del fiscalizador y asistimos presencialmente a la citación. Además, diseñamos planes correctivos para cerrar sin multas ni observaciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué control realizan sobre honorarios y desembolsos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Configuramos libros auxiliares por causa y cliente, control de anticipos, registro de gastos recuperables y proyecciones de distribución a socios. Todo queda disponible en reportes mensuales y paneles compartidos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pueden elaborar informes periciales y acompañar en juicio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Elaboramos informes con estándar judicial, cuantificamos daños y participamos como peritos o asesores técnicos en audiencias, incluyendo apoyo en contraperitajes.',
      },
    },
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL('https://contadorpro.cl'),
  title: {
    default: 'Contador Auditor Jurídico | Asesoría Contable para Abogados y Notarías',
    template: '%s | Contador Auditor Jurídico',
  },
  description:
    'Contabilidad estratégica, auditorías tributarias y peritajes financieros para estudios jurídicos, notarías y arbitrajes. Respaldo contable especializado, confidencialidad y cumplimiento SII.',
  keywords: [
    'contador auditor jurídico',
    'contabilidad para abogados',
    'auditoría tributaria estudios jurídicos',
    'peritaje contable judicial',
    'contabilidad notarías',
    'defensa fiscal SII',
    'honorarios profesionales',
    'cumplimiento UAF',
    'asesoría contable legal',
    'Leonardo Oliva Martinez contador auditor',
  ],
  authors: [{ name: 'Leonardo Oliva Martinez · Contador auditor' }],
  creator: 'Leonardo Oliva Martinez',
  publisher: 'Contador Auditor Jurídico',
  category: 'professional services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://contadorpro.cl',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://contadorpro.cl',
    title: 'Contador Auditor Jurídico | Asesoría Contable para Abogados y Notarías',
    description:
      'Especialista en estudios jurídicos: auditorías tributarias, control de honorarios, informes periciales y acompañamiento en fiscalizaciones.',
    siteName: 'Contador Auditor Jurídico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contador Auditor Jurídico | Asesoría Contable para Abogados y Notarías',
    description:
      'Contabilidad estratégica, peritajes y defensa tributaria especializada para profesionales del derecho en Chile.',
  },
  other: {
    'format-detection': 'telephone=no',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} antialiased bg-slate-50`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SocialRail />
        <WhatsAppButton />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        <Script id="ld-professional-service" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(professionalServiceJsonLd)}
        </Script>
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      </body>
    </html>
  );
}
