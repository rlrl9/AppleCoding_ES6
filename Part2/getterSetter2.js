var data = {
    odd : [],
    even : [],
    setFunction: function(...arr){
        arr.forEach((a)=>{
            if(a%2==0){
                this.even.push(a);
            }
            else{
                this.odd.push(a);
            }
        });
    },
    get getFunction(){
        return [...this.odd, ...this.even].sort()
    }
};
data.setFunction(1,2,3,4,5);
console.log(data.getFunction);