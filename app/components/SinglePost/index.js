import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Content from './Content';

const { PureComponent } = React;

const Div = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
`;

class SinglePost extends PureComponent {
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    const { post } = this.props;
    if (!post) return false;

    return (
      <div>
        <Header post={post} />
        <Content content={post.content} />
      </div>
    );
  }
}

// SinglePost.propTypes = {
//   post: React.PropTypes.object,
//   // an object with the following functions
//   // subscribe: React.PropTypes.func,
//   // clear: React.PropTypes.func,
// };

export default SinglePost;
