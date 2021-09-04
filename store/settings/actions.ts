export default {
  drawerAction ( context: any, payload: any ) {
      context.commit('drawerCommit', !context.state.drawer)
  }
}