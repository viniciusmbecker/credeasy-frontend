import Vuex from 'vuex';
import http from '@/http';

const state = {
    token: null,
    usuario: {}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO (state, {token, usuario }) {
        state.token = token
        state.usuario = usuario
    },
    DESLOGAR_USUARIO (state) {
        state.token = null
        state.usuario = {}
    }
}

const actions = {
    fazLogin ({ commit }, usuario) {
        return new Promise( (resolve, reject) => {
            http.post('api/login', usuario)
                .then(resposta => {
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: resposta.data.token,
                        usuario: resposta.data.user
                    })
                    resolve(resposta.data)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})