<template>
  <div class="trait-speed">
    <p class="trait-speed__label">Speed</p>
    <SpeedBar class="trait-speed__speed" :percent="speed" />
  </div>
</template>

<script lang="ts">
import SpeedBar from './SpeedBar.vue'
import type { SpeedTraitModel } from '@/models/SpeedTraitModel'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TraitSpeed',
  components: { SpeedBar },
  props: {
    trait: {
      type: Object as PropType<SpeedTraitModel>,
      required: true
    }
  },
  setup (props) {
    const speed = computed(() => {
      switch (props.trait.value) {
        case 'tortoise': return 10
        case 'goat': return 30
        case 'speed of sound': return 60
        case 'speed of light': return 100
        default: return 0
      }
    })

    return {
      speed
    }
  }
})
</script>

<style scoped lang="less">
.trait-speed {
  display: block;
  margin-bottom: 20px;

  &__label {
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  &__speed {
    display: block;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
}
</style>
