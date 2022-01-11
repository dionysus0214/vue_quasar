<template>
  <div class="q-pa-md">
    <s-help label="Help" title="This is title" :message="HelpList" />
  </div>
</template>

<script>
import SHelp from "../components/SHelp.vue";

const HelpList = [
  'Est posuere blandit fermentum mattis lobortis aliquam pellentesque',
  'Felis gravida augue aliquet tellus',
  'Ultrices enim at orci sit dui non nulla',
  'Interdum id scelerisque tellus cum mattis non integer faucibus purus',
  'Enim elementum mauris velit sit non fringilla risus et, eros',
  'Viverra tortor, sociis ut pulvinar gravida urna, et faucibus lobortis',
  'Risus, nisi, ullamcorper duis at iaculis.',
  'Leo erat arcu libero elementum faucibus tincidunt.',
];

export default {
  components: {
    SHelp,
  },
  data() {
    return {
      HelpList,
    };
  },
};
</script>
