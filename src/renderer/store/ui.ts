import { MutationTree } from "vuex";

export const state = () => ({
  showModal: true
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  toggleModal(state, data) {
    let prevState = state.showModal;
    state.showModal = !prevState;
  }
};
