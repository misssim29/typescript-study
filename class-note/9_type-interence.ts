// 타입 추론 기본 1
var a = "abc";

function getB(b = 10) {
    var c = "hi";
    return b + c;
}

console.log(getB());

// 타입 추론 기본(제네릭)
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: "abc",
    title: "hello",
};

// extends를 통해 type 추론을 추가해줄수있음
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<number> = {
    title: "abc",
    description: "ab",
    value: "eee", // 넘겨진 K -> T
    tag: "d", // 넘겨진 K
};

// Best Common Type
var arr = [1, 2, true, "ddd"];
