HTML 정의
1. HyperText Markup Language의 약자, 즉 웹페이지의 콘텐츠와 구조를 정의하는 마크업 언어라는 뜻
2. HTML은 이러한 요소들이 무엇이고, 어떤 의미와 구조를 가지는지 정의하는 역할

분해로 해석
HyperText : 하이퍼링크를 통해 다른 문서나 웹페이지로 이동할 수 있는 텍스트
Markup Language : 태그 등을 활용하여 문서의 구조와 의미를 표현하는 언어

HTML은 프로그래밍 언어가 아니라 마크업 언어!

실제 웹페이지 구성 시

HTML : 웹페이지의 구조와 콘텐츠 정의
CSS : 요소의 스타일과 레이아웃 지정
JavaScript : 동작과 상호작용 구현

HTML 문서의 기본 구조

<!DOCTYPE html>                                                      //HTML 문서임을 알리고 표준 모드로 해석하도록 하는 선언

<html lang="ko">                                                     //HTML 문서의 최상위 요소

  <head>                                                             //문서의 설정 및 메타데이터를 담는 영역
    <meta charset="UTF-8" />                                         //문자인코딩, 화면 설정, 문서 설명
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Page</title>                                     //브라우저 탭에 표시되는 제목
  </head>
  <body>                                                             //실제 웹페이지의 콘텐츠를 담는 영역
    <h1>Hello World!</h1>
    <p>안녕하세요! 첫 번째 웹페이지입니다.</p>
  </body>
</html>

주어진 head내 기능 외 