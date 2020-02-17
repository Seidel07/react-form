import React, { Component } from 'react';
import User from './User';

class List extends Component {
  render() {
    return (
    	<div className="component" style={{float: "right"}}>
	      <table>
	          <thead>
	            <tr>
	              <th>Name</th>
	              <th>Country</th>
	              <th>Birthday</th>
	            </tr>
	          </thead>
	          <tbody>
		          {this.props.users.map((user,index) => 
		            <User 
		              key={index}
		              user={user}
		            />
		          )}
	          </tbody>
	        </table>
	    </div>
    );
  }
}

export default List;
