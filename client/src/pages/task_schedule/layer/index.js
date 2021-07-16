import * as tfc from '@tensorflow/tfjs-core';
import * as tfl from '@tensorflow/tfjs-layers';

export default async() => {

    // A sequential model is a container which you can add layers to.
    const model = tfl.sequential();

    // Add a dense layer with 1 output unit.
    model.add(tfl.layers.dense({units: 1, inputShape: [1]}));

    // Specify the loss type and optimizer for training.
    model.compile({loss: 'meanSquaredError', optimizer: 'SGD'});

    // Generate some synthetic data for training.
    const xs = tfc.tensor2d([
        [1], [2], [3], [4]
    ], [4, 1]);
    const ys = tfc.tensor2d([
        [1], [4], [6], [8]
    ], [4, 1]);

    // Train the model.
    await model.fit(xs, ys, {epochs: 1000});

    // Ater the training, perform inference.
    const output = model.predict(tfc.tensor2d([[4]], [1, 1]));

    output.print();
}