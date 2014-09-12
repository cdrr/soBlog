// Generated by CoffeeScript 1.7.1
(function() {
  var cover;

  cover = function() {
    var win_height;
    win_height = $(window).height();
    if (win_height < 450) {
      $('.bg').height(450);
    } else {
      $('.bg').height(win_height);
    }
  };

  $(function() {
    $('#mynav').hide();
    cover();
    $(window).resize(function() {
      cover();
    });
  });

  window.onscroll = function() {
    var t, win_height;
    t = document.documentElement.scrollTop || document.body.scrollTop;
    win_height = $(window).height();
    if (t > win_height - 1) {
      return $('#mynav').show();
    } else {
      return $('#mynav').hide();
    }
  };

}).call(this);

//# sourceMappingURL=index.map
