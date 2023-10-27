// 인터페이스
// interface Team {
//     name: string;
//     skill: string;
// }
// class personId {
//     name: string;
//     skill: string;
// }

// var team: Team;
// var personid: personId;

// team = new personId();

// 함수
var add = (a: number) => {
    console.log(a);
};
var sum = (a: number, b: number) => {
    console.log(a + b);
};

sum = add;

//제네릭
interface Empty<T> {}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NoEmpty<T> {
    data: T;
}
var notempty1: NoEmpty<string>;
var notempty2: NoEmpty<number>;
notempty1 = notempty2;
