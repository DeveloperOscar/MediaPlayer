import React from "react";
import darkTailwindCss from "themes/tailwindcss/dark";

//modificar aqui la instancia para los distintos temas de colores
const ThemeContext = React.createContext(darkTailwindCss);

export default ThemeContext;
