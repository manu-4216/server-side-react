import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  render() {
    return (
      <div>
        <h3>Protectedd list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }
}

const mapStateToProps = ({ admins }) => ({ admins })

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
