export default {
    computed() {
        if (!this.$store.state.isLoggedin) {
            this.$web3.eth.getAccounts((error, accounts) => {
                this.$store.commit("set_logging", true);
                this.$store.commit("set_addredd", accounts[0]);
            });
        }
    }
};