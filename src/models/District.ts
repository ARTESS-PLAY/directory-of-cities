import mongoose from 'mongoose';

export interface District {
    name: string;
    city: mongoose.Schema.Types.ObjectId;
}

const DistrictSchema = new mongoose.Schema<District>({
    name: {
        type: String,
        required: true,
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'City',
    },
});

export default mongoose.model('District', DistrictSchema);
