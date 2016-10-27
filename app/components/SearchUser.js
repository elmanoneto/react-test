import React from 'react';
import GithubService from '../services/GithubService';

class SearchUser extends React.Component{

	constructor (props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit (e) {
		e.preventDefault();

		GithubService.getByUsername(this.refs.username.value).then((response) => {
			this.props.updateUser(response.data);
		});

		GithubService.getReposByUsername(this.refs.username.value).then((response) => {
			this.props.updateRepos(response.data);
		});
	}

	render () {
		return(
			<form onSubmit={this.handleSubmit}>
				<h1>Github Info</h1>
				<label>Username</label>
				<input type="text" ref="username" placeholder="Username" />
			</form>
		);
	}
}

SearchUser.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired
}

export default SearchUser;