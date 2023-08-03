import mongoose from 'mongoose'

const ItemTypeEspecific = mongoose.model('ItemTypeEspecific', {
  name: { type: String, required: true },
  item_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemType',
    required: true,
  },
})

export default ItemTypeEspecific
