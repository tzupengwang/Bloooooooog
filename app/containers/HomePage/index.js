import React from 'react';
import { connect } from 'react-redux';
import Slideshow from 'containers/Slideshow';
import { requestRecent, broadcastHidden } from './actions';

const { Component } = React;

const mapStateToProps = (state) => ({
  posts: state.get('home').get('posts'),
  displayPost: state.get('home').get('displayPost'),
});

const mapDispatchToProps = (dispatch) => ({
  getRecentPosts: () => dispatch(requestRecent()),
  postOnClicked: (from) => dispatch(broadcastHidden(from)),
});

class HomePage extends Component {
  componentDidMount() {
    this.props.getRecentPosts();
  }

  render() {
    const { posts, postOnClicked, displayPost } = this.props;
    return (
      <div>
        <Slideshow
          posts={posts}
          postOnClicked={postOnClicked}
          displayPost={displayPost}
        />
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
