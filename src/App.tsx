import { Header } from "./components/Header";
import { Posts } from "./pages/Posts";

import { Wrapper } from "./App.style";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Posts />
    </Wrapper>
  );
};

export default App;
