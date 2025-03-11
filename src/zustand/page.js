import { create } from "zustand";
const useMyStore = create(() => {
  return {
    currentSort: "price",
    tartibi: false,
  };
});
export default useMyStore;
