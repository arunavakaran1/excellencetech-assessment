var closeBtns = document.querySelectorAll('.img-wrap .close')

for (var i = 0, l = closeBtns.length; i < l; i++) {
  closeBtns[i].addEventListener('click', function() {
    var imgWrap = this.parentElement;
    imgWrap.parentElement.removeChild(imgWrap);
  });
}