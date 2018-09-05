import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage // Since no path is provided, the router will use this as 404 route
      }
    ]
  }
]
