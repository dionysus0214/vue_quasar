<template>
  <div class="q-pa-sm" style="max-width: 1920px">
    <s-caution title="Caution">
      <ul>
        <li>
          Aenean feugiat purus in, iaculis urna quiselit lobortis vestibulum.
        </li>
        <li>
          Pellentesque volutpat enim tincidunt orci ullamcorpe volutpat enim
          tincidunt orci ullamcorpe consequat lectus.
        </li>
        <li>
          Nam fermentum quam sed libero iaculis, nec volutpat erat feugiat.
        </li>
        <li>
          Duis volutpat enim tincidunt orci ullamcorper, sit amet vehicula
          libero venenatis.
        </li>
      </ul>
    </s-caution>
  </div>
</template>

<script>
import SCaution from "../components/SCaution.vue";

export default {
  components: {
    SCaution,
  },
};
</script>

<style lang="sass">
.s-caution
  ul
    list-style-type: "-  "
    li
      line-height: 24px
</style>
