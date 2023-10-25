interface User {
    age: number;
    name: string;
    gender?: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
getUser({ age: 12, name: "key", gender: "male" });
getUser({ age: 12, name: "key" });
// getUser({ age: 10 }); //error예시

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
};

// 인덱싱
interface StringArray {
    [index: number]: string;
}
var arr: StringArray = ["a", "b", "c"];
// arr[0] = 10; //error예시

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp; //RegExp : 정규표현식
}
var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {
    console.log(value);
});

//인터페이스 확장
interface Person {
    name: string;
    age: number;
}
interface Developer extends Person {
    language: string;
}

var josh: Developer = {
    language: "ts",
    name: "조쉬",
    age: 32,
};
