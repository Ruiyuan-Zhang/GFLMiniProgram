import * as tf from '@tensorflow/tfjs-core'
// import * as tfb from '@tensorflow/tfjs-backend-webgl'

export default async() => {

    const a = tf.variable(tf.scalar(Math.random()));
    const b = tf.variable(tf.scalar(Math.random()));
    const c = tf.variable(tf.scalar(Math.random()));
    const d = tf.variable(tf.scalar(Math.random()));
 

    function predict(x) {
        // y = a * x ^ 3 + b * x ^ 2 + c * x + d
        return tf.tidy(() => {
            let y = tf.add(tf.mul(a,tf.pow(x,tf.scalar(3))) // a * x^3
                ,(tf.mul(b,tf.square(x))) // + b * x ^ 2
                ,(tf.mul(c,x)) // + c * x
                ,(d)); // + d
            return y
        });  
    }

    function loss(predictions, labels) {
        // Subtract our labels (actual values) from predictions, square the results, and
        // take the mean.
      const meanSquareError = tf.mean(tf.square(tf.sub(predictions, labels)));
      return meanSquareError;
    }

    function train(xs, ys, numIterations = 75) {

        const learningRate = 1;
        const optimizer = tf
            .train
            .sgd(learningRate);

        for (let iter = 0; iter < numIterations; iter++) {
            // a.print()
            optimizer.minimize(() => {
                const predsYs = predict(xs);
                let l = loss(predsYs, ys);
                // l.print()
                return l
            });
        }
    }

    function generateData(numPoints, coeff, sigma = 0.04) {
        const gety = x =>  coeff.a * x * x * x + coeff.b * x * x + coeff.c * x + coeff.d
        let ans = {xs:[],ys:[]}
        for (let i=0;i<numPoints;i++){
            let x = i
            let y = gety(x)
            ans.xs.push([x])
            ans.ys.push([y])
        }
        console.log(ans)
        ans.xs =tf.tensor2d(ans.xs,[numPoints,1])
        ans.ys =tf.tensor2d(ans.ys,[numPoints,1])
        return ans
    }

    const trueCoefficients = {a: 0.01, b: 0.01, c: 1, d: 1};
    const trainingData = generateData(100, trueCoefficients);

    await train(trainingData.xs, trainingData.ys, 20);

    console.log(trueCoefficients)
    a.print()
    b.print()
    c.print()
    d.print()

}