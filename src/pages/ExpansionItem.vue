<template>
  <div class="q-pa-sm" style="max-width: 1018px">
    <s-help title="test">
      <ul>
        <li>test</li>
        <li>adfasdfas</li>
        <li>asdfasfd</li>
        <li>asdfa</li>
        <li>asdfasd</li>
      </ul>
    </s-help>
  </div>
  <div class="q-pa-sm" style="max-width: 1018px">
    <s-caution />
  </div>
</template>

<script>
import SHelp from '../components/Help.vue'
import SCaution from '../components/Caution.vue'

export default {
  components: { SHelp, SCaution }
}
</script>
