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
                  <!-- TODO: disable 처리 -->
                  <s-button class="q-py-none" label="+ 추가" color="black" flat @click="addTemplateItem" />
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
                    v-for="template in templates"
                    :key="template.id"
                    v-model="template.template_name"
                  />
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="manual">수동 목록</q-tab-panel>
            </q-tab-panels>
            <q-separator />
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

const TAP_VALUE_MAP = {
  auto: 0,
  manual: 1,
};

export default {
  components: {
    SSelect,
    SButton,
    EditableListItem,
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
      response.forEach(item => {
        templates.value.push(item);
      });
      fetchingTemplates.value = false;
    }

    async function addTemplateItem() {
      console.log();
    }

    return {
      selectedSite: ref(null),
      sites,
      fetchingSites,
      fetchSites,

      tab,
      templates,
      fetchingTemplates,
      onSiteChanged,
      addTemplateItem,
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
