import React from 'react'
// We'll need quite a few imports from react-router-dom
import { NavLink, useRouteMatch, useParams, Route } from "react-router-dom";

import ItemDetails from './ItemDetails'

export default function Item(props) {
  // We get ALL items through props. We'll use the URL to find out which item is the one to show.
  const { items } = props

  if (!items.length) return "ITEMS COMING SOON I PROOOOOOMISE!!!";

  const { url, path } = useRouteMatch();
  console.log(url, path);
  const { itemID } = useParams();

  // 👉 STEP 7 - We need to pull item from items, using a parameter in the URL (:itemID)
  // Beware! The ids are integers, whereas URL parameters are strings.
  // Beware! The JSX is expecting 'item' to exist instantly!
  // we use this hook to grab they dynamic parts of the path (:itemID).

  const item = items.find(item => item.id === parseInt(itemID));
  /**
   * ===   :::: -> strict equality :: 1 === "1" FALSE
   * ==    :::: -> loose  equality :: 1 == "1"  TRUE
   */
  // I WILL NEVER, EVER, EVER, EVER USE DOUBLE EQUALS == NO! BAD!

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className='item-sub-nav'>
        {/* 👉 STEP 8 - Here go the NavLinks to `<current url>/shipping` and `<current url>/description` */}
        <NavLink to={`${url}/description`}>Description</NavLink>
        <NavLink to={`${url}/shipping`}>Shipping</NavLink>
      </nav>

      {/* 👉 STEP 9 - Here go the Routes for `<current path>/shipping` and `<current path>/description` */}
      {/* These Routes should render <ItemDetails /> */}

      {/* 👉 STEP 10 - Shorten paths and urls with `useRouteMatch` hook */}
      <Route path={`${path}/shipping`}>
        <ItemDetails text={item.shipping} />
      </Route>
      <Route path={`${path}/description`}>
        <ItemDetails text={item.description} />
      </Route>
    </div>
  )
}
