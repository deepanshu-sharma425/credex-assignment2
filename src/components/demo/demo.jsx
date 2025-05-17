import React from 'react'
import './demo.css'
function LNM({ ques, ans }) {
    return (
        <>
            <div className="main11"> <div className="ques1">{ques}</div>
                <div className="ans1">{ans}</div></div>



        </>
    )
}
function Demo() {
    return (
        <>
            <div className="nenene">
                <div className="demoshow">
                    <h1>Book a Demo</h1>
                    <p>See how CentralAxis can revolutionize your data center operations</p>
                    <button>Schedule Now</button>

                </div>

                <div className="FAQreal">
                    <div className="frequently">
                        <button>FAQs</button>
                        <h1>Frequently asked questions</h1>
                        <p>Find answers to common questions about our solutions.</p>
                    </div>
                    <div className="allthsediv"> <div className="arethese">
                        <LNM ques='Are these solutions applicable to me if I am operating a co-location?' ans='Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.' />
                        <LNM ques='How do you ensure data privacy and security?' ans='We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.' />
                        <LNM ques='How does pricing work?' ans='Depending on your requirements, we offer flexible pricing models.' />


                    </div>
                        <div className="arethese">
                            <LNM ques='Do you provide ongoing support and maintenance for your solutions?' ans='Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.' />
                            <LNM ques='How do I get started?' ans="Set up a demo and we'll guide you through our offerings and start a trial! " />



                        </div></div>



                </div>
            </div>

        </>
    )
}

export default Demo