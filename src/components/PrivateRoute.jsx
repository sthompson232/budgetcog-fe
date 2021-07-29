import{ useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import AppWrapper from './AppWrapper'
import { axiosGet } from '../utils/axios'
import { updateProfile } from '../redux/actions/user'


const PrivateRoute = ({ page, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    axiosGet('user-profile/').then(res => dispatch(updateProfile(res.data)))
  }, [dispatch])

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
