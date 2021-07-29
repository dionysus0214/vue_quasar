<template>
  <q-btn
    no-caps
    no-wrap
    dense
    unelevated
    style="padding: 5px 12px"
    :ripple="false"
    color="dark"
    class="s-button"
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
.s-button {
  border-radius: 4px;
}
</style>
