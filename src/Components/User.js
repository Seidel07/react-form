import React, { Component } from 'react';

class User extends Component {
  render() {
    const {user} = this.props;
    return (
		<tr>
			<td>{user.name + " " + user.surname}</td>
			<td>{user.country}</td>
			<td>{user.birthday}</td>
		</tr>
    );
  }
}

export default User;
