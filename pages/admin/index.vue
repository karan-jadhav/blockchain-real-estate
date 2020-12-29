<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-5">
        <b-col md="3">
          <b-button to="/admin/changeAdmin" pill variant="primary">
            Change Admin
          </b-button>
        </b-col>
        <b-col md="3">
          <b-button to="/admin/addProperty" pill variant="primary">
            Add Property
          </b-button>
          <b-button v-on:click="logout" pill variant="secondary">
            logout
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "main",
  middleware: "authenticated",

  data() {
    return {
      msg: "Admin Page",
    };
  },
  methods: {
    logout: function () {
      this.$portis.logout();
    },
  },
  mounted() {
    this.$web3.eth.getAccounts((error, accounts) => {
      console.log("logging accounts data");
      console.log(accounts);
    }),
      this.$portis.onLogin((walletAddress, email, reputation) => {
        console.log("logging login daata");
        console.log(walletAddress, email, reputation);
      }),
      this.$portis.onLogout(() => {
        console.log("user logged out");
      });
  },
};
</script>
