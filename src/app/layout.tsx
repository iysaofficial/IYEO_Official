// import GalleryComp from '@/components/GalleryComp';
import NavbarComp from '@/components/NavbarComp';
import FooterComp from '@/components/FooterComp';
import Script from 'next/script';
import { ReactNode } from 'react';

export const metadata = {
  title: 'IYEO Official'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5B2DPJ2PJ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5B2DPJ2PJ7');
          `}
        </Script>
      </head>
      <body>
        <NavbarComp />
        {children}
        {/* <br />
        <br />
        <br /> */}
        {/* <GalleryComp/> */}
        {/* <br />
        <br />
        <br /> */}
        <FooterComp />
      </body>
    </html>
  );
}
