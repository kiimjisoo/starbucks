// 검색창 요소(.search) 선택 할 때 강제 포커스 및 제어
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input'); 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 input요소를 포커스하도록 실행
searchEl.addEventListener('click', function () { //이벤트 핸들러
  searchInputEl.focus(); //포커스 강제 적용
});

// input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus',function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // html 속성을 추가하는 메소드
});

// input 요소에 포커스 해제(블러)되면 실행
searchInputEl.addEventListener('blur',function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // html 속성을 추가하는 메소드
});

// 스크롤시 전역 배치(고정 배너) 숨기기
const badgeEl = document.querySelector('header .badges');

// window: 브라우저 창 객체 
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);  //y축으로 얼마나 스크롤 했는지에 대한 수치

  // 만약 스크롤의 위치가 500을 넘으면 배치 요소를 숨기고 
  // 그렇지 않으면 다시 보이기!!!

if (window.scrollY > 500) {
  // 배지요소 숨기기!
  // badgeEl.style.display = 'none';

  // gsap.to(요소, 지속시간, 옵션:{}) 메소드:css속성을 통해 애니메이션 처리
  gsap.to(badgeEl, 0.6, {
    opacity: 0, 
    display: 'none'
  })
} else {
  // 배지요소 보이기
  // badgeEl.style.display = 'block';
  gsap.to(badgeEl, 0.6, {
    opacity: 1, 
    display: 'block'
  })
}
});

// 순차적으로 visual 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');

// 요소들을 하나씩 반복해서 처리! 순차적으로 0,1,2,3순으로
fadeEls.forEach(function (fadeEls, index) {
  // gsap.to(요소, 지속시간, 옵션:{}) 메소드:css속성을 통해 애니메이션 처리
  // foreach는 0부터라서 +1
  // delay : 몇 초 뒤에 실행될 것인가?
  gsap.to(fadeEls, 1, {
    delay: (index + 1 )* 0.7,
    opacity: 1
  });
})

// 공지사항 수직 슬라이드 기능 작성 대소문자 주의
// new 키워드로 Swiper 객체를 생성 => 슬라읻 기능 생성
// new Swiper(선택자, 옵션: {});
new Swiper('.notice .swiper', {
  direction: 'vertical', //수직 슬라이드
  loop:  true, //반복 재생 여부
  autoplay: true, // 자동 재생 여부

});
