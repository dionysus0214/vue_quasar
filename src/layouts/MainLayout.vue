<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Sellmate Component v.2
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Component List
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Input/Input Number/Textarea',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/input'
  },
  {
    title: 'Select',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/select'
  },
  {
    title: 'Button',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/button'
  },
  {
    title: 'Radio',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/radio'
  },
  {
    title: 'Checkbox',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/checkbox'
  },
  {
    title: 'Expansion Item',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/expansionItem'
  },
  {
    title: 'Sample',
    icon: 'add',
    link: 'http://10.0.2.21:8080/#/sample'
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
