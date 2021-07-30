import Home from "./components/Home";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = styled.div`
  width: 1440px;
  margin: auto;
`;

function App() {
  return (
    <Root className="App">
      <Router>
        {/* <Header>Hello header</Header> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
        </Switch>
      </Router>
    </Root>
  );
}

export default App;
