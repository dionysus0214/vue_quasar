<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 297px">
      <q-input outlined v-model="text" placeholder="Type Something" hint="Default" :dense="dense" />

      <q-input outlined v-model.number="number" type="number" placeholder="Type Number" hint="Number" :dense="dense" />

      <q-input outlined v-model="text" label="Label" placeholder="Type Something" hint="Label" :dense="dense" />

      <q-input outlined filled v-model="text" placeholder="Type Something" hint="Disable" disable :dense="dense" />

      <q-input outlined v-model="text" placeholder="Type Something" hint="Readonly" readonly :dense="dense" />

      <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'" placeholder="Type Something" hint="Invisible" :dense="dense">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="text"
        type="textarea"
        placeholder="Type Something"
        hint="Textarea"
      />

      <q-input
        outlined
        v-model="text"
        type="textarea"
        placeholder="Type Something"
        hint="Max Length"
        counter maxlength="100"
      />

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      number: ref(),
      password: ref(''),
      isPwd: ref(true),
      dense: ref(true)
    }
  }
}
</script>
