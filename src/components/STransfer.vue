<template>
  <draggable
    class="transfer"
    group="item"
    item-key="name"
    ghost-class="ghost"
    :force-fallback="true"
    :scroll-sensitivity="100"
    :list="selectableItem"
    :disabled="templateId === 0"
    @start="drag = true"
    @change="transferItem"
  >
    <template #item="{ element }">
      <div
        :class="
          selectedItem.find(() => element.name.includes('옵션매칭_'))
            ? 'text-indigo-7'
            : 'text-grey-2'
        "
      >
        <div
          class="box"
          :class="
            clickedLeftItem.find((e) => e.name === element.name) ? 'active' : ''
          "
          @click="clickSelectableItem(element)"
        >
          <div>{{ element.name }}</div>
        </div>
      </div>
    </template>
    <template #header>
      <div class="transfer-title">
        <span>선택 가능 항목</span>
        <q-icon
          class="cursor-pointer"
          color="grey-1"
          :name="descendingOrder ? arrowBottomIcon : arrowTopIcon"
          size="16px"
          @click="textAlign(true)"
        />
      </div>
    </template>
  </draggable>
  <q-card-actions class="transfer-button">
    <s-button
      color="grey-4"
      outline
      :icon="rightDoubleIcon"
      :class="templateId != 0 ? '' : 'cursor-not-allowed'"
      @click="moveToRightAll"
    />
    <s-button
      color="grey-4"
      outline
      :icon="rightSingleIcon"
      :class="templateId != 0 ? '' : 'cursor-not-allowed'"
      @click="moveToRight"
    />
    <s-button
      color="grey-4"
      outline
      :icon="leftSingleIcon"
      :class="templateId != 0 ? '' : 'cursor-not-allowed'"
      @click="moveToLeft"
    />
    <s-button
      color="grey-4"
      outline
      :icon="leftDoubleIcon"
      :class="templateId != 0 ? '' : 'cursor-not-allowed'"
      @click="moveToLeftAll"
    />
  </q-card-actions>
  <draggable
    class="transfer"
    group="item"
    item-key="name"
    ghost-class="ghost"
    :list="selectedItem"
    :disabled="templateId === 0"
    :force-fallback="true"
    :scroll-sensitivity="100"
    @start="drag = true"
    @change="transferItem"
  >
    <template #item="{ element }">
      <div
        :class="
          selectedItem.find(() => element.name.includes('옵션매칭_'))
            ? 'text-indigo-7'
            : 'text-grey-2'
        "
      >
        <div
          class="box handle"
          :class="
            clickedRightItem.find((e) => e.name === element.name)
              ? 'active'
              : ''
          "
          @click="clickSelectedItem(element)"
        >
          <div>{{ element.name }}</div>
          <q-icon
            :color="
              selectedItem.find(() => element.name.includes('상품이미지'))
                ? 'transparent'
                : 'grey-8'
            "
            :name="hamburgerIcon"
            size="24px"
          />
        </div>
      </div>
    </template>
    <template #header>
      <div class="transfer-title">
        <span>선택된 항목</span>
      </div>
    </template>
  </draggable>
</template>

<script>
import { ref, watch } from "vue";
import { Notify } from "quasar";
import draggable from "vuedraggable";
import { api } from "../../../../boot/axios.js";
import {
  infoOutlineIcon,
  arrowBottomIcon,
  arrowTopIcon,
  hamburgerIcon,
  rightSingleIcon,
  rightDoubleIcon,
  leftSingleIcon,
  leftDoubleIcon,
} from "../../../../assets/icons.js";

