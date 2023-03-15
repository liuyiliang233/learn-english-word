import { createModel } from '@rematch/core';
import { root } from 'cheerio/lib/static';
import { getRandomStr } from '../utils/random';
import { dispatch, RootModel } from './index';
const defaultAppState = {
  total: 0,
  userName: '游客' + getRandomStr('xyz-xyz'),
};
type APP_STATE = typeof defaultAppState;
export const app = createModel<RootModel>()({
  name: 'app',
  state: defaultAppState,
  reducers: {
    SET_STATE(state: APP_STATE, payload: Partial<APP_STATE>) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    // something(_payload: number, rootStore) {
    //   dispatch.count.increment(payload);
    // },
    increase(_, rootStore) {
      dispatch.app.SET_STATE({ total: rootStore.app.total + 1 });
    },
    reduce(_, rootStore) {
      dispatch.app.SET_STATE({ total: rootStore.app.total - 1 });
    },
  }),
});
