import styled from "styled-components";

const Projects = () => {
    return (
        <ProjectsSection id="Projects">
            <h2>Projects</h2>
            <ProjectsCards>
                <Container>
                    <div className="card">
                        <div className="front">
                            <img src={require("../assets/nyancat.png")} alt="project1"/>
                        </div>
                        <div className="back">
                            <p>
                                A different take on the famous Flash game Nyan Cat, built using Javascript and Object Oriented Programming.
                            </p>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="card">
                        <div className="front">
                            <img src={require("../assets/slingair.png")} alt="project2"/>
                        </div>
                        <div className="back">
                            <p>
                                A flight booking application using Javascipt and MongoDB.
                            </p>
                        </div>
                    </div>
                </Container>
            </ProjectsCards>
            <More>More projects coming soon...</More>
        </ProjectsSection>
    )
}

export default Projects

const ProjectsSection = styled.section`
    min-height: 100vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 3rem;
        font-size: clamp(2rem, 3.5vw, 5rem);
    }
`   
const ProjectsCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
    gap: 3rem;

    @media (max-width: 600px) {
        flex-direction: column;
    };
`
const Container = styled.div`
    min-width: 310px;
    height: 450px;
    
    &:hover > .card {
        scale: 1.1;
        z-index: 1000;
        .back {
            bottom: 0;
        }
    }
        .card {
        width: 100%;
        height: 100%;
        position: relative;
        transition: all 1.5s;
        overflow: hidden;
        }
        .front, 
        .back,
        .front img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        position: absolute;
        
        }
        .front {
        background-image: url("../assets/nyancat.png");
        background-color: grey;
        }
        .back {
        position: absolute;
        bottom: -100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
        display: flex;
        align-items: center;
        text-align: center;
        transition: all 0.2s;
        transition-delay: 0.2s;
        }
`
const More = styled.p`
    margin-top: 3rem;
`
        
    
 