import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .App {
        
    }
    #light {
        background-color: rgba(255,255,255,0.9); 
        color: black; 
    }
    #dark {
        background-color: rgba(0,0,0,0.9);
        color: white;
    }

    body {  
        font-family: "Poppins", sans-serif;   
        background: linear-gradient(0deg, rgba(220,220,220,1) 0%, rgba(220,220,220,1) 0%, rgba(220,220,220,1) 100%); 
        color: black;  
    }

    ul {
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        background-color: inherit;
    }

`

export default GlobalStyles;