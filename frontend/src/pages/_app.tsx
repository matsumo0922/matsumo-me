import '@/styles/global.css'
import type {AppProps} from 'next/app'
import {ColorModeProvider} from "@/lib/colorMode";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
  )
}
