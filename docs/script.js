// 截图素材未就位时，隐藏 <img> 并显示“等待实际素材”的说明，绝不展示占位假图。
document.querySelectorAll('.shot img').forEach(function (img) {
  function markAwaiting() {
    var figure = img.closest('.shot');
    if (figure) figure.classList.add('is-awaiting');
  }
  if (img.complete && img.naturalWidth === 0) {
    markAwaiting();
  } else {
    img.addEventListener('error', markAwaiting);
  }
});
