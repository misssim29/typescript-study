interface PersonInterface {
    name: string;
    age: number;
}

type PersonType = {
    name: string;
    age: number;
};
var Seho: PersonInterface = {
    name: "세호",
    age: 30,
};
var Lucy: PersonType = {
    name: "루씨",
    age: 23,
};

// type과 interface의 가장 큰 차이는 type은 확장이 되지 않는다. 그렇기에 interface를 사용하는것이 더 좋다.
// 변수를 alt+클릭하면 interface,type 선언문으로 바로 가진다.

type MyString = string;
var str: MyString = "hello";

type Todo2 = { id: string; title: string; done: boolean };

function getTodo(todo: Todo2) {
    return todo;
}
