<template>
  <q-btn
    no-caps
    no-wrap
    dense
    unelevated
    style="padding: 5px 12px"
    :ripple="false"
    color="positive"
  />
</template>

<script>
export default {
  setup () {
    return {
      colors: [
        'primary',
        'secondary',
        'positive',
        'negative',
        'info',
        'warning'
      ]
    }
  }
}
</script>

<style>
/* button:hover {
    outline: none !important;
    border-color: #006AC1;
    box-shadow: 0 0 4px #006AC1;
} */
</style>
