import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default WrappedComponent => {
  class RequireAuth extends Component {
    render() {
      const { auth, ...others } = this.props

      switch (auth) {
        case false:
          // Redirect won't work on the server, so we need to use the StaticRouter context
          return <Redirect to="/" />
        case null:
          return <div>Loading...</div>
        default:
          return <WrappedComponent {...others} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(RequireAuth)
}
