import styled from "styled-components"
import { useEffect } from "react"

const Hero = () => {
    useEffect(() => {

    })
    return (
        <HeroSection id="Hero">
            <Intro>
                <p>Hi, my name is</p>
                <h1>Libenson Nicolas</h1>
                <p>I'm a full-stack web developer.</p>
            </Intro>
            <img src={require("../assets/portrait.jpg")} alt="Libenson Nicolas"/>
        </HeroSection>
    )
}

export default Hero

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;


    img {
        display: block;
        max-width: 45vmin;
        margin-right: 40px;
        clip-path: polygon(100% 0, 100% 50%, 100% 100%, 25% 100%, 0 50%, 25% 0%);
    }
`
const Intro = styled.div`
    font-size: clamp(1rem, 3.5vw, 5rem);
    margin-left: 20px;  
    
   
`

        