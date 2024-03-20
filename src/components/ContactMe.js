import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";

const ContactMe = () => {
    const { ref: iconRef, inView: elementVisible } = useInView();
    return (
        <ContactMeSection id="ContactMe">
            <h2>Let's Connect!</h2>
            <div ref={iconRef} className={`icons ${elementVisible ? "animateIcons" : ""}`}>
                <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="mailto:libenson.n@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Libenson-n">
                    <i className="fa-brands fa-github"></i>
                </a> 
            </div>
            <ContactForm />
        </ContactMeSection>
    )
}

export default ContactMe;

const ContactMeSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2 {
        font-size: clamp(2.5rem, 4vw, 5rem);
    }
    .icons {
        display: flex;
        gap: 2rem;
        margin: 2rem 0 2rem 0;
        font-size: 3.5rem; 
    }
    .animateIcons {
        animation: icons;
        animation-duration: 3s;
    }

    @keyframes icons {
        from {
            transform: scale(1.3);
            opacity: 0;
        } 
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    a {
        transition: 0.4s;
        transition-timing-function: linear;
    }
    a:hover {
        color: grey;
        font-size: 3.4rem;
    }

`