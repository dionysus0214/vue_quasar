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

        <q-toolbar-title> Sellmate Component v.3 </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8"> Component List </q-item-label>

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
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Button",
    icon: "code",
    link: "/button",
  },
  {
    title: "Caution",
    icon: "code",
    link: "/caution",
  },
  {
    title: "Checkbox",
    icon: "code",
    link: "/checkbox",
  },
  {
    title: "Chip",
    icon: "code",
    link: "/chip",
  },
  {
    title: "Date Picker",
    icon: "code",
    link: "/datePicker",
  },
  {
    title: "Dialog",
    icon: "code",
    link: "/dialog",
  },
  {
    title: "Dropdown",
    icon: "code",
    link: "/dropdown",
  },
  {
    title: "File Picker",
    icon: "code",
    link: "/filePicker",
  },
  {
    title: "Help",
    icon: "code",
    link: "/help",
  },
  {
    title: "Input",
    icon: "code",
    link: "/input",
  },
  {
    title: "Pagination",
    icon: "code",
    link: "/pagination",
  },
  {
    title: "Radio",
    icon: "code",
    link: "/radio",
  },
  {
    title: "Select",
    icon: "code",
    link: "/select",
  },
  {
    title: "Table",
    icon: "code",
    link: "/table",
  },
  {
    title: "Tabs",
    icon: "code",
    link: "/tabs",
  },
  {
    title: "Toggle/Button Toggle",
    icon: "code",
    link: "/toggle",
  },
  {
    title: "Tooltip",
    icon: "code",
    link: "/tooltip",
  },
  {
    title: "Project",
    icon: "add",
    link: "/project",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
