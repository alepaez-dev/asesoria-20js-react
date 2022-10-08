import React, { useEffect, useState } from "react"

export const useIsMobile = () => {
  const { width } = useResponsive()
  return width < 500 // boolean
}

export const useIsDesktop = () => {
  const { width } = useResponsive()
  return width > 720 // boolean
}
export const useResponsive = () => {

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // Se esta haciendo una vexz
  useEffect(() => {
    // Eventos(window cambie -> sete)

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    // Seteado de evento  donde se ejecutara cada vez que cambie la window
    window.addEventListener("resize", handleResize)

    // Setear al principio los valores de la window
    handleResize()
    
    // Unmount, Salirse del componente
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return dimensions
}

// Post -> userId -> Hook a peticion al back
// undefined -> // UserId
// Resize
// Window
