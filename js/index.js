/* Card Holder */
Vue.config.devtools = true;

Vue.component('card', {
  template: '\n    <div class="card-wrap"\n      @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info">\n          <slot name="header"></slot>\n          <slot name="content"></slot>\n        </div>\n      </div>\n    </div>',


  mounted: function mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: function data() {return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null };},

  computed: {
    mousePX: function mousePX() {
      return this.mouseX / this.width;
    },
    mousePY: function mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle: function cardStyle() {
      var rX = this.mousePX * 30;
      var rY = this.mousePY * -30;
      return {
        transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)' };

    },
    cardBgTransform: function cardBgTransform() {
      var tX = this.mousePX * -40;
      var tY = this.mousePY * -40;
      return {
        transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)' };

    },
    cardBgImage: function cardBgImage() {
      return {
        backgroundImage: 'url(' + this.dataImage + ')' };

    } },

  methods: {
    handleMouseMove: function handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter: function handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave: function handleMouseLeave() {var _this = this;
      this.mouseLeaveDelay = setTimeout(function () {
        _this.mouseX = 0;
        _this.mouseY = 0;
      }, 1000);
    } } });
var app1 = new Vue({
  el: '#app1' });

var app2 = new Vue({
  el: '#app2' });

var app3 = new Vue({
  el: '#app3' });

var app4 = new Vue({
    el: '#app4' });

var app5 = new Vue({
  el: '#app5' });

var app6 = new Vue({
  el: '#app6' });

var app7 = new Vue({
  el: '#app7' });

var app8 = new Vue({
  el: '#app8' });

var app9 = new Vue({
  el: '#app9' }); 

  var app10 = new Vue({
    el: '#app10' });
  
  var app11 = new Vue({
    el: '#app11' });
  
  var app12 = new Vue({
    el: '#app12' });
  
  var app13 = new Vue({
      el: '#app13' });
  
  var app14 = new Vue({
    el: '#app14' });
  
  var app15 = new Vue({
    el: '#app15' });
  
  var app16 = new Vue({
    el: '#app16' });
  
  var app17 = new Vue({
    el: '#app17' });
  
  var app18 = new Vue({
    el: '#app18' }); 
    
var app19 = new Vue({
  el: '#app19' });

var app20 = new Vue({
  el: '#app20' });

var app21 = new Vue({
  el: '#app21' });

var app22 = new Vue({
    el: '#app22' });

var app23 = new Vue({
  el: '#app23' });

var app24 = new Vue({
  el: '#app24' });


// var app2 = new Vue({
//   el: '#app2'
// });

/* Button toggle js */

$('.btn').click(function() {
  // document.querySelector('.btn').classList.toggle('active');
  // document.querySelector('.btn-p1').classList.toggle('activep1');
  // document.querySelector('.btn-p2').classList.toggle('activep2');
  console.log("OK");
    
  if(!$(this).hasClass('active')){
    $('.btn').removeClass('active');
    $('.btn').find('.btn-p1').removeClass('activep1');
    $('.btn').find('.btn-p2').removeClass('activep2');

    $(this).toggleClass('active');
    $(this).find('.btn-p1').toggleClass('activep1');
    $(this).find('.btn-p2').toggleClass('activep2');
  
      /*Displaying card*/   
    $("div[class^='containerbt']").attr('style','display : none');
    var x = $(this).attr('id');
    x = '.container' + x; 
    console.log(x);
    $(x).attr('style','display : flex');

  };

});


