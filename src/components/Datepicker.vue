<template>
  <q-input outlined dense v-model="date" mask="date" :rules="['date']" placeholder="yyyy/mm/dd">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date v-model="date" color="positive" minimal no-unset>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      date: ref('')
    }
  }
}
</script>
