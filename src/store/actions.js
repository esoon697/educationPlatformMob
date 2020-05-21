// actions 异步操作
export default {
  SetLoding ({ commit }, boolean) {
    commit('SET_LOADING', boolean)
  },
  CLEANLOADING ({commit}) {
    commit('CLEAN_LOADING')
  }
}
