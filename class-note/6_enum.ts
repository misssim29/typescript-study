//enum은 지정하지 않을시 알아서 숫자로 지정함
enum Shoes {
    Nike,
    Adidas,
}
const MyShoes = Shoes.Nike;
console.log(MyShoes);

enum Shoes2 {
    Nike = "나이키",
    Adidas = "아디다스",
}
const MyShoes2 = Shoes2.Nike;
console.log(MyShoes2);

//예제 (정확한 예외처리들을 위해서 사용함)
enum Answer {
    Yes = "Y",
    No = "N",
}

function AskQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log("정답");
    } else if (answer === Answer.No) {
        console.log("오답");
    }
}
AskQuestion(Answer.Yes);
