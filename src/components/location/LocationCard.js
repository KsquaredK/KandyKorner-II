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
// examples of logic for "accessible y/n" from auth
/* 
then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("startswithq_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                } 
 =============================               
 
                then(user => user.length ? user[0] : false)               
*/