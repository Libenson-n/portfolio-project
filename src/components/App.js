import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import GlobalStyles from "../GlobalStyles";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? "dark" : "light";
  
  const toggleTheme = () => {
    setIsDark((current) => (current === false ? true : false));
      localStorage.setItem("isDark", JSON.stringify(!isDark));
      setIsDark(!isDark)
  };
  
  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true"
    setIsDark(isDark)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="App" id={theme}>
        <GlobalStyles />
        <NavBar />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme}/>
        <Hero />
        <About />
        <Projects />
        <ContactMe />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;




