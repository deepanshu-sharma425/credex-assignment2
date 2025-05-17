import React, { useState, useEffect } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
  
    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.hamburgerlater') && 
                !event.target.closest('.hamburger-icon')) {
                setIsMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);
    
    return (
        <div>
            <div className="navbarmain">
                <div className="logonavbar">
                    <img src={logo} alt="" />
                    <p>CentralAxis</p>
                </div>
                
           
                <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <div className={`hamburgerlater ${isMenuOpen ? 'active' : ''}`}>
                    <div 
                        className={`infomoreoptions ${activeDropdown === 0 ? 'active' : ''}`}
                        onClick={() => toggleDropdown(0)}
                    >
                        <div className="menu-title">
                            Data Center Infrastructure Management
                            <span className="arrow">▼</span>
                        </div>
                        <ul className="dropdown-menu">
                            <li>Monitoring Devices</li>
                            <li>Assets Tracking</li>
                            <li>Network Management</li>
                            <li>Change Management</li>
                            <li>Colocation Management</li>
                            <li>Data Center Planner</li>
                            <li>Firmware Management</li>
                            <li>IP Adress Management</li>
                            <li>Customer Portal</li>
                            <li>Custom Insights</li>
                            <li>Custom Data Center Solutions</li>
                        </ul>
                    </div>

                    <div 
                        className={`infomoreoptions ${activeDropdown === 1 ? 'active' : ''}`}
                        onClick={() => toggleDropdown(1)}
                    >
                        <div className="menu-title">
                            Intelligence Solutions
                            <span className="arrow">▼</span>
                        </div>
                        <ul className="dropdown-menu">
                            <li>Digital Twins</li>
                            <li>Smart Power Mapping</li>
                            <li>Predictive Failure and Alerting</li>
                            <li>Smart Control Systems</li>
                            <li>Automated Discovery</li>
                        </ul>
                    </div>
                    
                    <div 
                        className={`infomoreoptions ${activeDropdown === 2 ? 'active' : ''}`}
                        onClick={() => toggleDropdown(2)}
                    >
                        <div className="menu-title">
                            Data Center Compliance
                            <span className="arrow">▼</span>
                        </div>
                        <ul className="dropdown-menu">
                            <li>DCOI Compliance</li>
                            <li>(EU) 2023/1791</li>
                            <li>EN 50600</li>
                            <li>LEED Certification</li>
                            <li>ISO/IEC 30134-2</li>
                            <li>(EPA) ENERGY STAR</li>
                            <li>European Commission Joint Research Centre(JRC)</li>
                        </ul>
                    </div>
                    
                    <div 
                        className={`infomoreoptions ${activeDropdown === 3 ? 'active' : ''}`}
                        onClick={() => toggleDropdown(3)}
                    >
                        <div className="menu-title">
                            Sustainability Blog
                            <span className="arrow">▼</span>
                        </div>
                        <ul className="dropdown-menu">
                            <li>Energy Efficiency</li>
                            <li>Stranded Energy Map</li>
                            <li>Enviromental Product Declaration</li>
                            <li>Renevable Integration</li>
                            <li>Power Resource Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar