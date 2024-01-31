import mongoose from 'mongoose';

interface User {
    name: string;
    address: mongoose.Schema.Types.ObjectId;
}

const UserSchema = new mongoose.Schema<User>({
    name: {
        required: true,
        type: String,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'Address',
    },
});

export default mongoose.model('User', UserSchema);
