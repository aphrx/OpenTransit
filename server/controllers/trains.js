import TrainMessage from '../models/trainMessage.js';
import { get_trains } from '../data/trains.js'

export const getTrains = async (req, res) => {
   var trains = get_trains();
   res.status(200).json(trains)
}

export const createTrain = async(req, res) => {
    const train = req.body;
    const newTrain = new TrainMessage(train)

    try {
        await newTrain.save();
        res.status(201).json(newTrain);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const updateTrain = async (req, res) => {
    const { id: _id } = req.params;
    const train = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No posts with that id');

    const updatedTrain = await TrainMessage.findByIdAndUpdate(_id, train, { new: true});
    res.json(updateTrain);
}