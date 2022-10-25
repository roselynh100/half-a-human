import { useState } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { theme } from '../utils/theme'
import createEmotionCache from '../utils/createEmotionCache'
import HumanContext from '../src/components/HumanContext'
import '../styles/globals.css'


const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps, 
}) {

  const [human, setHuman] = useState()
  const router = useRouter()

  return (
    <HumanContext.Provider value={[human, setHuman]}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={router.route}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </CacheProvider>
    </HumanContext.Provider>
  )
}

export default MyApp