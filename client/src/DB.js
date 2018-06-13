class DB{
  
  constructor(){
    this.data = {};
  } 

  clear(recType){
    if(! recType){
      this.data = {};
    }else{
      this.data.recType = [];
    }
    return true;
  }

  save(data){
    let recType = 'General';
    
    if(data.type){
      recType = data.type;
    }

    if(!data.data){
      return false
    }

    const inputData = data.data;

    if(Array.isArray(inputData)){
      inputData.forEach(
        (element) => {
          this.save(recType, element);
        }
      );
    }else{
      if(!Array.isArray(this.data[recType])){
        this.data[recType] = [];
      }
      this.data[recType].push(inputData);
    }
    return true;
  }

  find(recType){
    if(! recType){    
      recType = {type: 'General'};
    }
    sleep(Math.random() * 1300 + 500);
    return this.data[recType['type']] ? this.data[recType['type']] : [1, 2, 3];
  }
  
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  console.log(`Will sleep ${milliseconds} milliseconds`);
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      console.log(`...slept ${i} iterations ${Math.round(i / milliseconds)} iterations per millisecond`);
      break;
    }
  }
}

module.exports = new DB;