<template>
  <div class="btn-group">
    <button>Small</button>
    <button>Medium</button>
    <button>Large</button>
  </div>
</template>

<style lang="scss">
@import '../css/quasar.variables.scss';

.btn-group {
  border-start-end-radius: 4px;
}

.btn-group button {
  border: 1px solid $blue-2;
  background-color: white;
  color: $blue-2;
  padding: 8px 24px;
  cursor: pointer;
}

.btn-group button:not(:last-child) {
  border-right: none;
}

.btn-group button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.btn-group button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.btn-group button:hover {
  background-color: $blue-2;
  color: white;
}
</style>
