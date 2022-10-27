import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { AnimatePresence, motion } from 'framer-motion'
import { theme } from '../utils/theme'
import createEmotionCache from '../utils/createEmotionCache'
import HumanContext from '../src/components/HumanContext'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'


const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps, 
}) {

  const [human, setHuman] = useState()
  const router = useRouter()

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Half A Human</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <HumanContext.Provider value={[human, setHuman]}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={router.route}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              className={styles.container}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </HumanContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp