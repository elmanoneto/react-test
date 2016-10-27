import React from 'react';

class UserRepos extends React.Component{

	constructor (props) {
		super(props);
	}

	componentWillReceiveProps (props) {
		this.setState({count: props.repos.length});
	}

	render (props) {
		let userRepos = this.props.repos.map(function (repo, key) {
			return (
				<div key={key}>
					<h3>{repo.name}</h3>
					<p>{repo.language}</p>
				</div>
			)
		});

		return (
			userRepos.length > 0 ?
			<div>
				<h3>Total {userRepos.length}</h3>
				{userRepos}
			</div> : null
		)
	}
};

export default UserRepos;