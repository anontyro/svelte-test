import {writable} from 'svelte/store';
import {ACTIVE_COMPONENT} from './storeEnums.js';

export const Store = writable ({
  chat: [],
  user: {userName: 'user', userId: 0},
  userList: [],
  properties: {
    current: ACTIVE_COMPONENT.USERNAME_MODAL,
  },
});
