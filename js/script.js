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
Drupal.behaviors.simpletheme = {
  attach: function(context, settings) {
    
    // wrap all declarations in a .once() function to ensure they execute exactly once on the page.
    $('body', context).once('st', function(){
      
      // Selectors. Set them here for anything you plan to target.
      var headerSelector = 'header#header';
      
      // jRespond - gives javascript support for breakpoints. Wrap each function in a breakpoint unless it's needed on all displays.
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
         ]); // end jRespond
        
        // example implementation
        // the enter and exit functions fire based on window dimensions. 
        jRes.addFunc({
          breakpoint: 'desktops',
          enter: enterDesktop,
          exit: exitDesktop
        }); // end addFunc
      }; // end of jRespond
      
      var enterDesktop = function(){
        console.log('Entering desktop view.');
      };
      var exitDesktop = function(){
        console.log('Leaving desktop view.');
      };
      
      // neuter console when it should not be running
      if (!DEBUG_MODE_ON) {
        console = console || {};
        console.log = function(){};
      };  // end of neuter console
      
    }); // end body.once
    // there should be noting below this line - otherwise, javascript is exec

  }
};
})(jQuery, Drupal, this, this.document);
