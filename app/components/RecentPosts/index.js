import React from 'react';
import PostPreview from './PostPreview';

const RecentPosts = ({ posts }) => (
  <div>
    Recent Posts
    {
      posts.map(post => <PostPreview post={post} key={post.postId} />)
    }
  </div>
);

// RecentPosts.propTypes = {
//   posts: React.PropTypes.array
// };

export default RecentPosts;
