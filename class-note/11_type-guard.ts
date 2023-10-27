interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
function introduce(): Developer | Person {
    return {
        name: "Tony",
        age: 33,
        skill: "vue",
    };
}
var tony = introduce();

// 비효율적 기존방식
// if ((tony as Developer).skill) {
//     console.log((tony as Developer).skill);
// }
// if ((tony as Person).age) {
//     console.log((tony as Person).age);
// }

// 여기서부터 type-guard 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}
