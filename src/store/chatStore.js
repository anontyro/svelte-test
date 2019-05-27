import {writable} from 'svelte/store';

export const chatStore = writable ([]);
export const userStore = writable ({userName: 'user'});
