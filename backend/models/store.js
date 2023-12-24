// models/store.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StoreSchema = new Schema(
  {
    inventory: {
      available: {
        type: Number,
        default: 0,
      },
      pending: {
        type: Number,
        default: 0,
      },
      // Add more status types as needed
    },
    orders: [
      {
        petId: {
          type: Schema.Types.ObjectId,
          ref: "Pet",
        },
        quantity: {
          type: Number,
          required: true,
        },
        // Add more order details as needed
      },
    ],
    // You can add more properties based on your specific requirements
    // ...
  },
  { versionKey: false }
);

const StoreModel = mongoose.model("Store", StoreSchema);

export default StoreModel;
