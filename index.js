let target = {
    name:'learn git',
    sex:'male11',
    data:8,
    ttt:0
}

    let b=[1,5,66,5]
    let test = function(){
      this.age = 8;
      this.name='baowei'
    }
    test.prototype.action = 'run'
    let key = new(test)

     for(let item of b){
          console.log(item)
     }