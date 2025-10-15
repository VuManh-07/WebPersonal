document.addEventListener("DOMContentLoaded", function () {

  // ====================================
  // === [1] HIỆU ỨNG SKILL PROGRESS ===
  // ====================================

  // 1. Chọn tất cả các thanh tiến độ
  const skillProgressBars = document.querySelectorAll(".skill-progress");

  // 2. Cấu hình Intersection Observer cho Skills
  const skillsObserverOptions = {
    root: null, // Quan sát so với viewport
    rootMargin: '0px',
    threshold: 0.5 // Kích hoạt khi 50% thanh progress bar nằm trong viewport
  };

  // 3. Định nghĩa Observer Callback cho Skills
  const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressElement = entry.target;

        // Lấy giá trị phần trăm từ thuộc tính data-progress
        const percent = progressElement.dataset.progress;

        if (percent) {
          // Áp dụng style width. Transition trong CSS sẽ tạo hiệu ứng điền vào.
          progressElement.style.width = `${percent}%`;
        }

        // Ngừng quan sát phần tử này để animation chỉ chạy một lần
        observer.unobserve(progressElement);
      }
    });
  }, skillsObserverOptions);

  // 4. Quan sát từng thanh progress bar
  skillProgressBars.forEach(bar => {
    skillsObserver.observe(bar);
  });

  // ====================================
  // === [2] HIỆU ỨNG EXPERIENCE (WORKS) ===
  // ====================================

  // 1. Chọn tất cả các mục kinh nghiệm
  const timelineElements = document.querySelectorAll('.timeline-element');

  // 2. Cấu hình Intersection Observer cho Timeline
  const timelineObserverOptions = {
    root: null, // Quan sát so với viewport
    rootMargin: '0px',
    threshold: 0.1 // Kích hoạt khi 10% của phần tử nằm trong viewport
  };

  // 3. Khởi tạo Intersection Observer cho Timeline
  const observer_expr = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Nếu phần tử đang nằm trong viewport
      if (entry.isIntersecting) {
        // Thêm class để kích hoạt hiệu ứng hiển thị (từ opacity: 0 -> 1)
        entry.target.classList.add('is-visible');

        // Ngừng quan sát phần tử này (vì nó đã hiển thị)
        observer.unobserve(entry.target);
      }
    });
  }, timelineObserverOptions);

  // 4. Bắt đầu quan sát từng mục
  timelineElements.forEach((element, index) => {
    // Áp dụng transition-delay tùy thuộc vào thứ tự để tạo hiệu ứng xếp tầng
    // Đây là cách thay thế cho animation-delay cứng trong CSS.
    element.style.transitionDelay = `${index * 0.15}s`;
    observer_expr.observe(element);
  });
});