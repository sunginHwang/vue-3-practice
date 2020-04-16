import { PERSON } from '../mutation-types';

const state = {
    name: '',
    age: 0,
}

const getters = {
    personInfo: (state) => {
        return `이름 : ${state.name}, 나이 : ${state.age}`;
    }
}

const actions = {
    changeName({ commit }, name){
        commit(PERSON.SET_NAME, name);
    },
}

const mutations = {
     [PERSON.SET_NAME](state, name) {
        state.name = name;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}