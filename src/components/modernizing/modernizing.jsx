import React from 'react'
import video1 from '../../assets/1.mp4'
import video2 from '../../assets/2.mp4'
import video3 from '../../assets/3.mp4'
import video4 from '../../assets/4.mp4'
import video5 from '../../assets/5.mp4'
import video6 from '../../assets/6.mp4'
import tick from '../../assets/tick.png'
import './modernizing.css'

function Rightvideo({ video, mainh, abouth, abouthp, abouthp1, abouthp2 }) {
  return (
    <div className="bodymainvide">
      <div className="vidembed">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="background-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="boutvid">
        <h1>{mainh}</h1>
        <p>{abouth}</p>
        <div className="liforbout">
          <ul>
            {abouthp && (
              <li>
                <div className="tickmark">
                  <div className="imageraround"><img src={tick} alt="" /></div>
                  <p>{abouthp}</p>
                </div>
              </li>
            )}
            {abouthp1 && (
              <li>
                <div className="tickmark">
                  <div className="imageraround"><img src={tick} alt="" /></div>
                  <p>{abouthp1}</p>
                </div>
              </li>
            )}
            {abouthp2 && (
              <li>
                <div className="tickmark">
                  <div className="imageraround"><img src={tick} alt="" /></div>
                  <p>{abouthp2}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Leftvideo({ video, mainh, abouth, abouthp, abouthp1, abouthp2 }) {
  return (
    <div className="bodymainvide1">
      <div className="vidembed">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="background-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="boutvid">
        <h1>{mainh}</h1>
        <p>{abouth}</p>
        <div className="liforbout">
          <ul>
            {abouthp && (
              <li>
                <div className="tickmark">
                  <div className="imageraround"><img src={tick} alt="" /></div>
                  <p>{abouthp}</p>
                </div>
              </li>
            )}
            {abouthp1 && (
              <li>
                <div className="tickmark">
                  <div className="imageraround"><img src={tick} alt="" /></div>
                  <p>{abouthp1}</p>
                </div>
              </li>
            )}
            {abouthp2 && (
              <li>
                <div className="tickmark">
                  <div className="imageraround"><img src={tick} alt="" /></div>
                  <p>{abouthp2}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Modern() {
  return (
    <div>
      <div className="moderndiv">
        <div className="maincontentmodern">
          <p className='builtforai'>Built for AI</p>
          <p>Modernizing the Digital Backbone</p>
          <p>Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.</p>
        </div>
        <div className="videosecleftright">
          <Leftvideo
            video={video1}
            mainh='Advanced Monitoring'
            abouth='CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.'
            abouthp='Real-time performance metrics and predictive analytics'
            abouthp1='Automated alerts and intelligent incident response'
            abouthp2='Comprehensive reporting and trend analysis'
          />
          <Rightvideo
            video={video2}
            mainh='Network Management and Monitoring'
            abouth='Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.'
            abouthp='Real-time network performance monitoring and bandwidth optimization'
            abouthp1='Automated network security and threat detection'
            abouthp2='Advanced network diagnostics and troubleshooting tools'
          />
          <Leftvideo
            video={video3}
            mainh='Asset Management'
            abouth='Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.'
            abouthp='Automated inventory tracking and lifecycle management'
            abouthp1='Intelligent ticketing based on asset health and performance'
            abouthp2='Efficient resource allocation and optimization'
          />
          <Rightvideo
            video={video4}
            mainh='A Single Pane of Glass'
            abouth='A unified view across all of your BMS and EPMS systems, tailored to your needs.'
            abouthp='Comprehensive visibility across all of your colocation infrastructure'
            abouthp1='Customizable interface tailored to your specific operational requirements and priorities.'
            abouthp2='Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.'
          />
          <Leftvideo
            video={video5}
            mainh='Built-In Compliance'
            abouth='CentralAxis provides compliance as a service for data centers.'
            abouthp='Track data for EU, US, and global regulatary standards.'
            abouthp1='We guarantee compliance and handle every step between monitoring and reporting.'
          
          />
          <Rightvideo
            video={video6}
            mainh='Data Center Planning'
            abouth='Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.'
            abouthp='Model new architectures and see detailed implications on power and cooling needs.'
            abouthp1='Design unique specifications for your data center.'
            abouthp2='Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.'
          />
        </div>
      </div>
    </div>
  )
}

export default Modern
