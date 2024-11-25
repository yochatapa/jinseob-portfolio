import type { Module } from 'vuex'; // 타입 전용 import

// 모달 상태 인터페이스 정의
export interface ModalState {
    isModalOpen: boolean;
    modalComponent: string | null;
}

// RootState 인터페이스 정의 (필요 시 확장)
export interface RootState {
  // 다른 전역 상태를 추가하려면 여기 정의
}

const modalModule: Module<ModalState, RootState> = {
    namespaced: true,
    state: () => ({
        isModalOpen: false,
        modalComponent: null
    }),
    mutations: {
        openModal(state, component: string) {
            state.isModalOpen = true;
            state.modalComponent = component;
        },
        closeModal(state) {
            state.isModalOpen = false;
            state.modalComponent = null;
        }
    },
    actions: {
        openModal({ commit }, component: string) {
            commit('openModal', component);
        },
        closeModal({ commit }) {
            commit('closeModal');
        }
    },
    getters: {
        isModalOpen: (state) => state.isModalOpen,
        modalComponent: (state) => state.modalComponent
    }
};

export default modalModule;
