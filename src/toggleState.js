// store.js
import { reactive } from "vue";

export const toggleState = reactive({
  toggle: false,
  show() {
    this.toggle = !this.toggle

  },
});
