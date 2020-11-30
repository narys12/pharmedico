export const state = () =>  ({
  profil: '', 
  region: '',
  commune: '',
  logement: '',
  mails: [],
  phones: [],
  presentation: '',
  facebook: '',
  twitter: '',
  linkedin: ''
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
  addPhone: (state, data) => {
    state.phones.push(data)
  },
  addMail: (state, data) => {
    state.mails.push(data)
  }
}

export const actions = {

}