export const state = () => ({
    isLoggedin: false,
    ethaddress: "admineth"
})

export const mutations = {
    set_logging: (state, payload) => {
        state.isLoggedin = payload
    },
    set_addredd: (state, addr) => {
        state.ethaddress = addr
    }
}