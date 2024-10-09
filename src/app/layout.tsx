import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tranquil Tones | Soothing White Noise for Focus and Relaxation",
  description: "Immerse yourself in calming white noise and ambient sounds. Boost concentration, reduce stress, and improve sleep with our customizable audio experience.",
  keywords: [
    "white noise, 백색소음, 白噪音, белый шум",
    "ambient sounds, 환경음, 环境声音, фоновые звуки",
    "relaxation app, 휴식 앱, 放松应用, приложение для релаксации",
    "focus enhancement, 집중력 향상, 提高注意力, улучшение концентрации",
    "sleep aid, 수면 보조, 助眠, помощь для сна",
    "stress relief, 스트레스 해소, 缓解压力, снятие стресса",
    "meditation sounds, 명상 소리, 冥想声音, звуки для медитации",
    "productivity tool, 생산성 도구, 生产力工具, инструмент для продуктивности",
    "pink noise, 핑크 노이즈, 粉红噪音, розовый шум",
    "brown noise, 브라운 노이즈, 棕色噪音, коричневый шум",
    "rain sounds, 빗소리, 雨声, звуки дождя",
    "nature sounds, 자연의 소리, 自然声音, звуки природы",
    "background noise, 배경 소음, 背景噪音, фоновый шум",
    "sound therapy, 음향 치료, 声音疗法, звуковая терапия",
    "noise generator, 노이즈 생성기, 噪音发生器, генератор шума",
    "calm app, 진정 앱, 冷静应用, приложение для спокойствия",
    "focus music, 집중 음악, 专注音乐, музыка для концентрации",
    "study sounds, 공부 소리, 学习声音, звуки для учебы",
    "work from home, 재택근무, 在家工作, работа из дома",
    "noise masking, 소음 마스킹, 噪音掩蔽, маскировка шума"
  ].join(", "),
  openGraph: {
    title: "Tranquil Tones - Immersive White Noise Experience",
    description: "Discover a world of soothing sounds. Enhance focus, sleep better, and find your inner calm with our customizable white noise and ambient sound app.",
    images: [
      {
        url: "https://tranquil-tones.ludgi.ai/logo.webp",
        width: 1200,
        height: 630,
        alt: "Tranquil Tones White Noise App",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Tranquil Tones",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquil Tones - Your Personal Oasis of Calm",
    description: "Elevate your environment with soothing white noise and ambient sounds. Perfect for work, study, sleep, and relaxation.",
    images: ["https://tranquil-tones.example.com/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const pubId = "ca-pub-5823741955283998"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content={pubId} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Funding Choices 스크립트 */}
        <Script
          id="google-funding-choices"
          strategy="afterInteractive"
          src={`https://fundingchoicesmessages.google.com/i/${pubId}?ers=1`}
        />
        {/* Google FC Present 스크립트 */}
        <Script
          id="google-fc-present"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
          }}
        />
      </body>
    </html>
  );
}
