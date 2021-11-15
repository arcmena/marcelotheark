import { useEffect, useState } from 'react'

export type TWindowSize =
  | {
      width: number
      height: number
    }
  | undefined

function useWindowSize(): TWindowSize {
  const [windowSize, setWindowSize] = useState<TWindowSize>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
