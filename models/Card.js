const mongoose = require('mongoose')

const StatsSchema = new mongoose.Schema({
    spirit: { type: Number },
    min_attack: { type: Number },
    max_attack: { type: Number },
    defence: { type: Number },
    life: { type: Number },
    max_life: { type: Number },
});

const EffectSchema = new mongoose.Schema({
    
});

const ConditionSchema = new mongoose.Schema({
    
});

const Card = mongoose.model('Card', {
    name: {type: String, required: true},
    ato: {type: Number, required: true},
    level: {type: Number, required: true},
    type: { type: String, enum: ['CHARACTERS', 'SPELL', 'ACTION', 'THEURGY', 'ITEM'], required: true },
    stats: { type: StatsSchema, default: {} },
    evolution_card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    sex: { type: String, enum: ['MALE', 'FEMALE', 'UNKNOWN'] },
    element_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Element' },
    item_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemType' },
    item_type_especific_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemTypeEspecific' },
    theurgy_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TheurgyType' },
    race_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Race' }],
    class_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
    caste_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Caste' }],
    guild_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guild' }],
    effect: {
        condition: {type: ConditionSchema, default: {}}
    }
})

module.exports = Card