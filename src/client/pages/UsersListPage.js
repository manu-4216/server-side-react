import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users List" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        Here are the users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const loadData = store => {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  // loadData: ({dispatch}) => dispatch(fetchUsers())  // Another way or writing this
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
}
