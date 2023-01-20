import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    isModalOpen: false,
    showNavbar: true,
    contents: [
      { id: 1, name: "O'zbekcha sintezator", img: "content.jpg" },
      { id: 2, name: "@ttsuzbot Telegram boti", img: "content-2.jpg" },
      { id: 3, name: "Ovozli tarjimon", img: "content-3.jpg" },
      { id: 4, name: "Qo‘ng‘iroqlarni buyurtma qilish", img: "content-4.jpg" },
    ],
    contents2: [
      { id: 5, name: "UzNutq Sintezator", img: "content-5.jpg" },
      { id: 6, name: "TTS.uz API", img: "content-6.jpg" },
      { id: 7, name: "Shamchiroq", img: "content-7.jpg" },
      { id: 8, name: "Web TTSx", img: "content-8.jpg" },
    ],
    choosen: { id: 1, name: "O'zbekcha sintezator", img: "content.jpg" },
  }),
  getters: {
    getModal: (state) => {
      return state.isModalOpen;
    },
  },
  actions: {
    modalTrigger() {
      this.isModalOpen = !this.isModalOpen;
    },
    itemDetails(item) {
      if(item <= 4) {
        this.choosen = this.contents.filter(t => t.id === item)[0];
      } else {
        this.choosen = this.contents2.filter(t => t.id === item)[0];
      }
    },
    navbarTrigger(bool) {
      this.showNavbar = bool
    }
  },
});
