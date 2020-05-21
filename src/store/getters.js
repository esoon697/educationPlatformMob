export default {
  loading (state) {
    if (state.loading > 0) {
      return true
    } else {
      return false
    }
  }
}
