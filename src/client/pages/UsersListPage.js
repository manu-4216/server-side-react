import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render() {
    return (
      <div>
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
