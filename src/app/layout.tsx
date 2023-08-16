
import StyledComponentsRegistry from '@/registry'
import './globals.css'
import { lang } from '@/utils/langConfig'
import { connectRedis } from '@/utils/redis'
import {QueryClient, QueryClientProvider} from 'react-query'

export const appQueryClient = new QueryClient()

export default function RootLayout({children}: {children: React.ReactNode}) {
  connectRedis()


  return (
    <html lang={lang}>

        <body>

            <QueryClientProvider client={appQueryClient}>

                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

            </QueryClientProvider>

       </body>

    </html>
  )
}

 
 
  

 

