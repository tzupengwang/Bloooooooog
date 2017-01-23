import React from 'react';
import styled from 'styled-components';
const { PureComponent } = React;
// import './header.css';
const Preview = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: url('https://c5.staticflickr.com/2/1568/24504300316_3c9084c9bc_b.jpg') center no-repeat;
  background: url('http://standardfilms.tv/wp-content/uploads/2016/08/opera-1280x720-c-default.jpg') center no-repeat;
  background: url('https://c5.staticflickr.com/8/7046/27527805300_fc7c939125_b.jpg') center no-repeat;
  background-position: center;
  background-size: cover;
  transition: width 1s;
`;

const TextWrapper = styled.div`
  z-index: 5;
  color: #fff;
  line-height: 1rem;
  text-align: left;
  position: absolute;
  top: 40%;
  left: 50%;
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  -webkit-transform: translate(-50%, -50%) scale(0.9);
  -ms-transform: translate(-50%, -50%) scale(0.9);
  transform: translate(-50%, -50%) scale(0.9);
`;

const Title = styled.h1`
  font-size: 6rem;
  line-height: 7rem;
  white-space: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: Roboto;
`;


class Header extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const props = this.props;
    if (!props.post) return false;
    const { title, author, date, category, postId } = props.post;

    return (
      <Preview>
        <TextWrapper>
          <p>{`${author} | ${date}`}</p>
          <p>{category}</p>
          <Title>{title}</Title>
        </TextWrapper>
      </Preview>
    );
  }
};

// PostPreview.propTypes = {
//   post: React.PropTypes.oneOfType([
//     React.PropTypes.object,
//     React.PropTypes.bool,
//   ]),
// };

export default Header;
