JavaScript
JavaScript(JS) 는 웹페이지에 동적인 기능을 추가하고 데이터를 처리할 수 있는 프로그래밍 언어

HTML과 CSS만으로도 웹페이지의 기본적인 구조와 디자인을 만들 수 있지만, JavaScript를 활용하면 사용자의 행동이나 데이터에 따라 화면 변화가 가능

필수 : 변수와 자료형

변수 : 변수는 프로그램에서 사용하는 값을 저장하고, 참조하기 위한 이름

1. JavaScript에서 let과 const의 차이점?

변수 선언의 대표적인 명령어 let와 const,

이 let과 const는 다음과 같은 차이점이 존재한다.

1) let은 재할당이 가능하지만, const는 불가능하다.
2) let은 재선언이 가능하나, const는 불가능하다.
3) let은 선언 시 초기화를 생략 가능하지만, const는 반드시 선언과 동시에 초기화해야 한다.

공통점
1) 블록 스코프 범위 ({...})
2) 호이스팅이 되지만 사각지대가 생긴다.

또한, const로 선언한 배열이나 객체의 내부 값(요소나 속성)은 변경할 수 있다.

자료형

string - 문자열 : "Hello"
number - 숫자 : 10, 3.14
boolean - 참 또는 거짓 : true, false
undefined - 값이 할당되지 않은 상태 등을 나타내는 값  : undefined
null - 의도적으로 값이 없음을 나타내는 값 : null
object - 여러 값을 속성으로 묶어 표현하는 자료형 : { name: "상품" }

원시 타입과 객체 타입 : JavaScript의 자료형을 구분하는 큰 기준

원시 타입 : 문자열, 숫자, 불리언 등

객체 타입 : 객체, 배열, 함수 등

객체 타입끼리 복사할 때는 한쪽에서 속성 변경 시 다른 쪽도 변경됨.

2. 배열의 map(), filter(), find()는 각각 어떤 역할을 하며, 반환하는 결과는?

배열은 여러 개의 값을 순서대로 저장할 수 있는 자료구조
예시:

const products = ["티셔츠", "청바지", "운동화"];

console.log(products[0]);     // "티셔츠"
console.log(products.length); // 3
0부터 시작하는 index를 통해 각 요소에 접근

객체는 여러 데이터를 키(Key)와 값(Value) 의 형태로 표현
예시:

const product = {
  id: 1,
  name: "티셔츠",
  price: 20000,
};

접근하려면 product.name, product["price"]등을 사용

배열과 객체를 같이 활용한 예시
const products = [
  { id: 1, name: "티셔츠", price: 20000 },
  { id: 2, name: "청바지", price: 45000 },
  { id: 3, name: "운동화", price: 78000 },
];

배열 메서드와 각각의 역할

- map() : 콜백 함수를 이용해 각각의 요소에 호출해서 그 값을 변환할 수 있개 함. 배열의 각 요소에 실행됨.

예시:

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

즉, modifiedArr은 새로운 배열을 만드는 것이다.

- filter() : 이 기능을 사용하면 주어진 함수를 만족하는 모든 요소를 모아 새 배열로 반환이 가능하다.

두가지 방법이 존재하는데, 하나는 filter 내에 함수를 넣는 방법이고, 다른 방법은 함수를 만들어서 외부에 사용하는 것이다.

예시:

let array = [3, 5, 11, 0, 9, 'string']

#1 solution // 함수를 filter 내에 넣는 것
let result = array.filter((value) => value < 10)

#2 solution // 외부에서 함수 사용
function lessThanTen(value){
  return value < 10
}
let result = array.filter(lessThanTen)

두 방법 모두 10보다 작은 값들을 출력한다.

- find() : 콜백 함수의 조건에 맞는 첫 번째 요소를 찾는 것이다.

예시 1:
[😃, 🏀, 🍎, 🍇, 🐵].find(function(찾는_요소) {
    return 찾는_요소 === 과일;
}); // 👉 🍎

