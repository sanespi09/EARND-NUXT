import { MutationTree } from "vuex";

export const state = () => ({
  showModal: false
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  toggleModal(state, data) {
    const prevState = state.showModal;
    state.showModal = !prevState;
  }
};
