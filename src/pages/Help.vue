<template>
  <div class="q-pa-md">
    <s-help :title="titles" label="Help" style="margin-left: 20px">
      <ul>
        <li v-for="(i, j) in HelpList" :key="j">{{ i }}</li>
      </ul>
    </s-help>
  </div>
</template>

<script>
const HelpList = [
  "Est posuere blandit fermentum mattis lobortis aliquam pellentesque",
  "Felis gravida augue aliquet tellus",
  "Ultrices enim at orci sit dui non nulla",
  "Interdum id scelerisque tellus cum mattis non integer faucibus purus",
  "Enim elementum mauris velit sit non fringilla risus et, eros",
  "Viverra tortor, sociis ut pulvinar gravida urna, et faucibus lobortis",
];
export default {
  data() {
    return {
      titles: "Help-Title",
      HelpList,
    };
  },
};
</script>

<style lang="sass" scoped>
ul
  padding: 0
  margin: 0
  list-style: inside
</style>
