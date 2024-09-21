import { Schema, model } from 'mongoose';
import { IItem } from '../interfaces/interfaces';


const itemSchema = new Schema<IItem>(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true, minlength: 1 },
        price: { type: Number, required: true, min: 0 }
    }, {
        toObject: {
            transform: (doc, ret) => {
                delete ret._id;
                delete ret.__v;
            }
        },
        toJSON: {
            transform: (doc, ret) => {
                delete ret._id;
                delete ret.__v;
            }
        }
    }
);

const Item = model<IItem>('Item', itemSchema);

export {
    Item, IItem
};