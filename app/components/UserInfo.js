import React from 'react';

const UserInfo = (props) => {
	let userInfo = props.user ?
		(
			<div>
				<h2>{props.user.login}</h2>
				<p>{props.user.name}</p>
			</div>
		) : null;

		return userInfo;
}

UserInfo.propTypes = {
	user: React.PropTypes.object,
	repos: React.PropTypes.array
}	

export default UserInfo; 	