export const state = () => ({
  theme: "light"
})

export const getters = {
  getTheme(state) {
    return state.theme
  },
  isDarkTheme(state) {
    return state.theme === "dark"
  }
}

export const mutations = {
  toggleTheme(state) {
    if(state.theme === 'light') {
      state.theme = 'dark'
    } else  {
      state.theme = 'light'
    }
  }
}

export const actions = {
  toggleTheme(context,) {
    context.commit('toggleTheme')
  }
}
