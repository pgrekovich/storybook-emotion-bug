import React from 'react';
import styled from '@emotion/styled'
import logo from './react.svg';

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`



import './Home.css';

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Home">
          <Button>Styled Button</Button>
      </div>
    );
  }
}

export default Home;
