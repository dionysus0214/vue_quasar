<template>
  <q-list bordered separator>
    <q-item>
      <q-item-section>
        <q-item-label>{{ content }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default ({
  props: {
    content: null,
  },
});
</script>
