import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">#{location.id}: {location.name}</h3>
        <address className="location__address">{location.address}</address>
        <h5 className="location__accessible">Accessible? {location.accessible}</h5>
        <h5 className="location__squarefeet">Store size: {location.squareFeet} square feet</h5>
    </section>
)