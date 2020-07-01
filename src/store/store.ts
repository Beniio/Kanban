import { createStore, Store, StoreEnhancer, StoreCreator, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

const middlewares = [reduxThunk];
const middleware: StoreEnhancer = applyMiddleware(...middlewares);

const devTool = (f: StoreCreator) => {
  return (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ : f;
};

export const store: Store<any> = middleware(devTool(createStore))(
   rootReducer as any,
   {} as any 
);