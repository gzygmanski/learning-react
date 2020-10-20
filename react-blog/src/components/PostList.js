import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="teal large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderPosts()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers
})(PostList);