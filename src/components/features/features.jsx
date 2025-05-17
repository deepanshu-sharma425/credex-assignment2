import React from 'react'
import './features.css'
import email from '../../assets/email1.png'
import equal from '../../assets/equalizer.png'
import elec from '../../assets/electricity.png'
import emoji from '../../assets/emoji.png'
import command from '../../assets/command.png'



function Ruse({ img, h1h1, pp }) {
    return (
        <>
            <div className="imgmanagemt">
                <div className="email">
                    <img src={img} alt="" />
                </div>
                <div className="resouceheading">
                    <h1>{h1h1}</h1>
                    <p>{pp}</p>
                </div>
            </div>

        </>
    )
}
function Features() {
    return (
        <div className='featuresmain'>
            <div className="features">
                <div className="featuresabouth1">
                    <p>We've Built the Future of Data Centers</p>
                    <p>Contact our team for a demo</p>
                </div>
                <div className="featuresaboutbutton">
                    <div className="setup"><button>Set Up a Time</button></div>
                    <div className="learnmore"><button className='learnmore'>Learn More</button></div>
                </div>


            </div>
            <div className="dynamicresoucrce">
                <div className="builtforscale">
                    <button>Built for Scale</button>
                    <p>Dynamic Resource Management</p>
                    <p>Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.</p>
                </div>
                <div className="resoucemanagemnt">
                    <Ruse img={email} h1h1='Resource Management' pp='See all of your resources in one place, update issues, and dynamically plan your resources.' />
                    <Ruse img={elec} h1h1='Deployment Automation' pp='From design, sourcing, supply, manufacutinring, and deployment - our system automates the entire process.' />
                    <Ruse img={equal} h1h1='Networking' pp='Ensure that your networking infrastructure is always in place and ready to scale with your deployments.' />
                    <Ruse img={emoji} h1h1='Firmware Versioning' pp='Ensure that your firmware is always up to date and secure with our automated versioning system.' />
                    <Ruse img={command} h1h1='Digital Twins' pp='Plan capacity intelligently with our digital twin technology.' />

                </div>

            </div>
            

        </div>
    )
}

export default Features