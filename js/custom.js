// 요소 가져오기
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modal-img");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

// 이미지 클릭 시 모달 열기 (클래스 추가)
images.forEach(img => {
    img.addEventListener("click", function() {
        modal.classList.add("active"); // ✅ 모달 보이게 변경
        modalImg.src = this.src;
    });
});

// 닫기 버튼 클릭 시 모달 닫기 (클래스 제거)
closeBtn.addEventListener("click", function() {
    modal.classList.remove("active"); // ✅ 모달 숨기기
});

// 모달 바깥 클릭 시 닫기
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});
