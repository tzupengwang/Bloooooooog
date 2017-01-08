import React from 'react';
import { connect } from 'react-redux';
import Slideshow from 'containers/Slideshow';
import { requestRecent } from './actions';

const { Component } = React;

const mapStateToProps = (state) => ({
  posts: state.get('home').get('posts'),
});

const mapDispatchToProps = (dispatch) => ({
  getRecentPosts: () => dispatch(requestRecent()),
});

class HomePage extends Component {
  componentDidMount() {
    this.props.getRecentPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Slideshow posts={posts} />
      </div>
    );
  }
}

HomePage.propTypes = {
  posts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  getRecentPosts: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
