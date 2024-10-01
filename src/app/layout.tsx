import NavBar from '@/components/navbar/NavBar';
import './globals.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className='bg-[#0b0a14]'>
        <NavBar/>
            {children}
        
      </body>
    </html>
  )
}