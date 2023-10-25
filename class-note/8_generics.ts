// function logText(text: any) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText("ㅎㅇ");
// logText(true);

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>("10");

// string과 number을 쓸경우 string만 쓸수있는 함수를 쓸수 없음
// function logText2(text: string | number) {
//     if (typeof text === "string") {
//         console.log(`문자:${text}`);
//     } else if (typeof text === "number") {
//         console.log(`숫자:${text}`);
//     }
//     return text;
// }

// const a = logText2("abc");
// logText2(10);

//제네릭 사용법
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const a = logText<string>("abcdefg");
const b = a.split("");
console.log(b);

const login = logText<boolean>(true);

//인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}
interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown2<number> = { value: 10, selected: false };

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength<string>(["hi", "ad"]);

//제네릭 타입 제한2 - 정의된 타입 이용

interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    console.log(text.length);
    return text;
}
logTextLength2({ length: 10 });
logTextLength2("ㅎㅎㅎ");

//제네릭 타입 제한3 - keyof

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    console.log(itemOption);
    return itemOption;
}

getShoppingItemOption("name");
getShoppingItemOption("price");
