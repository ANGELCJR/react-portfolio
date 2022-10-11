import React from 'react';
import { FaLinkedin, FaGithub,} from "react-icons/fa";

function Footer() {
    return (
            <div className="footer">
                <footer>
                    <a href='https://www.linkedin.com/in/angel-c-6b3571184/' target="blank" rel="noopener noreferrer">
                        <li className="logo">
                            <FaLinkedin/>
                        </li>
                    </a>
                    <a href='https://github.com/ANGELCJR?tab=repositories' target="blank" rel="noopener noreferrer">
                        <li className='logo'>
                            <FaGithub />
                        </li>
                     </a>
                </footer>
            </div>
        );
    }

export default Footer;