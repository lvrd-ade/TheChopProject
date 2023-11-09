import { Crimson_Pro } from 'next/font/google'
import './globals.css'


const crimson_pro = Crimson_Pro({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={crimson_pro.className}>
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