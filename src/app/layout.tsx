import NavBar from '@/components/navbar/NavBar';
import './globals.css';
import Background from '@/components/background/Background';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className='bg-[#0b0a14]'>
      <Background />
        <NavBar/>
            {children}
      </body>
    </html>
  )
}