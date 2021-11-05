import { TraitModelGuards } from '@/guards/TraitModelGuards'
import type { CharacterModel } from '@/models/CharacterModel'
import type { SpeedTraitModel } from '@/models/SpeedTraitModel'
import type { StrengthTraitModel } from '@/models/StrengthTraitModel'

export class CharacterPowerCalculator {
  public calculate (character: CharacterModel): number {
    // 1 so it doesn't drive the calculation to zero if not available
    let strength = 1
    let speed = 1

    // O(n)
    for (const trait of character.traits) {
      if (TraitModelGuards.isStengthTrait(trait)) {
        strength = this.powerFromStrengthTrait(trait)
        continue
      }
      if (TraitModelGuards.isSpeedTrait(trait)) {
        speed = this.powerFromSpeedTrait(trait)
        continue
      }
    }

    const power: number = ((speed * strength) / 176400) * 9000

    return power
  }

  private powerFromStrengthTrait (trait: StrengthTraitModel): number {
    switch (trait.value) {
      case 'weak': return 7
      case 'average': return 69
      case 'super strong': return 420
      default: return 1
    }
  }

  private powerFromSpeedTrait (trait: SpeedTraitModel): number {
    switch (trait.value) {
      case 'tortoise': return 7
      case 'goat': return 21
      case 'speed of sound': return 69
      case 'speed of light': return 420
      default: return 1
    }
  }
}