// 이 배열에서 찾는 요소의 조건인 과일(🍎, 🍇) 중 첫 번째 과일(🍎)이 반환된다.

// 배열을 생성합니다.
const numbers = [1, 3, 7, 4, 6, 8];

// 조건(짝수)을 만족하는 첫 번째 요소를 찾습니다.
const firstEven = numbers.find(function(num) {
    return num % 2 === 0; // 짝수인지 확인
});

// 결과를 출력합니다.
console.log(firstEven); // 출력: 4

이렇게 되면 크롬 기준 콘솔을 켰을 때 첫 줄에 4가 출력된다.

결론: map 과 filter는 새로운 배열을, find는 하나의 요소임을 알 수 있다. 단, 배열을 복사할 뿐, 원본 배열은 유지된다.

자주 사용하는 JS 문법

- 템플릿 리터럴
백틱(`)을 사용해 문자열을 작성하는 방법

const name = "티셔츠";
const price = 20000;

console.log(`${name}의 가격은 ${price}원입니다.`);

문자열 안에 변수나 표현식의 값을 넣을 수 있어서 보다 간결하게 문장 작성이 가능하다.

- 삼항 연산자
조건에 따른 참의 값이랑 거짓일 때 값을 제시한다.

형태 : 조건 ? 참일 때 값 : 거짓일 때 값
C언어랑 원리는 거의 비슷하다.

예시:
const isSoldOut = true;

const message = isSoldOut ? "품절" : "구매 가능";

console.log(message); // "품절"

3. 구조 분해 할당(Destructuring)은 무엇이며, 어떤 상황에서 활용 가능?

일반적으로 구조분해 할당은 배열이나 객체에서 필요한 값을 꺼내 변수에 할당하는 문법이다.

const product = {
  name: "티셔츠",
  price: 20000,
};

다음과 같은 객체가 있을 때, 접근 방식은 이렇다.

const name = product.name;
const price = product.price;

이렇게 하면 더 간결하게 작성이 가능하다.

const { name, price } = product;

배열과 객체에서의 구조 분해 할당 차이
대표적인 차이
배열 : 인덱스 중심, 객체 : 키 중심
기본 기호 : 배열은 대괄호 [...] 사용, 객체는 중괄호 {...} 사용

구조 분해 할당을 사용하는 이유
- 코드 가독성 향상: object.name, object.age 또는 array[0], array[1]처럼 반복해서 접근하지 않고, 한 번의 선언으로 변수 추출 가능

- 필요한 값만 추출: 객체나 배열에서 특정 값만 골라내어 깔끔하게 변수로 생성

- 기본값(Default value) 설정 용이: 값이 undefined일 경우를 대비해 기본값을 쉽게 지정 가능

값을 꺼내는 순서와 속성 이름의 차이

배열(Array) 구조 분해 할당
- 인덱스(순서) 기준
- 사용자가 원하는 이름으로 자유롭게 지정 가능 (위치 순서대로 매칭)
- 매우 중요함 (첫 번째는 1번째 요소, 두 번째는 2번째 요소)
객체(Object) 구조 분해 할당
- 속성 이름(키, Key) 기준
- 키 이름과 동일한 변수명을 써야 함 (순서 무관)
- 전혀 중요하지 않음 (키 이름만 맞으면 순서는 바꿔서 써도 됨)

DOM과 Event
- DOM은 브라우저가 HTML 문서를 객체 형태의 계층 구조로 표현한 것

getElementById() : ID로 요소 찾기
querySelector() : CSS 선택자로 첫 번째 요소 찾기
querySelectorAll() : CSS 선택자와 일치하는 모든 요소 찾기
textContent : 요소의 텍스트 읽기·변경
classList : 요소의 클래스 추가·제거·전환

- 이벤트(Event)는 클릭, 키보드 입력 등 웹페이지에서 발생하는 동작을 의미

const button = document.querySelector("#like-button");

button.addEventListener("click", () => {
  console.log("좋아요 버튼을 클릭했어요!");
});