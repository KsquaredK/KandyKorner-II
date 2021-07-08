import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
// import { EmployeeCard } from "./employee/EmployeeCard"
// import { CustomerCard } from "./customer/CustomerCard"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"


// a Controller Component
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <ProductProvider>
                <Route exact path="/">
                    <Home />
                    <ProductList />
                </Route>
            </ProductProvider>

            {/* Render the Product list when http://localhost:3000/Products */}
            <ProductProvider>
                <Route exact path="/Products">
                    <ProductList />
                </Route>
            </ProductProvider>


            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
            

            {/* Render the employee list when http://localhost:3000/employees 
            <EmployeeProvider> 
                <Route path="/employees">
                    <EmployeeCard />
                </Route> 
            </EmployeeProvider> */} 

            {/* Render the customer list when http://localhost:3000/customers 
            <CustomerProvider> 
                <Route path="/customers">
                    <CustomerCard />
                </Route> 
            </CustomerProvider> 
             */}
        </>
    )
}