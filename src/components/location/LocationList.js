import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getlocation()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
//   upon page load, call getlocation once to populate location array
  useEffect(() => {
    console.log("LocationList: useEffect - getlocation")
    getLocations()
  }, [])


  return (
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
}
// re the return statement, the key and location arguments look like HTML attributes 
// here, but they actually become properties on an object that gets passed as an argument.
/* equivalent vanilla js:
const properties = {
    key: location.id,
    location: location
    location(properties)
} */