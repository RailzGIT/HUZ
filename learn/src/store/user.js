import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: sessionStorage.getItem('authUser') || '',
    avatar: sessionStorage.getItem('avatar') || '', // можна зробити вибір із декількох
  }),
  actions: {
    login(username, avatar) {
      this.username = username;
      this.avatar = avatar;
      sessionStorage.setItem('authUser', username);
      sessionStorage.setItem('avatar', avatar);
    },
    logout() {
      this.username = '';
      this.avatar = '';
      sessionStorage.removeItem('authUser');
      sessionStorage.removeItem('avatar');
    },
  },
});
