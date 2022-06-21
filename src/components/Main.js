import React from "react";
import Info from "./Info";
import Footer from "./Footer"
import headshot from "../img/headshot.jpg";
import mail from "../img/Mail.png";
import linkedin from "../img/linkedin.png";

const Main = () => {
    return (
        <main className="card--container">
        <img className="img--headshot" src={headshot} alt="Headshot photo" />
        <h1>Nick Hollins</h1>
        <h2>Full Stack Developer</h2>
        <a className="link--website" href="#">hollinsdigital.com</a>
        <div className="socials">
            <a className="btn" href="#"><img src={mail} alt="Mail icon" /> Email</a>
            <a className="btn btn--primary" href="#"><img src={linkedin} alt="linkedin icon" /> LinkedIn</a>
        </div>
        <Info />
        <Footer />
    </main>

    )
}

export default Main