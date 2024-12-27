import { combineReducers } from 'redux';
import { reducer as favouritesReducer } from './reducer';

const rootReducer = combineReducers({
    favourites: favouritesReducer,
});

export default rootReducer;

// Optional: Export RootState type for use in TypeScript components
export type RootState = ReturnType<typeof rootReducer>;
