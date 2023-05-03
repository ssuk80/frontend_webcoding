// (참고)
//prev.onclick = prevSlide;
//next.onclick = nextSlide;

//(참고) 이미지 슬라이드 쇼를 자동으로 바꾸는 방법
// const slides = document.querySelectorAll('#slides > img');
// let current = 0;

// function showSlides() {
// for (let i = 0; i < slides.length; i++) {
// slides[i].style.display = "none"; // 모든 이미지 감춤
// }
// current++; // 다음 이미지로 이동
// if (current > slides.length) { // 마지막 이미지라면
// current = 1; // 첫 번째로 이동
// }
// slides[current - 1].style.display = "block"; // 현재 위치 이미지 표시
// setTimeout(showSlides, 2000); // 2초 마다 showSlides 함수 반복 실행 
// }

// showSlides(); // 기본적으로 첫 번째 이미지 표시