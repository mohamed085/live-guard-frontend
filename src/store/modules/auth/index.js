import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

export default {
    state() {
        return {
            token: null,
            name: null,
            photo: null,
            isAdmin: null,
        }
    },
    mutations,
    getters,
    actions
}