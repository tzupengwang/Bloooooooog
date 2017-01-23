import React from 'react';
import { connect } from 'react-redux';
import { requestPost } from './actions';
import SinglePost from 'components/SinglePost'
const { Component } = React;

const mapStateToProps = (state) => ({
  post: state.get('single').get('post'),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (url) => dispatch(requestPost(url)),
  };
}

class SinglePage extends Component {
  componentDidMount() {
    // TODO: wrong url
    console.log(this.props.location);
    console.log(this.props.params);
    this.props.getPost(`/api/post/${this.props.location.pathname}`);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <SinglePost post={post}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePage);
