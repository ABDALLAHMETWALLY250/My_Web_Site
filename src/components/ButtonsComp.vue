<template>
  <div class="w-100 my-4">
    <div class="buttons">
      <button class="button">
        <slot name="btn-left"></slot>
      </button>

      <button class="button-two">
        <slot name="btn-right"></slot>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  padding: 3px 3px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #0d6efd;
  transition: all 1000ms;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #0d6efd;
  box-shadow: 4px 5px 17px -4px #0d6efd;
}

button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #0d6efd;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}

.button-two {
  padding: 3px 3px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fff;
  transition: all 1000ms;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #0d6efd;
  background: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-two:hover {
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  background: #fff !important;
  color: #0d6efd !important;
}

.button-two::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background: #fff !important;
  color: #0d6efd !important;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

.button-two:hover::before {
  width: 250%;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}
</style>
