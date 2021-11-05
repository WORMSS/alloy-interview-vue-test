<template>
  <div class="character">
    <LabelText class="character__routeId" label="ID" :text="routeId" />
    <LabelText class="character__name" v-if="name" label="Name" :text="name" />
    <LabelText class="character__power" v-if="power" label="Power" :text="power" />
    <LabelImage class="character__image" v-if="image" label="Image" :image="image" />
    <Trait class="character__trait" v-for="trait in traits" :key="JSON.stringify(trait)" :trait="trait" />
  </div>
</template>

<script lang="ts">
import LabelImage from '@/components/LabelImage.vue'
import LabelText from '@/components/LabelText.vue'
import Trait from '@/components/Trait.vue'
import type { CharacterModel } from '@/models/CharacterModel'
import type { TraitModel } from '@/models/TraitModel'
import type { StateModel } from '@/store/StateModel'
import { CharacterPowerCalculator } from '@/utils/CharacterPowerCalculator'
import { computed, ComputedRef, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Character',
  components: { LabelText, LabelImage, Trait },
  setup () {
    const route = useRoute()
    const store = useStore<StateModel>()
    const calculator = new CharacterPowerCalculator()

    const routeId: ComputedRef<string> = computed(() =>
      Array.isArray(route.params.id)
        ? route.params.id[0] || ''
        : route.params.id
    )
    const character: ComputedRef<CharacterModel | null> = computed(() =>
      store.state.characters.find(character => character.id === routeId.value) ?? null
    )
    const name: ComputedRef<string | null> = computed(() => character.value?.name || null)
    const image: ComputedRef<string | null> = computed(() => character.value?.image || null)
    const traits: ComputedRef<TraitModel[]> = computed(() => character.value?.traits || [])
    const power: ComputedRef<string | null> = computed(() =>
      // I would like to do parseFloat(calculator.calculate(character.value).toFixed(2)).toString()
      // to get rid of the horrible long decimal places.
      character.value ? calculator.calculate(character.value).toString() : null
    )

    return {
      routeId,
      name,
      power,
      image,
      traits
    }
  }
})
</script>
