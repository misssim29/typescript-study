// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage("hello");
// logMessage(100);

//Union Type - 여러가지타입
// function logMessage(value: string | number) {
//     console.log(value);
// }
// logMessage("hello");
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === "number") {
        value.toLocaleString();
    }
    if (typeof value === "string") {
        value.toString();
    }
    throw new TypeError("value mnust be string or number");
}

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone.name; // 공통된것만 접근가능
    // someone.skill; // 접근할수없음
    console.log(someone);
}
askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "심주연", age: 31 });

function askSomeone2(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}

// 인터섹션 타입
// var lucy: string | number | boolean;
// var chloe: string & number & boolean;
