// 管理直接更新states的方法
export default {
  SET_LOADING: (state, loading) => {
    loading ? ++state.loading : --state.loading
  },
  CLEAN_LOADING: (state) => {
    state.loading = 0
  }
}
