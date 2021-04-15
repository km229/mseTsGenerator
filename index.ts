import {MSEDocument} from './src/model/MSEDocument'

// Example to generate a MSE file
let mse = new MSEDocument('./sample-ts')
mse.generateMseFile('./result.mse')

/* You can add your own code to analyse like this :
let mse = new MSEDocument([ROOT PATH OF SOURCE CODE])
mse.generateMseFile([PATH OF GENERATED FILE])
 */
