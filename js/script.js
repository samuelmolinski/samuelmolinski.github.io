/**
 * Created by smolinsk on 7/14/2017.
 */

(function($, window, undefined) {

  $('.blog-sidebar li').each(function() {
    var $this = $(this);
    var $submenu = $this.find('> ol');
    if($submenu.length) {
      $this.addClass('sub-menu');
      $('.sub-menu-toggle').click(function(e){
        e.stopPropagation();
        var $that = $(this);
        $that.toggleClass('open');
        $that.siblings('.sub-menu').toggleClass('open');
        console.log('clicked')
      });
    }
  });

  // Remove unusable confluence sections
  $('.drop-zone-text').remove();

  // Move Index around the menu
  index_first_in_menu();

})(jQuery, window);

function index_first_in_menu() {
  var $index = $('[title="Home"]');
  var $parent = $index.parent();
  $parent.prepend($index);
}