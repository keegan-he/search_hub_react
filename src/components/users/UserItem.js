import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'keegan-he',
    avatar_url: 'https://avatars1.githubusercontent.com/u/46201161?s=460&v=4',
    html_url: 'https://github.com/keegan-he'
  };

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
