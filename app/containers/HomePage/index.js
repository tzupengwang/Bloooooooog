import React from 'react';
import { connect } from 'react-redux';
const { Component } = React;
import RecentPosts from '../../components/RecentPosts';
import { requestRecent } from './actions';

const mapStateToProps = state => {
  return {
    posts: state.get('home').get('posts'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecentPosts: () => dispatch(requestRecent()),
  };
}

class HomePage extends Component {
  componentDidMount() {
    this.props.getRecentPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <RecentPosts posts={posts} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (HomePage);
