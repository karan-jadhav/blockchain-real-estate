<template>
  <div>
    <b-container>
      <b-row class="mt-5">
        <b-col md="6" offset="3">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="seller-address"
              label="Seller Address"
              label-for="seller-address"
            >
              <b-form-input
                id="seller-address"
                v-model="form.seller"
                type="text"
                placeholder="Enter Seller Address"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="buyer-address"
              label="Buyers Address"
              label-for="buyer-address"
            >
              <b-form-input
                id="buyer-address"
                v-model="form.buyer"
                placeholder="Enter Buyer Address"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="property-address"
              label="Property Address"
              label-for="property-address"
            >
              <b-form-textarea
                id="property-address"
                v-model="form.property"
                placeholder="Enter Property Address"
                required
              ></b-form-textarea>
            </b-form-group>

            <b-form-group id="price" label="Price (₹)" label-for="price">
              <b-form-input
                id="price"
                v-model="form.price"
                placeholder="Enter Property Price"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
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
      form: {
        buyer: "",
        seller: "",
        property: "",
        price: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.buyer = "";
      this.form.seller = "";
      this.form.property = "";
      this.form.price = "";

      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
  },
};
</script>

<style scoped>
</style>

