export const state = () =>  ({
  title: '',
  name: '',
  first_name: '',
  onm: '',
  specialities: [],
})

export const getters = {
  getData: (state) => {
    return state
  }
}

export const mutations = {
  modifyData: (state, data) => {
    Object.assign(state, data)
  },
  addSpeciality: (state, data) => {
    state.specialities.push(data)
  }
}

export const actions = {

}