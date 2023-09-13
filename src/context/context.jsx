import React from "react";

const Context = React.createContext({
    isEnglish: true,
    isDarkTheme: true,
    toggleLanguage: () => {},
    toggleTheme: () => {}

})

export default Context;