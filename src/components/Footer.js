import React from "react"
import Facebook from "../img/Facebook.png"
import Github from "../img/GitHub.png"
import Instagram from "../img/Instagram.png"
import Twitter from "../img/Twitter.png"

const Footer = () => {
    return (
        <footer>
            <img src={Twitter} alt="Twitter Icon" />
            <img src={Facebook} alt="Facebook Icon" />
            <img src={Instagram} alt="Instagram Icon" />
            <img src={Github} alt="Github Icon" />
        </footer>
    )
}

export default Footer