import meService from '@/services/me'

export const login = ({ commit}, data) => {
  commit('login', data)
}

export const logout = ({ commit }) => {
  commit('logout')
}

export const getMyData = ({ commit }) => {
  meService.getMyData().then(data => {
    commit('updateMyData', data)
  })
}

export const addTeam = ({commit}, team) => {
  commit('addTeam', team)
}

export const addBoard = ({commit}, board) => {
  commit('addBoard', board)
}

export const token = ({commit}, token) => {
  commit('token', token)
}

