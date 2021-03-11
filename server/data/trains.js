import Train from '../libs/train.js';
import { line_4 } from './line4.js'
import { line_1 } from './line1.js'


  var trains = [];

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function run_train(c){
    while(true){
        await sleep(c.next())
        await sleep(2000)
    }
  }
  
  export async function play() {
      for(var i = 0; i < 2; i++){
        var c = new Train(i,4,line_4,7);
        trains[i] = c
        run_train(c)
        await sleep(12000)
      }
      for(var i = 2; i < 4; i++){
        var c = new Train(i,1,line_1,44);
        trains[i] = c
        run_train(c)
        await sleep(30000)
      }
  }

  export function get_trains() {
      return trains;
  }

