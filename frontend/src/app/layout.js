import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="BGC">
          <div className="ellipse-1" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
        </div>
        
        {children}
      </body>
    </html>
  )
}
