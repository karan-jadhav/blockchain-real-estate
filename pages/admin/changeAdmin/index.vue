<template>
  <div>
    <b-container>
      <b-row class="justify-content-center mt-5">
        <b-col md="4" class="mt-5">
          <h1>Change Admin</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" offset="3" class="mt-4">
          <b-input-group class="mt-3">
            <b-form-input placeholder="Admin Address"></b-form-input>
            <b-input-group-append>
              <b-button variant="danger">Change</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "main",
};
</script>