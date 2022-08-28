
import React from "react"
import {Route} from "react-router-dom"
import { RoutesList } from "../data/RoutesList";
import { Home } from './Home';

export const RouteGenerator = () => {
    return (
            // RoutesList.map((r) => {
                // return (
                    // <Route
                        // exact
                        // path={ r.Path }
                        // Component={ r.Component } />
                // )
            // })     
     <Route path="/" element={<Home />} /> 
    )
}
