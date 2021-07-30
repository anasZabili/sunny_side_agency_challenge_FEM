import Home from "./components/Home";
import styled from "styled-components";

const Root = styled.div`
  width: 1440px;
  margin: auto;
`;

function App() {
  return (
    <Root className="App">
      {/* <Header>Hello header</Header> */}
      <Home />
    </Root>
  );
}

export default App;
