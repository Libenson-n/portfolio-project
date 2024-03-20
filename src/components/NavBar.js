import { Link } from "react-scroll";
import styled from "styled-components";
import { useState } from "react";

const NavBar = () => {
    const [extendNavBar, setextendNavBar] = useState(false);

    return (
        <Navigation>
            <div className="hero">
                <Link to="Hero" smooth={true} tabIndex={"0"}>
                    <p className="home">&#8962;</p>
                </Link>
            </div>
            <NavBarLinks>
                <Link to="About" smooth={true} tabIndex={"0"}>About</Link>
                <Link to="Projects" smooth={true} tabIndex={"0"}>Projects</Link>
                <Link to="ContactMe" smooth={true} tabIndex={"0"}>Contact</Link>
            </NavBarLinks>
            {extendNavBar && (<NavBarSmall>
                    <NavMenuSmall>
                        <Link to="About" smooth={true} tabIndex={"0"}>About</Link>
                        <Link to="Projects" smooth={true} tabIndex={"0"}>Projects</Link>
                        <Link to="ContactMe" smooth={true} tabIndex={"0"}>Contact</Link>
                    </NavMenuSmall>
            </NavBarSmall>
            )}
            <NavBarButton onClick={() => {
                setextendNavBar((current) => !current)
            }}>
                {extendNavBar ? <>&#10005;</> : <>&#8801;</>} </NavBarButton>
        </Navigation>
    )
}

export default NavBar

const Navigation = styled.nav`
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
    backdrop-filter: blur(6px);
    box-shadow: rgba(149, 157, 165, 0.1) 0px 10px 10px;
    font-size: 1.2rem;
    height: 80px;
    text-transform: uppercase;

    #light & {
        color: black;
    }
    #dark & {
        color: white;
    }
    .home {
        margin-left: 2rem;
        font-size: 3rem; 
        line-height: 80px;
    }
    a {
        transition: all 0.4s;
    }
    a:hover {
        font-weight: bold;
        cursor: pointer;
        transform: scale(1.1);
    }
`
const NavBarLinks = styled.div`
    display: flex;
    gap: 1rem;
    background-color: rgba(230, 255, 255, 0);
    margin-right: 1.5rem;
    
    @media (max-width: 600px) {
        display: none;
    };

`
const NavBarButton = styled.button`
    width: 40px;
    height: 40px;
    margin-right: 2.6rem;
    text-align: center;
    line-height: 0;
    background: none;
    border-radius: 6px;
    font-size: 2rem;
    border: none;
    cursor: pointer;

    #light & {
        color: black;
    }
    #dark & {
        color: white;
    }
    @media (min-width: 600px) {
        display: none;
    };
    
`
const NavBarSmall = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100px;
    top: 80px;
    width: 90px; 
    right: 1rem;
    text-align: center;
    color: black;
    background-color: rgba(0, 0, 0, 0.5);

    #light & {

    }
    #dark & {
        background-color: lightgrey;
    }

    @media (min-width: 600px) {
        display: none;
    };
`
const NavMenuSmall = styled.div`
    display: flex;
    flex-direction: column;
`
