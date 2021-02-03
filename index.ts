
import {MSEDocument} from './src/MSEDocument'

let mseDocument = new MSEDocument('./sample-ts')
mseDocument.explore()
mseDocument.generateFile('./result.txt')
mseDocument.showTree()