import React from 'react'
import './Services.css'
import serviceData from './serviceData'

function Services(){

    const serviceComponent = serviceData.map((item)=>{
        return (<div className="service" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>)
    })

    return(
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                {serviceComponent}
            </div> 
        </section>
    )
}

export default Services