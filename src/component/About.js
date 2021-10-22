import React from 'react';
import "./About.css";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-section">
                        <img className="abt-img"
                        src="http://www.madepublishers.com/assets/Uploads/_resampled/SetWidthWzEzODBd-Made-About.jpg"
                        alt=""/>
                   <div className="about-info">
                       <div className="abt">
                           <div className="about-heading">About us</div>
                       <div className="about-body">
                       We are MADE Publishers, a boutique periodical and book publisher with offices in 
                       Melbourne (Australia) and New York (United States). Founded in 2007 by partners 
                       Thomas Williams and Amber Hourigan we produce editions and books dedicated to 
                       design, photography, fashion, art, architecture, health & lifestyle. With an 
                       emphasis on quality content and high production values, our publications have 
                       been recognized internationally with various awards and accolades.<br/><br/>
                       Whilst we are committed to producing the highest quality printed publications, 
                       we also embrace new technologies and continue to explore the increasingly growing 
                       of digital publishing. Adopting a ‘hybrid’ publishing philosophy, we believe that both 
                       print and digital can exist in harmony, often enhancing and complementing one another in
                        unexpected ways.
                       </div>
                       </div>
                   
                   <div className="abt">
                       <div className="about-heading">Stokist & Distribution</div>
                       <div className="about-body">Our publications are stocked at independent retailers,
                       es and galleries around the world. Unlike traditional distribution models, we liaise 
                       directly with all of our stockists, and dispatch our stock directly from our warehouse 
                       and fulfillment centre in Berlin, Germany. We prefer to deal directly with our stockists,
                        which enables us to offer a greater margin for our retailers and to ensure that all stock 
                        arrives safely and on-time. We offer generous wholesale pricing and have a range of 
                        competitive shipping options available worldwide.
                        <br/><br/>If you have a store and would like to stock our publications, or know
                         of one that might be a good fit, we’d love to hear from you! For a complete 
                         information kit and wholesale pricing, please email us at orders
                         <Link className="about-link">@madepublishers.com</Link>
                         </div>
                         </div>
                       

                        <div className="abt">
                            <div className="about-heading">Contact</div>
                            <div className="about-body">
                            Want to be kept up-to-date and be the first to be notified about new publications? We welcome conversation with our readers and would love to hear from you.
<br/><br/>
For order and online store enquiries, please contact us at orders@madepublishers.com
<br/><br/>
For all other general enquires and feedback, please contact us at post@madepublishers.com

We can also be reached via social media:
Twitter:<Link className="about-link">@madepublishers</Link> 
Instagram:<Link className="about-link"> @madepublishers</Link>

                            </div>
                        </div>

                        <div className="abt">
                            <div className="about-heading">Editorial Submissions</div>
                            <div className="about-body">
                            We are always on the lookout for high quality contributors for our publications. If you feel you are a good fit, we’d love to hear from you. Please ensure your submission adheres to the following guidelines:
<br/><br/>
– Clear and concise <br/>
– Reference to a single website only<br/>
– PDF attachments only (under 3 mb)<br/><br/>

Unfortunately due to the large number of submissions we receive, we can’t always reply to everyone. However, if your content is considered for publishing, we will be in touch! For submissions, please email us at submissions<Link className="about-link">@madepublishers.com</Link>

                            </div>
                        </div>

                        <div className="abt">
                            <div className="about-heading">Press & Media</div>
                            <div className="about-body">
                            For press and media coverage, we have a wide selection of high-resolution images and brand assets available (suitable for use online and in print). Opportunities to conduct interviews with founders Thomas Williams and Amber Hourigan are also available on request.
<br/><br/>
Please ensure that any material specifications and deadlines are included in your enquiry. Due to the large volume of requests, unfortunately we cannot accommodate every request. For all media and press enquiries, please contact us at <Link className="about-link">press@madepublishers.com</Link>

                            </div>
                        </div>

                       </div>
            </div>
            </div>
        </>
    )
}

export default About
