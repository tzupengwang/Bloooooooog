import React from 'react';
import styled from 'styled-components';
import PostPreview from './PostPreview';

const { PureComponent } = React;

const CenterColumn = styled.ul`
  line-height: 100vh;
  position: fixed;
  display: block;
  width: 100%;
  margin-left: 16.66667vw;
  height: 100%;
  white-space: nowrap;
`;

const Container = styled.li`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 66.666667%;
  max-width: 1280px;
`;
// margin: 0 5.55556% 0 0;

const List = styled.ul`
  position: absolute;
  display: block;
  list-style: none;
  width: 100%;
`;

class RecentPosts extends PureComponent {
  constructor() {
    super();
    this.scrollItems = [];
    this.setScrollItem = (idx, item) => {
      this.scrollItems[idx] = item;
    };
  }

  componentDidMount() {
    this.scrollItems.length = this.props.posts.length;
    this.props.scrollController.subscribe(this.scrollItems);
  }

  componentDidUpdate() {
    this.scrollItems.length = this.props.posts.length;
    this.props.scrollController.subscribe(this.scrollItems);
  }

  componentWillUnmount() {
    this.props.scrollController.clear();
  }

  render() {
    const { posts } = this.props;
    if (!posts) return false;

    const [firstPost, ...otherPosts] = posts;
    return (
      <CenterColumn>
        <Container>
          <div ref={(elem) => this.setScrollItem(0, elem)} >
            <PostPreview post={firstPost} />
          </div>
          <List>
            {
              otherPosts.map((post, idx) => (
                <div
                  ref={(elem) => this.setScrollItem(idx + 1, elem)}
                  key={post.postId}
                >
                  <PostPreview post={post} />
                </div>
              ))
            }
          </List>
        </Container>
      </CenterColumn>
    );
  }
}

RecentPosts.propTypes = {
  posts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  scrollController: React.PropTypes.object,
  // an object with the following functions
  // subscribe: React.PropTypes.func,
  // clear: React.PropTypes.func,
};

export default RecentPosts;
