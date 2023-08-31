import { useEffect } from 'react'
// import '@/styles/globals.css'
import '@/styles/globals.scss'
import '@/sass/pomodorot-timer.sass'
import DefaultLayout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
 
  // 導入bootstrap的JS函式庫
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])


  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)


  return getLayout(<Component {...pageProps} />)
}
