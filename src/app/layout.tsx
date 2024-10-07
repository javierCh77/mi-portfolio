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
      <body className='bg-[#0b0a14] w-full justify-center flex flex-col items-center'>
      <div className='flex w-full md:w-9/12  flex-col'>
      <Background />
        <NavBar/>
            {children}
            </div>
      </body>
    </html>
  )
}