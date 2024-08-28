import  { useState } from 'react'

function useThemes() {
    
const themesData = [
    {
      primary: "#f64753",
      secondary: "white",
      oppositeSecondary: "rgb(24, 22, 22)",
      fullPageOverlay: "rgba(246, 71, 83, 0.05)",
    },
    {
      primary: "#f68c97",
      secondary: "white",
      oppositeSecondary: "rgb(24, 22, 22)",
      fullPageOverlay: "rgb(246,140,151,0.05)",
    },
    {
      primary: "#47a3f6",
      secondary: "white",
      oppositeSecondary: "rgb(24, 22, 22)",
      fullPageOverlay: "rgb(71, 163, 246,0.05)",
    },
    {
      primary: "#f6a37f",
      secondary: "white",
      oppositeSecondary: "rgb(24, 22, 22)",
      fullPageOverlay: "rgb(246, 163, 127,0.05)",
    },
    {
      primary: "#0FC2C0",
      secondary: "#FBF2ED",
      oppositeSecondary: "rgb(24, 22, 22)",
      fullPageOverlay: "rgb(1, 89, 88,0.05)",
    },
  ];
  
  const setTheme = (theme: {
    primary: string;
    secondary: string;
    oppositeSecondary: string;
    fullPageOverlay: string;
  }) => {
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.secondary
    );
    document.documentElement.style.setProperty(
      "--opposite-secondary",
      theme.oppositeSecondary
    );
    document.documentElement.style.setProperty(
      "--full-page-overlay",
      theme.fullPageOverlay
    );
  
    localStorage.setItem("--primary-color", theme.primary);
    localStorage.setItem("--secondary-color", theme.secondary);
    localStorage.setItem("--opposite-secondary", theme.oppositeSecondary);
    localStorage.setItem("--full-page-overlay", theme.fullPageOverlay);
  };

  

  const [themesAppearance, setThemesAppearance] = useState("83%");

  const themesAppearanceHandler = () => {
    setThemesAppearance((prev) => (prev === "83%" ? "0%" : "83%"));
  };


  const themeHandlers = themesData.map((theme) => () => setTheme(theme));
  

  return (
    {themesAppearance , setThemesAppearance ,themesAppearanceHandler ,themeHandlers}
  )
}

export default useThemes