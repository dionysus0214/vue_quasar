<template>
  <div class="container">
    <label class="switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
}

.switch {
  display: inline-block;
  width: 42px;
  height: 24px;
  position: relative;
}

.switch input {
  display:none;
}

.slider {
  background-color: #888888;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  content: "";
  width: 20px;
  height: 20px;
  bottom: 2px;
  left: 2px;
  position: absolute;
  transition: .4s;
}

input:checked + .slider {
  background-color: #0075FF;
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
