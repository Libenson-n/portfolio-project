import styled from "styled-components";

const About = () => {
    return (
        <AboutSection id="About">
            <AboutMe>
                <AboutText>
                    <h2>A little bit about me</h2>
                    <p>I'm passionate about learning new technologies and </p>
                </AboutText>
            </AboutMe>
            <Skills>
                <p>Skills</p>
                <Icons>
                    <div>
                        <i className="fa-brands fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-js"></i> 
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-node"></i> 
                        <p>Node JS</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-react"></i>
                        <p>React JS</p>
                    </div>
                    
                </Icons>
            </Skills>
        </AboutSection>
    )
}

export default About

const AboutSection = styled.section`
    min-height: 100vh;
    margin: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const AboutMe = styled.div`
    display: flex;
    flex-direction: row;
    h2 {
        font-size: clamp(2rem, 3.5vw, 5rem);
    }
    img {
        width: min(50vw, 350px);
        clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
    }
`
const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 80%;
    gap: 2rem;
    font-size: 2rem;
    padding-top: 2rem;
`
const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

`
const Icons = styled.div`
    display: flex;
    gap: 1.5em;
    font-size: 4rem;

    p {
        font-size: 01rem;
    }
`