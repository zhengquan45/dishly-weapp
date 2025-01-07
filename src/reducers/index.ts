import { combineReducers } from 'redux'
import itemsReducer from './items'
import activeTabReducer from './active-tab'

const rootReducer = combineReducers({
    items: itemsReducer,
    activeTab: activeTabReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

