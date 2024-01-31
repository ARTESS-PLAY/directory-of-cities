import mongoose from 'mongoose';

export interface Street {
    name: string;
    district: mongoose.Schema.Types.ObjectId;
}

const StreetSchema = new mongoose.Schema<Street>({
    name: {
        type: String,
        required: true,
    },
    district: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'District',
    },
});

export default mongoose.model('Street', StreetSchema);
