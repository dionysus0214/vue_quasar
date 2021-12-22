<template>
  <q-page>
    <div class="popup-page-content-container column q-col-gutter-md">
      <div class="row">
        <q-banner rounded class="bg-negative text-white col" />
      </div>
      <div class="row q-gutter-md">
        <div class="col">
          <q-card bordered flat>
            <q-card-section>
              <div class="text-h6">사이트별 양식 목록</div>
            </q-card-section>
            <q-card-section>
              <s-select
                v-model="selectedSite"
                :options="sites"
                option-label="siteName"
                option-value="siteCode"
                :loading="fetchingSites"
                @update:model-value="onSiteChanged"
              />
            </q-card-section>
            <q-tabs v-model="tab">
              <q-tab name="auto">자동</q-tab>
              <q-tab name="manual">수동</q-tab>
            </q-tabs>
            <q-tab-panels v-model="tab">
              <q-tab-panel name="auto">
                <div class="text-right">
                  <s-button class="q-py-none" label="+ 추가" color="black" flat @click="addTemplateItem" :disable="hasNewItem" />
                </div>
                <q-list>
                  <template v-if="fetchingTemplates">
                    <q-item>
                      <q-item-section><q-skeleton type="rect" /></q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section><q-skeleton type="rect" /></q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section><q-skeleton type="rect" /></q-item-section>
                    </q-item>
                  </template>
                  <q-item v-else-if="!templates.length">
                    <q-item-section>저장된 양식이 없습니다.</q-item-section>
                  </q-item>
                  <editable-list-item
                    v-else
                    v-model="template.template_name"
                    v-for="(template, index) in templates"
                    :key="template.id"
                    :focused="selectedItem === template.id"
                    :default="template.default"
                    :new="template.new_item"
                    @clicked="selectedItem = template.id"
                    @create="createTemplate(template)"
                    @uptate="updateTemplate(template)"
                    @delete="deleteTemplate(template, index)"
                  />
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="manual">수동 목록</q-tab-panel>
            </q-tab-panels>
            <q-separator />
          </q-card>
        </div>
        <div class="detail-column">
          <q-card bordered flat>
            <q-tabs>
              <q-tab v-for="category in orderDataArray" :key="category.value" :label="category.label" @click="onTabSelected(category)" />
            </q-tabs>
            <q-scroll-area style="height: 730px;">
              <template v-for="category in orderDataArray" :key="category.label">
                <h3 class="text-h6" :id="category.value">{{ category.label }}
                  <small>{{ category.aComments }}</small>
                </h3>
                <q-list bordered>
                  <q-item v-for="item in category.sub" :key="item.value">
                    <q-item-section>
                      <q-item-label>{{ item.subTitle }}</q-item-label>
                      <q-item-label caption>{{ item.subCaption }}</q-item-label>
                      <editable-chip-input v-model="templateData[item.value]" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>
            </q-scroll-area>
          </q-card>
        </div>
        <div class="guide-column">
          <q-card bordered flat>
            <q-card-section>
              <div class="text-h6">가이드</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref, onBeforeMount, computed } from 'vue';
import { scroll } from 'quasar';
import { siteList, templateList, orderDataArray } from '../constants/data';

import SSelect from '../components/SSelect.vue';
import SButton from '../components/SButton.vue';
import EditableListItem from '../components/EditableListItem.vue';
import EditableChipInput from '../components/EditableChipInput.vue';

const TAP_VALUE_MAP = {
  auto: 0,
  manual: 1,
};

export default {
  components: {
    SSelect,
    SButton,
    EditableListItem,
    EditableChipInput,
  },
  setup() {
    const sites = ref([]);
    const fetchingSites = ref(false);
    async function fetchSites() {
      fetchSites.value = true;
      const response = siteList;
      sites.value = response;
      fetchSites.value = false;
    }

    onBeforeMount(() => {
      fetchSites();
    });

    const tab = ref('auto');
    const templates = ref([]);
    const fetchingTemplates = ref(false);
    async function onSiteChanged(selectedSite) {
      fetchingTemplates.value = true;
      const response = templateList;
      response.forEach((item) => {
        item.default = (item.template_name === '기본');
        item.new_item = false;
        templates.value.push(item);
      });
      fetchingTemplates.value = false;
    }

    const hasNewItem = computed(() => templates.value.reduce((prev, current) => prev || current.new_item, false));
    async function addTemplateItem() {
      templates.value.push({
        id: null,
        template_name: '',
        default: false,
        new_item: true,
      });
    }

    function createTemplate(template) {
      addTemplateItem();
    }
    function updateTemplate(template) {
      console.log('템플릿 수정');
    }
    function deleteTemplate(template, index) {
      templates.value.splice(index, 1);
    }

    const { getScrollTarget, setVerticalScrollPosition } = scroll;
    function onTabSelected(category) {
      const headerElement = document.getElementById(category.value);
      const target = getScrollTarget(headerElement);
      const offset = headerElement.offsetTop;
      const duration = 250;
      setVerticalScrollPosition(target, offset, duration);
    }

    const templateData = ref({});
    orderDataArray.forEach((category) => {
      category.sub.forEach((item) => {
        templateData.value[item.value] = [item.value];
      });
    });

    return {
      selectedSite: ref(null),
      selectedItem: ref(null),
      sites,
      fetchingSites,
      fetchSites,

      tab,
      templates,
      fetchingTemplates,
      onSiteChanged,

      hasNewItem,
      addTemplateItem,
      createTemplate,
      updateTemplate,
      deleteTemplate,

      orderDataArray,
      templateData,
      onTabSelected,
    };
  },
};
</script>

<style>
.detail-column {
  width: 500px;
}
.guide-column {
  width: 400px;
}
</style>
