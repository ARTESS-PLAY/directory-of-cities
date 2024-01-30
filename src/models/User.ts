import mongoose from 'mongoose';

interface User {
    name: string;
    adress: mongoose.Schema.Types.ObjectId;
}

const UserSchema = new mongoose.Schema<User>({
    name: {
        required: true,
        type: String,
    },
    adress: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'Address',
    },
});

export default mongoose.model('User', UserSchema);
