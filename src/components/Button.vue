<template>
  <q-btn
    no-caps
    unelevated
    padding="5px 12px"
    :ripple="false"
    color="positive"
    size="sm"
    label="Button"
  />
</template>

<script>
export default {
  setup () {
    return {
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
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
