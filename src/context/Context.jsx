import { createContext, useContext, useState } from "react";

const InfoContext = createContext()

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({children}) => {
  const[theme, setTheme] = useState('light')
  const[lang, setLang] = useState('eng')

  const value = {
    theme,
    setTheme,
    lang,
    setLang,
  }

  return(
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>
        {()=> children}
      </InfoContext.Consumer>
    </InfoContext.Provider>
  )
}

// shart ? amal1 : amal2   ternary operatori


