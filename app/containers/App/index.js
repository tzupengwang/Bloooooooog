import React from 'react';
import styled from 'styled-components';
// import { resizeWindow } from './actions';
import './utils';

const Wrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
`;

// componentDidMount() {
  // this.props.resizeWindow(document.body.offsetWidth, document.body.offsetHeight);
  // window.addEventListener('optimizedResize', () => {
    // this.props.resizeWindow(document.body.offsetWidth, document.body.offsetHeight);
  // });
// }
const App = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      {React.Children.toArray(children)}
    </Wrapper>
  );
};

// const mapStateToProps = () => ({
// });

// const mapDispatchToProps = (dispatch) => ({
  // resizeWindow: (width, height) => dispatch(resizeWindow(width, height)),
// });

App.propTypes = {
  // resizeWindow: React.PropTypes.func,
  children: React.PropTypes.node,
};

// export default connect(
  // mapStateToProps,
  // mapDispatchToProps
// )(App);
export default App;
