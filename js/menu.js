
 $(function(){
  $("ul.userBox li p.login").click(function(){
        $(this).next("ul.user_toolBox").stop(true, true).fadeToggle();
    return false;
    });
 });

 // $(function(){
 //  $(".HeaderBox .Menu ul.menu li").hover(function(){
 //        $(this).find("p.color").addClass('btn_in');
 //        $(this).find(".subMenuBox").stop(true, true).fadeToggle(0);
 //        }, function(){
 //          $(this).find("p.color").removeClass('btn_in');
 //        }
 //    });
 // });
$(function(){
  $('.HeaderBox .Menu ul.menu li').hover(function(){
      $(this).find('p.color').addClass('btn_in');
      $(this).find(".subMenuBox").stop(true, true).show(0);
      }, function(){
      $(this).find('p.color').removeClass('btn_in');
      $(this).find(".subMenuBox").stop(true, true).hide(0);
  });
});

 $(function(){
  var body = $("body");
  var width = body.width()

  if(width < 1000)
  {
      $(".sideMenu").mouseleave(function(){
        $(this).find("ul.mainMenu li ul.subMenu").stop(true, true).hide();
    return false;
    });
  }
  return false;
 });