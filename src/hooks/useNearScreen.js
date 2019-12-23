import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(function() {
    const observer = new IntersectionObserver(function(entries) {
      const { isIntersecting } = entries[0]
  
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
  
    observer.observe(ref.current)
  }, [ref])

  return [show, ref]
}