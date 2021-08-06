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
    title: 'Button',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/button'
  },
  {
    title: 'Checkbox',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/checkbox'
  },
  {
    title: 'Date Picker',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/datepicker'
  },
  {
    title: 'Dialog',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/dialog'
  },
  {
    title: 'File Picker',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/filePicker'
  },
  {
    title: 'Help/Caution',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/expansionItem'
  },
  {
    title: 'Input/Input Number/Textarea',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/input'
  },
  {
    title: 'Pagination',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/pagination'
  },
  {
    title: 'Radio',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/radio'
  },
  {
    title: 'Select',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/select'
  },
  {
    title: 'Tabs',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/tabs'
  },
  {
    title: 'Toggle',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/toggle'
  },
  {
    title: 'Tooltip',
    icon: 'code',
    link: 'http://10.0.2.21:8080/#/tooltip'
  },
  {
    title: 'Sample Page',
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
