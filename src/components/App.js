import React, { useState, useEffect } from 'react'
// useState?... -> setState...hook returns an array of two values
//                      1.) state variable
//                      2.) function to update the state variable
// useEffect?.. -> handle side effects -> ie things out of our control
// 👉 STEP 2 - React Router imports (Route, Link and Switch)

// Components used for the different routes
import { Link, Route, Switch } from "react-router-dom";
// Link sends the URL to a specified location
// Route listens to the URL and depending on what it matches displays content
// Switch matches the first Route it finds, and ONLY the first...
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to="/">Home</Link>
          <Link to="/items-list">Shop</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route path={"/items-list/:itemID"}>
          <Item items={stock} />
        </Route>
        <Route path="/items-list">
          <ItemsList items={stock} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/items-list" render={() => {
          return <ItemsList items={stock} />
        }} />
        <Route path={"/items-list/:itemID"} render={props => {
          <Item items={stock} match={props.match} location={props.location} />
        }} /> */}
      </Switch>
    </div>
  )
}