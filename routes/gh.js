// let l = Path_440.getTotalLength();
// let dasharray = l;
// let dashoffset = l;
// theFill.setAttributeNS(null, "stroke-dasharray", l);
// theFill.setAttributeNS(null, "stroke-dashoffset", l);
// wrap.addEventListener("scroll", function() {
//   dashoffset = l - this.scrollTop * l / (this.scrollHeight - this.clientHeight);
//   console.log('scrollTop', this.scrollTop, 'scrollHeight', this.scrollHeight, 'clientHeight', this.clientHeight, 'dash-offset', dashoffset)
//   theFill.setAttributeNS(null, "stroke-dashoffset", dashoffset);
// });
window.addEventListener('scroll', function() {
    let l = Path_440.getTotalLength();
    let dasharray = l;
    let dashoffset = l;
    e = document.documentElement;
    theFill.setAttributeNS(null, "stroke-dasharray", l);
    theFill.setAttributeNS(null, "stroke-dashoffset", l);
    dashoffset = l - window.scrollY * 0.39 *l / (e.scrollHeight - e.clientHeight);
    console.log('window.scrollY', window.scrollY, 'scrollTop', e.scrollTop, 'scrollHeight', e.scrollHeight, 'clientHeight', e.clientHeight, 'dash-offset', dashoffset);
    theFill.setAttributeNS(null, "stroke-dashoffset", dashoffset);
  })
  
  // window.onscroll = function () { scrollSvgFill() };
  
  // scrollTop: 17 scrollHeight: 1974 
  // clientHeight: 858 dash-offset: 4608.8952829231075