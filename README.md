# Portfolio Project

## A single page portfolio website using React JS and Styled Components

In this project I tried to implement as many React JS concept and Hooks as possible while keeping the website simple and responsive.

### Features implemented

    * A navigation bar with links that scroll to the corresponding section when clicked.
    * A switch to toggle between a light theme and a dark theme, the last theme chosen is saved in the local storage so it persists if the page is reloaded.
    * CSS animations and transitions 

### React Hooks Used

The react hooks used in this project are the following:

    * useState
        to set which theme is active.
    * useEffect
        to get the theme in the local storage and set it to active on mount.
    * createContext
        to provide the theme context all the components.
    * react-intersection-observer
        to trigger a CSS animation when the user scrolls to a particular section.
    * react-hook-form
        to handle the form validation and submission.
    * react-scroll
        for the smooth scroll navigation.

### Responsiveness

I tried making the website responsive while using as few media queries as possible, I wanted to program it in a way that uses the browsers default behaviors to hadle the responsiveness. 
