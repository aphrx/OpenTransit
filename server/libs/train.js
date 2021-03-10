export default class Train {
    constructor(tid, line, data, numOfStations) {
        this.train_id = tid
        this.line = line
        this.data = data
        this.current = 0
        this.numOfStations = numOfStations
    }

    next(){
        if(this.current >= this.numOfStations){
            this.current = 0;
        }
        else{
            this.current += 1;
        }
        let prevIndex = this.current 
        
        console.log(`Train ${this.train_id} is at ${this.data[Object.keys(this.data)[prevIndex]]["name"]} Station`);
        return this.data[Object.keys(this.data)[prevIndex]]["transition"]["duration"] *1000
        
    
    }
    
}