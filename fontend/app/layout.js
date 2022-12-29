import Header from "./Header";
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body >
        <Header/>
       <div className="w-[1200px] m-auto">
       {children}
       </div>
        </body>
    </html>
  )
}
