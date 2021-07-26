import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import AppWrapper from './AppWrapper'


const PrivateRoute = ({ page, ...rest }) => {
const isAuthenticated = useSelector((state) => {return state.user.isAuthenticated})

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <AppWrapper page={page} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}

export default PrivateRoute
