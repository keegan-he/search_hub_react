import React, { Component } from 'react';

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'keegan-he',
      avatar_ural:
        'https://avatars1.githubusercontent.com/u/46201161?s=460&v=4',
      html_url: 'https://github.com/keegan-he'
    };
  }
  render() {
    return <div>UserItem</div>;
  }
}

export default UserItem;
