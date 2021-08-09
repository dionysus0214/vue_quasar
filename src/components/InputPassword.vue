<template>
  <q-input
    outlined
    :type="isPwd ? 'password' : 'text'"
    placeholder="Type Password"
    dense
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      isPwd: ref(true)
    }
  }
}
</script>
