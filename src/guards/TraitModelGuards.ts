import { SpeedTraitModel } from '@/models/SpeedTraitModel'
import { StrengthTraitModel } from '@/models/StrengthTraitModel'
import type { TraitModel } from '@/models/TraitModel'
import { TraitTypeModel } from '@/models/TraitTypeModel'

export abstract class TraitModelGuards {
  public static isStengthTrait (model: TraitModel): model is StrengthTraitModel {
    return model.type === TraitTypeModel.Strength
  }

  public static isSpeedTrait (model: TraitModel): model is SpeedTraitModel {
    return model.type === TraitTypeModel.Speed
  }
}
