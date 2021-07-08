import React from "react"
import { Route } from "react-router-dom"
import { KandyKorner } from "./KandyKorner"
import { LocationList} from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
// import { EmployeeCard } from "./employee/EmployeeCard"
// import { CustomerCard } from "./customer/CustomerCard"
// import { ProductProvider } from "./product/ProductProvider"
// import { ProductList } from "./product/ProductList"


// a Controller Component
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <KandyKorner />
            </Route>

            {/* Render the Product list when http://localhost:3000/Products 
            <ProductProvider>
                <Route exact path="/Products">
                    <ProductList />
                </Route>
            </ProductProvider> */}


            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route path="/locations">
                    <LocationList/>
                </Route>
            </LocationProvider>
            

            {/* Render the employee list when http://localhost:3000/employees 
            <CustomerProvider> 
                <Route path="/employees">
                    <EmployeeCard />
                </Route> 
            </CustomerProvider> */} 

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