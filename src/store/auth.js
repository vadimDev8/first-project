import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth'
import { getDatabase, ref, set } from "firebase/database";




export default {
    actions: {
        async login({commit}, details) {
            const {email, password} = details
            try {
                await signInWithEmailAndPassword(auth, email, password)
                // this.$router.push('/')
            } catch (e) {
                commit('setError', e)  
            }
        },
        async register({dispatch, commit}, details) {
            const {email, password, name} = details
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                const uid = await dispatch('getUid')
                await set(ref(getDatabase(), `/users/${uid}/info`), {
                    bill: 10000,
                    name
                })
                
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = auth.currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await signOut(auth)
            commit('clearInfo')
        }
    }
}

