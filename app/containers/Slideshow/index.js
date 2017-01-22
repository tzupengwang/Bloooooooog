import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import RecentPosts from 'components/RecentPosts';
import { focusList } from './actions';
import { ScrollController } from './utils';
import { selectFocused } from './selectors';

const { Component } = React;

const mapStateToProps = createStructuredSelector({
  focused: selectFocused(),
});

const mapDispatchToProps = () => ({
});

class SlideShow extends Component {
  constructor() {
    super();
    this.scrollController = new ScrollController();
  }

  componentDidMount() {
    this.scrollController.setContainer(document.body);
  }

  render() {
    const { focused, posts, postOnClicked, displayPost } = this.props;
    if (!posts) return false;

    return (
      <div ref={(dom) => this.scrollController.setScrollContainer(dom)}>
        <RecentPosts
          posts={posts}
          postOnClicked={postOnClicked}
          displayPost={displayPost}
          scrollController={this.scrollController}
        />
      </div>
    );
  }
}

SlideShow.propTypes = {
  posts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  focused: React.PropTypes.bool,
  // viewportWidth: React.PropTypes.number,
  // viewportHeight: React.PropTypes.number,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideShow);
