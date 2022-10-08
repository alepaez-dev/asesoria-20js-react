import React, { useEffect, useState } from "react"

export const useResponsive = () => {

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState("")
  

  // Se esta haciendo una vexz
  useEffect(() => {
    setIsLoading(true) // esta cargando
    // Eventos(window cambie -> sete)

    // Seteado de evento  donde se ejecutara cada vez que cambie la window
    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    })


    // Setear al principio los valores de la window
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
 
    // Peticion backend
    setTimeout(() => {
      setName("Alejandrqa") // ya nos trajo la data
      setIsLoading(false) //ya no esta cargando
    }, 3000)
    
  }, [])
 
  return { name, isLoading }

}

// Post -> userId -> Hook a peticion al back
// undefined -> // UserId
// Resize
// Window
