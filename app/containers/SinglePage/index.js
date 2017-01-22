import React from 'react';
import { connect } from 'react-redux';
import { requestRecent } from './actions';
import SinglePost from 'components/SinglePost'
const { Component } = React;

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

class SinglePage extends Component {
  componentDidMount() {
    // this.props.getRecentPosts();
  }

  render() {
    // const { posts } = this.props;
    return (
      <div>
        <SinglePost />
      </div>
    );
  }
}
export default SinglePage;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// ) (SinglePage);
