import { Main } from "./components/Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/CombineReducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
