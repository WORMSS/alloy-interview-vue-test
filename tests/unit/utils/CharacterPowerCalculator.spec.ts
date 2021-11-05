import { CharacterModel } from '@/models/CharacterModel'
import { SpeedTraitModel } from '@/models/SpeedTraitModel'
import { StrengthTraitModel } from '@/models/StrengthTraitModel'
import { TraitTypeModel } from '@/models/TraitTypeModel'
import { CharacterPowerCalculator } from '@/utils/CharacterPowerCalculator'

describe(CharacterPowerCalculator.name, () => {
  it('should calculate power of character with traits', () => {
    // (21 * 69) / 176400) * 9000
    const expectedValue = 0.05102040816326531

    const strengthTrait: StrengthTraitModel = {
      type: TraitTypeModel.Strength,
      value: 'average'
    }
    const speedTrait: SpeedTraitModel = {
      type: TraitTypeModel.Speed,
      value: 'goat'
    }
    const character: CharacterModel = {
      id: 'doctor',
      image: '/doctor.png',
      name: 'The Doctor',
      traits: [strengthTrait, speedTrait]
    }

    const calculator = new CharacterPowerCalculator()

    const power = calculator.calculate(character)

    expect(power).toBe(expectedValue)
  })
  it('should calculate power of character with no traits', () => {
    // (1 * 1) / 176400) * 9000
    const expectedValue = 73.92857142857143

    const character: CharacterModel = {
      id: 'weeb',
      image: '/weeb.png',
      name: 'Weeaboo',
      traits: []
    }

    const calculator = new CharacterPowerCalculator()

    const power = calculator.calculate(character)

    expect(power).toBe(expectedValue)
  })
  it('should calculate power of character with only 1 trait', () => {
    // (420) / 176400) * 9000
    const expectedValue = 73.92857142857143

    const speedTrait: SpeedTraitModel = {
      type: TraitTypeModel.Speed,
      value: 'speed of light'
    }
    const character: CharacterModel = {
      id: 'photon',
      image: '/photon.png',
      name: 'Photon',
      traits: [speedTrait]
    }

    const calculator = new CharacterPowerCalculator()

    const power = calculator.calculate(character)

    expect(power).toBe(expectedValue)
  })
})
