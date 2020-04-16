import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            count: 1,
            name: 'sungin'
        }
    }
})

export default store;