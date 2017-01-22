import React from 'react';
import styled from 'styled-components';
const { PureComponent } = React;

const Container = styled.div`
  background: #fff;
  z-index: 5;
  color: #444;
  line-height: 1rem;
  text-align: left;
  position: absolute;
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 40px 40px;
  box-sizing: border-box;
`;
const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-family: "Comic Sans MS", cursive, sans-serif;
`;
const CodeContainer = styled.div`
  background: #EFF0F1;
  padding: 5px;
  margin-bottom: 20px;
  font-family: Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif;
  font-size: 14px;
`;

const Image = styled.img`
  max-width: 90%;
  margin: 10px auto;
  margin-bottom: 20px;
  display: block;
`;
const Space = styled.span`
  visibility: hidden;
`;

const Code = (props) => {
  return (
    <CodeContainer>
    {
      props.children.split('\n').map((line, i) => {
        let newline = line.split('\t');
        const len = newline.length;
        for (let i = len - 1; i > 0; i -= 1) {
          newline.splice(i, 0, <Space>----</Space>);
        }
        console.log(newline);
        return (
          <p key={'line'+i}>{newline}</p>
        );
      })
    }
    </CodeContainer>
  );
}

class Content extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Text>{g1}</Text>
        <Code>{c1}</Code>
        <Image src="https://c5.staticflickr.com/8/7046/27527805300_fc7c939125_b.jpg"/>
        <Text>{g2}</Text>
      </Container>
    );
  }
};

const c1 = '#include<stdio.h>\nint main() {\n \t printf(\"Hello world!\\n\");\n \t\t return 0;\n}';
const g1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet nisi quis nulla euismod mollis. Suspendisse quis turpis ac diam posuere pretium blandit eget massa. Donec sodales nisi a ante elementum, quis posuere quam aliquet. Cras posuere augue a nibh sodales, et lacinia nibh mollis. Suspendisse at finibus orci. Pellentesque vel elit bibendum, eleifend purus ut, molestie sem. Aliquam eget faucibus lacus. Praesent nec eros dignissim, aliquam mi vitae, efficitur enim. Praesent maximus cursus nunc nec malesuada. Vivamus at nisl lacus. Donec pretium magna ut orci efficitur scelerisque. Donec a rutrum leo. Sed in lectus vestibulum, faucibus lorem ac, fringilla metus.';
const g2 = 'Morbi non eros quis nibh euismod condimentum. Donec ultrices molestie enim. Sed nisl urna, laoreet at lobortis eget, laoreet non metus. Donec id lectus neque. Pellentesque posuere, lectus quis posuere viverra, lacus libero rutrum leo, at ullamcorper mauris mauris ac leo. Morbi in mauris orci. Morbi rhoncus enim tincidunt massa porttitor tempus. Aliquam fermentum, metus at scelerisque dignissim, nisl nunc congue ex, ac varius dui dui eleifend ipsum.';
export default Content;
