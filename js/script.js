/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    $('body', context).once('ajf', function(){
      
      // Selectors. Set them here for anything you plan to target.
      var headerSelector = 'header#header';
      
      // jRespond - gives javascript support for breakpoints. Wrap all functions in a breakpoint unless it's needed on all displays.
      // The defaults are from Zen. Adjust them for your own use.
      // This is included because it's easily overlooked. Feel free to delete if your theme does not use javascript.
      if (typeof jRespond == 'function') { 
        var jRes = jRespond([
           {
             label: 'smartphones', enter: 0, exit: 480
           },{
             label: 'tablets', enter: 481, exit: 959
           },{
             label: 'desktops', enter: 960, exit: 10000
           }
         ]);
        // example implementation
        jRes.addFunc({
          breakpoint: 'desktops',
          enter: function() {
            console.log('Being viewed on a desktop!');
          },
          exit: function() {
            console.log('Leaving desktop view.');
          },
        });
      }; // end of jRespond
      
      // neuter console when it should not be running
      if (!DEBUG_MODE_ON) {
        console = console || {};
        console.log = function(){};
      };  // end of neuter console
      
    });
    

  }
};


})(jQuery, Drupal, this, this.document);
