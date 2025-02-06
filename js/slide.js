document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let slideInterval;

    // 슬라이드 변경 함수
    function changeSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    // 다음 슬라이드
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    }

    // 이전 슬라이드
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(currentIndex);
    }

    // 자동 슬라이드 (3초마다 변경)
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    // 마우스를 올리면 자동 슬라이드 멈춤
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // 이벤트 리스너 추가
    nextBtn.addEventListener("click", function () {
        nextSlide();
        stopAutoSlide();
        startAutoSlide(); // 클릭 후 자동 슬라이드 재시작
    });

    prevBtn.addEventListener("click", function () {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // 마우스를 올리면 자동 슬라이드 멈춤, 떠나면 다시 시작
    document.querySelector(".carousel").addEventListener("mouseenter", stopAutoSlide);
    document.querySelector(".carousel").addEventListener("mouseleave", startAutoSlide);

    // 초기 슬라이드 시작
    changeSlide(currentIndex);
    startAutoSlide();
});
