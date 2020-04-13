export default {
  login (state, data) {
    state.user.token = data.data.token
    state.user.authenticated = true
    state.user.name = data.data.nickname

    localStorage.setItem("token", data.data.token)
    localStorage.setItem("authenticated", true)
    localStorage.setItem("name", data.data.nickname)

  },
  updateMyData (state, data) {
    state.user.name = data.user.name
    state.user.authenticated = true
    state.teams = data.teams
    state.boards = data.boards
  },
  logout (state) {
    state.user.name = ''
    state.user.authenticated = false
    state.teams = []
    state.boards = []

    localStorage.setItem("token", "")
    localStorage.setItem("authenticated", false)
    localStorage.setItem("name", "")
  },
  addTeam (state, team) {
    state.teams.push(team)
  },
  addBoard (state, board) {
    state.boards.push(board)
  },
  token (state, token) {
    state.token = token;
  }
}
