import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const rootReducer = combineReducers({
  some: someReducer,
  another: anotherReducer
});

const storeEnhancer = getEnhancer();

const store = createStore(
    rootReducer, 
    storeEnhancer
);

function getEnhancer() { 
    if (process.env.NODE_ENV !== "production") {
      const logger = require("redux-logger").default;
      const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      return composeEnhancers(applyMiddleware(logger));
    }
    return compose();
}
