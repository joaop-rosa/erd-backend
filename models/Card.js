import {
  CARD_TYPE_OPTIONS,
  OPERATION_OPTIONS,
  VALUE_AFFECTED_OPTIONS,
  SEX_OPTIONS,
  ACTIVATION_ORDER_OPTIONS,
  AFFECTED_OPTIONS,
  STATUS_AFFECTED_OPTIONS,
  OPERATION_COMPARISSON_OPTIONS,
} from '../constants/card_effect_options.js'
import mongoose from 'mongoose'

const StatsSchema = new mongoose.Schema({
  spirit: { type: Number },
  min_attack: { type: Number },
  max_attack: { type: Number },
  defence: { type: Number },
  life: { type: Number },
  max_life: { type: Number },
})

const ConditionSchema = new mongoose.Schema({
  condition_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConditionType',
  },
  card_type: { type: String, enum: CARD_TYPE_OPTIONS },
  turn: { type: Number },
  affected: { type: String, enum: AFFECTED_OPTIONS },
  amout_selected_affected: { type: Number },
  status_affected: { type: String, enum: STATUS_AFFECTED_OPTIONS },
  operation_comparisson: { type: String, enum: OPERATION_COMPARISSON_OPTIONS },
  race_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Race' }],
  class_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  caste_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Caste' }],
  guild_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guild' }],
  element_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Element' }],
  item_type_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ItemType' }],
  item_type_especific_id: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'ItemTypeEspecific' },
  ],
  theurgy_type_id: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'TheurgyType' },
  ],
})

const EffectSchema = new mongoose.Schema({
  activation_order: { type: String, enum: ACTIVATION_ORDER_OPTIONS },
  effect_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'EffectType' },
  affected: { type: String, enum: AFFECTED_OPTIONS },
  amout_selected_affected: { type: Number },
  status_affected: { type: String, enum: STATUS_AFFECTED_OPTIONS },
  operation: { type: String, enum: OPERATION_OPTIONS },
  value_affected: { type: String, enum: VALUE_AFFECTED_OPTIONS },
  amout_value_affected: { type: Number },
  element_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Element' },
  condition: { type: ConditionSchema, default: {} },
})

const Card = mongoose.model('Card', {
  name: { type: String, required: true },
  ato: { type: Number, required: true },
  image: { type: String, required: true },
  level: { type: Number, required: true },
  type: { type: String, enum: CARD_TYPE_OPTIONS, required: true },
  stats: { type: StatsSchema, default: {} },
  evolution_card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  sex: { type: String, enum: SEX_OPTIONS },
  element_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Element' },
  item_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemType' },
  item_type_especific_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemTypeEspecific',
  },
  theurgy_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TheurgyType' },
  race_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Race' }],
  class_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
  caste_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Caste' }],
  guild_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guild' }],
  effect: { type: EffectSchema, default: {} },
})

export default Card
