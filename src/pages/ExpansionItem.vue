<template>
  <div class="q-pa-sm" style="max-width: 1920px">
    <s-help title="Lorem ipsum dolor sit amet">
      <ul>
        <li>Quisque lobortis libero ac mauris cursus, vel pulvinar erat blandit.</li>
        <li>Suspendisse quis sem eu sem interdum pulvinar sed at diam.</li>
        <li>Aenean et sapien tincidunt sapien, iaculis urna quis, placerat tortor ullamcorper cursus in eget dolor.</li>
        <li>Phasellus suscipit felis in sollicitudin dignissim.</li>
        <li>Fusce auctor mi sed ligula, eleifend est vel imperdiet interdum.</li>
        <li>Aliquam eu lectus quis diam scelerisque feugiat.</li>
      </ul>
    </s-help>
  </div>
  <div class="q-pa-sm" style="max-width: 1920px">
    <s-caution title="Aenean nec efficitur ex">
      <ul>
        <li>Aenean feugiat purus in, iaculis urna quiselit lobortis vestibulum.</li>
        <li>Pellentesque volutpat enim tincidunt orci ullamcorpe volutpat enim tincidunt orci ullamcorpe consequat lectus ultricies, accumsan mauris ac, gravida elit.</li>
        <li>Nam fermentum quam sed libero iaculis, nec volutpat erat feugiat.</li>
        <li>Nullam tincidunt velit vel sodales convallis.</li>
        <li>Duis volutpat enim tincidunt orci ullamcorper, sit amet vehicula libero venenatis.</li>
      </ul>
    </s-caution>
  </div>
</template>

<script>
import SHelp from '../components/SHelp.vue';
import SCaution from '../components/SCaution.vue';

export default {
  components: {
    SHelp,
    SCaution,
  },
};
</script>

<style>
ul {
  list-style-type: "-  ";
}
</style>
