<template>
  <q-btn
    no-caps
    no-wrap
    dense
    unelevated
    style="padding: 5px 12px"
    :ripple="false"
    color="dark"
  />
</template>

<script>
export default {
  setup () {
    return {
      colors: [
        'primary',
        'secondary',
        'dark',
        'positive',
        'negative',
        'info',
        'warning'
      ]
    }
  }
}
</script>
