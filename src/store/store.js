import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isModalOpen: false,
  }),
  getters: {
    getModal: (state) => { return state.isModalOpen },
  },
  actions: {
    modalTrigger() {
      this.isModalOpen = !this.isModalOpen
    }
  },
})