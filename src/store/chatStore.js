import {writable} from 'svelte/store';
import {ACTIVE_COMPONENT} from './storeEnums.js';

export const chatStore = writable ([]);
export const userStore = writable ({userName: 'user'});
export const appProperties = writable ({
  current: ACTIVE_COMPONENT.USERNAME_MODAL,
});
