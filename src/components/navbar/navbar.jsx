import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { ChevronDoubleDownIcon } from '@heroicons/react/16/solid';


function Navbar() {
    function ArrowText() {
        return (
            <div className="text-with-arrow">

                <svg
                    className="chevron-down"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M7 10l5 5 5-5z" />
                </svg>
            </div>
        );
    }
    return (
        <div>
            <div className="navbarmain">
                <div className="logonavbar">
                    <img src={logo} alt="" />
                    <p>CentralAxis</p>
                </div>
                <div className="hamburgerlater">
                    <div className="infomoreoptions">
                        Data Center Infrastructure Management
                        <span className="arrow">▼</span>
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

                    <div className="infomoreoptions">Intelligence Solutions
                        <span className="arrow">▼</span>
                        <ul className="dropdown-menu">
                            <li>Digital Twins</li>
                            <li>Smart Power Mapping</li>
                            <li>Predictive Failure and Alerting</li>
                            <li>Smart Control Systems</li>
                            <li>Automated Discovery</li>

                        </ul>
                    </div>
                    <div className="infomoreoptions">Data Center Compliance
                        <span className="arrow">▼</span>
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
                    <div className="infomoreoptions">Sustainability Blog
                        <span className="arrow">▼</span>
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