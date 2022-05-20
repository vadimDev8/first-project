import { getDatabase, ref, set, onValue } from "firebase/database";
export default {
    state: {
        info: {},
        rep: 'просто'
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid')
                const info = await set(ref(getDatabase(), `/users/${uid}/info`))
                const info2 = onValue(info, (snapshot) => {
                    const data = snapshot.val()
                    updateStarCount(postElement, data);
                })
                commit('setInfo', info2)
            } catch (e) {

            }
        }
    },
    getters: {
        info: s => s.info,
        rep: s => s.rep
    }
}