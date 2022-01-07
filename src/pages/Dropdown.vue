<template>
<div>
  <s-dropdown
    label="엑셀 다운로드"
    :options="excelDownSelectOpts"
    @hendleClickOption="hendleClickOption"
    class="q-ma-md"
  />

  <s-dropdown
    label="엑셀 다운로드"
    :options="excelDownSelectOpts"
    disable
    @hendleClickOption="hendleClickOption"
    class="q-ma-md"
  />
</div>
</template>

<script>
import SDropdown from "../components/SDropdown.vue";

export default {
  components: {
    SDropdown,
  },
  setup() {
    function hendleClickOption(value) {
      console.log('aa', value);
    }
    return {
      excelDownSelectOpts: [
        { label: '검색결과 전체 엑셀 다운로드', value: 'all' },
        { label: '선택항목 엑셀 다운로드', value: 'select' },
      ],
      hendleClickOption,
    };
  },
};
</script>
