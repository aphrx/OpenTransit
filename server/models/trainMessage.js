import mongoose from 'mongoose';

const trainSchema = mongoose.Schema({
    train: Number,
    line: Number,
    status: String,
    next: String, 
    direction: String
});

const TrainMessage = mongoose.model('trains', trainSchema);

export default TrainMessage;