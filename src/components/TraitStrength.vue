<template>
  <div class="trait-strength">
    <p class="trait-strength__label">Strength</p>
    <p class="trait-strength__strength">{{ strength }}</p>
  </div>
</template>

<script lang="ts">
import type { StrengthTraitModel } from '@/models/StrengthTraitModel'
import { computed, ComputedRef, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'TraitStrength',
  props: {
    trait: {
      type: Object as PropType<StrengthTraitModel>,
      required: true
    }
  },
  setup (props) {
    const strength: ComputedRef<string> = computed(() => {
      switch (props.trait.value) {
        case 'weak': return '💪'
        case 'average': return '💪💪'
        case 'super strong': return '💪💪💪'
        default: return ''
      }
    })

    return {
      strength
    }
  }
})
</script>

<style scoped lang="less">
.trait-strength {
  display: block;
  margin-bottom: 20px;

  &__label {
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  &__strength {
    display: block;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
}
</style>
