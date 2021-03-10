export default class Train {
    constructor(tid, line, data, direction) {
        this.train_id = tid
        this.line = line
        this.data = data
        this.current = 0
    }

    next(){
        if(this.current >= 7){
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