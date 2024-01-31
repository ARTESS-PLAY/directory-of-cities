import mongoose from 'mongoose';

export interface Address {
    city: mongoose.Schema.Types.ObjectId;
    district: mongoose.Schema.Types.ObjectId;
    street: mongoose.Schema.Types.ObjectId;
}

const AddressSchema = new mongoose.Schema<Address>({
    city: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'City',
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'District',
    },
    street: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'Street',
    },
});

export default mongoose.model('Address', AddressSchema);
