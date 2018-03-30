//點右邊top

$(function(){
　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊 
　　if($this_Top < 500){
  $('a.go_top').stop(true, true).fadeOut();
  // $('.top-bar').stop(true, true).fadeOut(0);
　　　}
　　　　if($this_Top > 500){
　　　　$('a.go_top').stop(true, true).fadeIn();
　　　 }$('a.go_top').click(function(){ $('html,body').stop(true,false).animate({scrollTop:0}, 800); }); 
　　}).scroll();

　});
});

 $(function(){
  $("ul.userBox li p.login").click(function(){
        $(this).next("ul.user_toolBox").stop(true, true).fadeToggle();
    return false;
    });
 });

$(function(){
  $('.HeaderBox .Menu ul.menu li').hover(function(){
      $(this).find('p.color').addClass('btn_in');
      $(this).find(".subMenuBox").stop(true, true).show(0);
      }, function(){
      $(this).find('p.color').removeClass('btn_in');
      $(this).find(".subMenuBox").stop(true, true).hide(0);
  });
});

 // $(function(){
 //  var body = $("body");
 //  var width = body.width()

 //  if(width < 1000)
 //  {
 //      $(".sideMenu").mouseleave(function(){
 //        $(this).find("ul.mainMenu li ul.subMenu").stop(true, true).hide();
 //    return false;
 //    });
 //  }
 //  return false;
 // });