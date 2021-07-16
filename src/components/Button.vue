<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn id="button1" unelevated color="primary" size="sm" label="Primary" />
    <q-btn unelevated color="secondary" size="sm" label="Secondary" />
    <q-btn unelevated color="positive" size="sm" label="Positive" />
    <q-btn unelevated color="negative" size="sm" label="Negative" />
    <br><br>
    <q-btn outline color="primary" size="sm" label="Primary" />
    <q-btn outline color="secondary" size="sm" label="Secondary" />
    <q-btn outline color="positive" size="sm" label="Positive" />
    <q-btn outline color="negative" size="sm" label="Negative" />
    <br><br>
    <q-btn unelevated color="primary" size="md">
      <q-icon name="search" style="color: #ccc; font-size: 1.2em;" />Primary
    </q-btn>
    <q-btn unelevated color="secondary" size="md" label="Secondary" />
    <q-btn unelevated color="positive" size="md" label="Positive" />
    <q-btn unelevated color="negative" size="md" label="Negative" />
    <br><br>
    <q-btn outline color="primary" size="md" label="Primary" />
    <q-btn outline color="secondary" size="md" label="Secondary" />
    <q-btn outline color="positive" size="md" label="Positive" />
    <q-btn outline color="negative" size="md" label="Negative" />
    <br><br>
    <q-btn
      unelevated
      v-for="(size, i) in sizes" :key="`btn_size_sq_${size}`"
      :color="colors[i]"
      :size="size"
      :label="`${colors[i]}`"
    />
    <br><br>
    <!-- <q-btn unelevated color="primary" style="width: 170px">
      <div class="ellipsis">
        This is some very long text that is expected to be truncated
      </div>
    </q-btn> -->
    <q-btn-dropdown unelevated color="primary" label="Dropdown">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
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
        'info'
      ],
      onItemClick () {
        console.log('Clicked on an Item')
      }
    }
  }
}
</script>

<style scoped>

</style>
