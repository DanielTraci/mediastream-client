import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll =() => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://csilinux.com/static/media/logoW.714b4bc5.png" alt="cybersecretsTV" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>

                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://csilinux.com/static/media/iwclogo.9faaa8d1.png" alt="profilepicture" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
