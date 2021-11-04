<template>
  <div class="speed-bar">
    <div class="speed-bar__bar" :style="barStyle"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'SpeedBar',
  props: {
    percent: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const barStyle = computed(() => ({
      '--percent': `${props.percent}%`
    }))
    return { barStyle }
  }
})
</script>

<style scoped lang="less">
.speed-bar {
  display: block;
  background-color: rgb(255, 20, 147);
  height: 15px;

  &__bar {
    display: block;
    background-color: rgb(144, 238, 144);
    height: 100%;
    width: var(--percent, 0%);
  }
}
</style>
