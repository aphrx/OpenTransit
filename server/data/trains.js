import Train from '../libs/train.js';
import { line_4 } from './line4.js'


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
      for(var i = 0; i <= 1; i++){
        var c = new Train(i,4,line_4,0);
        trains[i] = c
        run_train(c)
        await sleep(10000)
      }
  }

  export function get_trains() {
      return trains;
  }

