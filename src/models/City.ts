import mongoose from 'mongoose';

export interface City {
    name: string;
    population: number;
}

const CitySchema = new mongoose.Schema<City>({
    name: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
        min: 0,
    },
});

export default mongoose.model('City', CitySchema);
