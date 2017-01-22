import React from 'react';
import { connect } from 'react-redux';
import { requestPost } from './actions';
import SinglePost from 'components/SinglePost'
const { Component } = React;

const mapStateToProps = state => {
  return {
    post: state.get('single').get('post'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (url) => dispatch(requestPost(url)),
  };
}

class SinglePage extends Component {
  componentDidMount() {
    this.props.getPost(`/api/posts/2017-01-07-travelling-in-taiwan`);
  }

  render() {
    const { props } = this.props;
    return (
      <div>
        <SinglePost />
      </div>
    );
  }
}
// export default SinglePage;
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (SinglePage);
