// ES2015(ES6)
// class -> function으로 바껴서 딱히..쓸필요가..

function FncPerson(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new FncPerson("캡틴", 100);
console.log(capt);

class Person {
    //클래스 로직
    constructor(name, age) {
        console.log("생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
}
var seho = new Person("세호", 30);
console.log(seho);
