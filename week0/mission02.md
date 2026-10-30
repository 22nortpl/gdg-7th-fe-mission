CSS의 정의:
HTML로 작성한 웹페이지의 디자인과 레이아웃을 지정하는 스타일 언어

기본 문법 CSS : 선택자(Selector), 속성(Property), 값(Value)

예시:
p{
  color: blue;
  font-size : 16px;
}

적용방법 3가지:
인라인 스타일 : HTML 요소의 style 속성에 작성
내부 스타일시트 :HTML의 style 태그 내에 작성
외부 스타일시트 : 별도의 .css 파일을 만들어 연결

1. id 선택자와 class 선택자의 차이
  id 선택자
  #notice
  고유한 ID를 가진 요소에 적용

  클래스
  .description
  같은 클래스를 가진 여러 요소에 적용 가능

  특히 CSS에는 우선순위가 적용되는데, 

  ID 선택자 > 클래스 선택자 > 태그 선택자로 선택이 된다.

  선택자의 우선순위가 같다면 일반적으로 나중에 작성된 스타일이 적용된다.

2. margin과 padding의 차이
  둘 다 여백을 표현하는 것은 똑같지만, 위치에 차이점이 존재한다.

  1) padding
  margin은 요소 바깥쪽 여백을 표현한다. 즉 컨텐츠와 테두리 사이의 위치에서 적용이 된다.

  패딩을 늘리면 요소 전체 크기가 커지며, 요소의 배경색이나 이미지가 적용된다.

  또한 클릭/터치 영역에 패딩은 포함된다는 특성이 있다.

  2) margin
  테두리 바깥쪽(요소와 주변 요소 사이)간에 여백을 표현한다. 즉 요소 크기는 그대로고 바깥 공간만 넓어진다.

  항상 색은 투명하며, 클릭 영역에 포함되지 않는다.

  또한 margin : auto로 가운데 정렬 가능하다.

Flexbox

정의 : CSS Flexible Box Layout은 사용자 인터페이스 디자인과 단방향 레이아웃에 최적화된 CSS 모듈

(예시)

.box {
  display: flex;
  justify-content: space-between;
}
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Four
    <br>has
    <br>extra
    <br>text
  </div>
</div>

위 예시에서 3개의 자식 컨테이너가 존재하는데, 이는 플렉스 항목이 된다. justify-content의 값은 space-between으로, 각 아이템을 균일한 간격으로 배치한다.
또한 align-items의 기본값인 stretch로 인해, 각 항목의 높이가 플렉스 컨테이너의 높이까지 늘어난다.


추가 : Animation 구현하는 법
CSS 애니메이션을 만드려면 animation 속성과 이 속성의 하위 속성을 지정

하위 속성

animation-delay
엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정

animation-direction
애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정

animation-duration
한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정

animation-iteration-count
애니메이션이 몇 번 반복될지 지정, infinite로 지정하여 무한히 반복 가능

animation-name
이 애니메이션의 중간 상태를 지정, 중간 상태는 @keyframes 규칙을 이용하여 기술

animation-play-state
애니메이션을 멈추거나 다시 시작 가능

animation-timing-function
중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정

animation-fill-mode
애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정

(예시)
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

위 예시는 3초동안 지속되며, 무한 반복되는 과정을 거친 후 역방향으로 다시 가는 과정을 반복하는 예시이다.