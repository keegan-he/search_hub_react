import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'keegan-he',
      avatar_url: 'https://avatars1.githubusercontent.com/u/46201161?s=460&v=4',
      html_url: 'https://github.com/keegan-he'
    };
  }
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
