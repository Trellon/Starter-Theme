# Starter-Theme

This is a zen subtheme used for starting a new theming project. It includes a Gruntfile that enables libsass, livereload, kss-stylesheets 
and a number of other features to make your theming experience more pleasurable.

This theme is organized around the following principles:

1. SMACSS compliant with well organized code
2. Beautiful, attractive tyopgrahy presented in a uniform way
3. Emphasis on horizontal regions spanning the width of the browser
4. Mobile first apporach with well defined breakpoints used throughout the theme
5. Very specific application of selectors using mixins instead of markup (similar to Zen Grids)
6. Strong workflow production stack to allow efficient theming

# Requirements

* Grunt - http://gruntjs.com/getting-started#installing-the-cli
* Bower - http://bower.io/#install-bower
* Drupal

# Instructions for Getting Started

There are a number of ways to get started with this theme.

## Overview

You have to set up your theme in order to get started.

1. Install components with bower

2. Install components with npm

3. Start theming

## Quickstart

_Make sure you have installed <a href="http://gruntjs.com/getting-started#installing-the-cli" target="_blank">Grunt</a> and <a href="http://bower.io/#install-bower" target="_blank">Bower</a> before you start._

    // install all bower components
    bower install
    // install the grunt components
    npm install --save-dev
    grunt --force

# Included components

Gruntfile.js includes a number of components to make theming easier.

_From Grunt_

1. grunt-sass: libsass, for lightning fast SASS compilation.
2. grunt-contrib-watch: livereload support for viewing changes in your browser without refreshing the page.
3. grunt-kss: creates KSS styleguides.
4. grunt-contrib-copy: for coppying files around in your theme.

_From Bower_

1. Sassy-Buttons: for fancy buttons.
2. compass-mixins: a replacement for Compass that works with libsass.
3. compass-breakpoint: a media query mixin that sometimes works with libsass (we usually find another way).
4. zen-grids: This is Zen Grids 2, used in place of the version that comes with zen.
5. breakpoint-sass: used for creating breakpoints.

