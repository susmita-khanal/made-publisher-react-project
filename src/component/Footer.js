import React from 'react';
import {Link} from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-left-side">
                    <div className="top-first">
                    <div className="first1">Made Publisher</div>
                <div className="first">Publisher of design and culture</div>
                <div className="first">Melbourne and Newyork</div>
                </div>
                <div className="top-first">
                    <div className="first1">Follow</div>
                    <div className="first">Twiter</div>
                    <div className="first">Instagram</div>
                </div>
                </div>
                <div className="footer-mid">
                    
                    <div className="f-mid">
                    <div ClassName="abc">General Enquiries</div>
                    <Link className="link">post@gmail.com</Link>
                    </div>
                    <div className="f-mid">
                    <div ClassName="abc">Advertising</div>
                   <Link className="link">post@gmail.com</Link>
                    </div>
                    <div className="f-mid">
                    <div ClassName="abc">Submission</div>
                   <Link className="link">post@gmail.com</Link>
                    </div>
                    </div>

                <div className="footer-right-sider">
                    <div classNmae="last">
                    <div className="third-one">Designed by made publisher</div>
                    <div className="third">Development by zaan</div>
                    <div className="third">Fonts: Maison New family</div>
                    </div>
                    <div className="last">
                    <div className="third">Terms and conditions</div>
                    <div className="third">privacy policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
