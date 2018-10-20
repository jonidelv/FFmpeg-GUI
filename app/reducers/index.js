// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import videosReducer from './videos_reducer';

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, videos: videosReducer })
  );
}
