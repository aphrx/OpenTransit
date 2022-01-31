export default class Train {
  constructor(tid, line, data, numOfStations) {
    this.train_id = tid;
    this.line = line;
    this.data = data;
    this.current = 0;
    this.direction = 1; // 1 is East, -1 is West
    this.numOfStations = numOfStations;
  }

  next() {
    if (this.current == 0) {
      this.direction = 1;
    } else if (this.current == this.numOfStations - 1) {
      this.direction = -1;
    }
    this.current += this.direction;
    let prevIndex = this.current;

    
    if(this.direction == 1){
      this.data[Object.keys(this.data)[prevIndex]]['rotate'] = this.data[Object.keys(this.data)[prevIndex]]['rotate_east']
    }
    else if(this.direction == -1)(
      this.data[Object.keys(this.data)[prevIndex]]['rotate'] = this.data[Object.keys(this.data)[prevIndex]]['rotate_west']
    )
    // console.log(this.data[Object.keys(this.data)[prevIndex]])

    // console.log(`Train ${this.train_id} is at ${this.data[Object.keys(this.data)[prevIndex]]["name"]} Station`);
    
    
    return (
      this.data[Object.keys(this.data)[prevIndex]]["transition"]["duration"] *
      1000
    );
  }
}