export default {
  name: "excelFormatSetting",
  components: {
    draggable,
  },
  props: {
    urlQuery: String,
    tempId: Number,
    listLoading: Boolean,
  },
  setup(props, { emit }) {
    const selectableItem = ref([]);
    const selectedItem = ref([]);
    const drag = ref(false);
    const templateId = ref(props.tempId);
    const menuId = ref(props.urlQuery);
    const descendingOrder = ref(false);

    function ascending(arr) {
      arr.sort((a, b) => {
        let aS = a.name.toString();
        let bS = b.name.toString();
        if (aS === bS) {
          return 0;
        }

        aS = aS.replace(/^([^\d]*)/, "");
        const aT = RegExp.$1;
        bS = bS.replace(/^([^\d]*)/, "");
        const bT = RegExp.$1;
        if (aT && bT && aT !== bT) {
          return aT > bT ? 1 : -1;
        }
        const sort = new Array([aT, bT]);
        sort.sort();
        return sort[0] === aT ? -1 : 1;
      });
    }

    function decending(arr) {
      arr.sort((b, a) => {
        let aS = a.name.toString();
        let bS = b.name.toString();
        if (aS === bS) {
          return 0;
        }

        aS = aS.replace(/^([^\d]*)/, "");
        const aT = RegExp.$1;
        bS = bS.replace(/^([^\d]*)/, "");
        const bT = RegExp.$1;
        if (aT && bT && aT !== bT) {
          return aT > bT ? 1 : -1;
        }
        if (aS && bS && aS !== bS) {
          return Number(aS) > Number(bS) ? 1 : -1;
        }
        const sort = new Array([aT, bT]);
        sort.sort();
        return sort[0] === aT ? -1 : 1;
      });
    }

    async function textAlign(toggle = false) {
      if (
        (toggle && descendingOrder.value) ||
        (!toggle && !descendingOrder.value)
      ) {
        descendingOrder.value = false;
        ascending(selectableItem.value);
      } else {
        descendingOrder.value = true;
        decending(selectableItem.value);
      }
    }

    const tempLoading = ref(props.listLoading);
    async function displayFormat() {
      tempLoading.value = true;
      const excelFormat = await api.get(
        `fileDownloadTemplates/${templateId.value}/columns`,
        {
          params: {
            per_page: 1000,
            menu_name: menuId.value,
          },
        }
      );
      selectableItem.value = excelFormat.data.data.filter((e) => e.sort_no < 0);
      selectedItem.value = excelFormat.data.data
        .filter((e) => e.sort_no > 0)
        .sort((a, b) => Number(a.sort_no) - Number(b.sort_no));
      tempLoading.value = false;
      textAlign();
    }

    watch(
      () => props.tempId,
      (newVal) => {
        templateId.value = newVal;
        displayFormat();
      }
    );

    watch(
      () => props.urlQuery,
      (newVal) => {
        menuId.value = newVal;
        displayFormat();
      }
    );

    watch(
      () => selectedItem,
      (newVal) => {
        if (drag.value) {
          emit("isChanged");
        }
        const prdImage = newVal.value.find((e) => e.name === "상품이미지");
        if (prdImage && selectedItem.value.indexOf(prdImage) !== 0) {
          selectedItem.value.splice(selectedItem.value.indexOf(prdImage), 1);
          selectedItem.value.unshift(prdImage);
        }
        const optionMatchings = newVal.value.filter((e) =>
          e.name.includes("옵션매칭_")
        );
        if (optionMatchings.length > 0) {
          const notOptionMatchingLength = selectedItem.value.filter(
            (e) => !e.name.includes("옵션매칭_")
          ).length;
          const optionMatchingPosition = selectedItem.value.indexOf(
            selectedItem.value.find((e) => e.name.includes("옵션매칭_"))
          );
          if (drag.value && notOptionMatchingLength > optionMatchingPosition) {
            Notify.create({
              classes: "toast-notify",
              color: "yellow-6",
              textColor: "black",
              message:
                "옵션매칭 항목은 옵션매칭 항목 내에서만 순서를 조정할 수 있습니다.",
              position: "bottom",
              timeout: 1000,
            });
            optionMatchings.forEach((e) => {
              selectedItem.value.splice(selectedItem.value.indexOf(e), 1);
              selectedItem.value.push(e);
            });
          }
        }
        drag.value = false;
      },
      {
        deep: true,
      }
    );

    watch(
      () => selectableItem.value,
      () => {
        if (drag.value) {
          drag.value = false;
        }
      }
    );

    async function transferItem() {
      textAlign();
    }

    const clickedLeftItem = ref([]);
    const clickedRightItem = ref([]);

    async function clickSelectableItem(item) {
      if (clickedLeftItem.value.includes(item)) {
        clickedLeftItem.value.splice(clickedLeftItem.value.indexOf(item), 1);
      } else {
        clickedLeftItem.value.push(item);
      }
    }

    async function clickSelectedItem(item) {
      if (clickedRightItem.value.includes(item)) {
        clickedRightItem.value.splice(clickedRightItem.value.indexOf(item), 1);
      } else {
        clickedRightItem.value.push(item);
      }
    }

    async function clickOutside() {
      clickedLeftItem.value = [];
      clickedRightItem.value = [];
    }

    async function moveToRightAll() {
      emit("isChanged");
      if (templateId.value !== 0) {
        selectableItem.value.forEach((e) => {
          selectedItem.value.push(e);
        });
        selectableItem.value = [];
      }
    }

    async function moveToRight() {
      if (clickedLeftItem.value.length) {
        emit("isChanged");
      }
      if (templateId.value !== 0) {
        clickedLeftItem.value.forEach((e) => {
          selectableItem.value.splice(selectableItem.value.indexOf(e), 1);
          selectedItem.value.push(e);
        });
        clickedLeftItem.value = [];
      }
    }

    async function moveToLeft() {
      if (clickedRightItem.value.length) {
        emit("isChanged");
      }
      if (templateId.value !== 0) {
        clickedRightItem.value.forEach((e) => {
          selectedItem.value.splice(selectedItem.value.indexOf(e), 1);
          selectableItem.value.push(e);
        });
        textAlign();
        clickedRightItem.value = [];
      }
    }

    async function moveToLeftAll() {
      emit("isChanged");
      if (templateId.value !== 0) {
        selectedItem.value.forEach((e) => {
          selectableItem.value.push(e);
        });
        textAlign();
        selectedItem.value = [];
      }
    }

    return {
      drag,
      selectableItem,
      selectedItem,
      descendingOrder,
      clickedLeftItem,
      clickedRightItem,
      templateId,
      tempLoading,

      infoOutlineIcon,
      arrowBottomIcon,
      arrowTopIcon,
      hamburgerIcon,
      rightSingleIcon,
      rightDoubleIcon,
      leftSingleIcon,
      leftDoubleIcon,

      transferItem,
      clickSelectableItem,
      clickSelectedItem,
      textAlign,
      ascending,
      moveToRightAll,
      moveToRight,
      moveToLeft,
      moveToLeftAll,
      clickOutside,
    };
  },
};
</script>

<style></style>
