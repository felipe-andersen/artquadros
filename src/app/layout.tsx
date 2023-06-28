
import StyledComponentsRegistry from '@/registry'
import './globals.css'
import { lang } from '@/utils/langConfig'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={lang}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

 
 
  

 

