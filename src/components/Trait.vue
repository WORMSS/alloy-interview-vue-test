<template>
  <TraitSpeed v-if="isSpeed" :trait="trait" />
  <TraitStrength v-else-if="isStrength" :trait="trait" />
  <template v-else>
    <div class="trait">
      {{ trait.type }}
    </div>
  </template>
</template>

<script lang="ts">
import TraitSpeed from './TraitSpeed.vue'
import TraitStrength from './TraitStrength.vue'
import type { TraitModel } from '@/models/TraitModel'
import { TraitTypeModel } from '@/models/TraitTypeModel'
import { computed, ComputedRef, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Trait',
  components: { TraitSpeed, TraitStrength },
  props: {
    trait: {
      type: Object as PropType<TraitModel>,
      required: true
    }
  },
  setup (props) {
    const isSpeed: ComputedRef<boolean> = computed(() => props.trait.type === TraitTypeModel.Speed)
    const isStrength: ComputedRef<boolean> = computed(() => props.trait.type === TraitTypeModel.Strength)
    return {
      isSpeed,
      isStrength
    }
  }
})
</script>

<style lang="less">
.trait {
  display: block;
}
</style>
