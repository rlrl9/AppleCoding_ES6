class Dog{
    constructor(type,color){
        this.type=type;
        this.color=color;
    }
    getMoreAge(){
        if(this instanceof Cat){
            this.age++;
        }
    }
}
var dog1 = new Dog('말티즈','white');
var dog2 = new Dog('진돗개','brown');
class Cat extends Dog{
    constructor(type,color,age){
        super(type,color);
        this.age=age;
    }
}
var cat1 = new Cat('코숏','white',5);
var cat2 = new Cat('러시안블루','brown',2);
