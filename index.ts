
import {MSEDocument} from './src/MSEDocument'

let mseDocument = new MSEDocument('./sample-ts')
mseDocument.explore()
mseDocument.generateFile('./result.mse')
//seDocument.showTree()