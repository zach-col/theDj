      $(".navbar-nav li a").click(function(event){
          if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
      });
