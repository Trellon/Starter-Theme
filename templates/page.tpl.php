<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>
<div id="page">

  <header class="header" id="header" role="banner">
    <div class="section-wrapper">

      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo">
        	<!--  <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" />  -->
        	<div id="site-logo"></div>
				</a>
				
      <?php endif; ?>
  
      <?php if ($site_name || $site_slogan): ?>
        <div class="header__name-and-slogan" id="name-and-slogan">
          <?php if ($site_name): ?>
            <h1 class="header__site-name" id="site-name">
              <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
            </h1>
          <?php endif; ?>
  
          <?php if ($site_slogan): ?>
            <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
          <?php endif; ?>
        </div>
      <?php endif; ?>
  
      <?php if ($secondary_menu): ?>
        <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
          <?php print theme('links__system_secondary_menu', array(
            'links' => $secondary_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => $secondary_menu_heading,
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
      <?php endif; ?>
  
      <?php print render($page['header']); ?>
      
      <div id="menu-container">
      
        <nav id="main-menu" role="navigation" tabindex="-1">
          <?php
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
				<nav id="store-menu" role="navigation" tabindex="-1">
					<?php 
						$store_menu = menu_navigation_links('menu-ajf-store-menu');
						print theme('links__menu_home_page_right_sidebar_men', array(
							'links' => $store_menu,
							'attributes' => array(
								'class' => array('links', 'inline', 'clearfix'),
							),
						));
					?>			
				</nav>
				<nav id="about-menu" role="navigation" tabindex="-1">
					<?php
	       	   $about_menu = menu_navigation_links('menu-ajf-about-menu');
	       	   print theme('links__menu_home_page_right_sidebar_men', array(
	       	   		'links' => $about_menu,
	       	   		'attributes' => array(
								'class' => array('links', 'inline', 'clearfix'),
							),
						));
					?>
				</nav>      
      
      </div>
    </div>
  </header>
  
  <?php if (!drupal_is_front_page()): ?>
	  <section id="main-navigation">
	    <div class="section-wrapper">
				<?php print render($title_prefix); ?>
					<?php if ($title): ?>
						<h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
					<?php endif; ?>
				<?php print render($title_suffix); ?>
	    
	      <?php print render($page['navigation']); ?>
	    </div>
	  </section>
  <?php endif; ?>
	  
  <?php if (!empty($page['above_content_one'])): ?>
    <section id="above-content-one">
      <div class="section-wrapper">
        <?php print render($page['above_content_one']); ?>
      </div>
    </section>
  <?php endif; ?>
  
  <?php if ($page['above_content_two']): ?>
    <section id="above-content-two">
      <div class="section-wrapper">
        <?php print render($page['above_content_two']); ?>
      </div>
    </section>
  <?php endif; ?>
  
  <?php if ($page['above_content_three']): ?>
    <section id="above-content-three">
      <div class="section-wrapper">
        <?php print render($page['above_content_three']); ?>
      </div>
    </section>
  <?php endif; ?>

  <section id="main">
    <div class="section-wrapper">
      <div id="content" class="column" role="main">
        <?php print render($page['highlighted']); ?>
        <?php print $breadcrumb; ?>
        <a id="main-content"></a>
        <?php print $messages; ?>
        <?php print render($tabs); ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?>
          <ul class="action-links"><?php print render($action_links); ?></ul>
        <?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
      </div>
      
      <?php
        // Render the sidebars to see if there's anything in them.
        $sidebar_first  = render($page['sidebar_first']);
        $sidebar_second = render($page['sidebar_second']);
      ?>
  
      <?php if ($sidebar_first || $sidebar_second): ?>
        <aside class="sidebars">
          <?php print $sidebar_first; ?>
          <?php print $sidebar_second; ?>
        </aside>
      <?php endif; ?>
    </div>

  </section>

  <?php if ($page['below_content_one']): ?>
    <section id="below-content-one">
      <div class="section-wrapper">
        <?php print render($page['below_content_one']); ?>
      </div>
    </section>
  <?php endif; ?>
  
  <?php if ($page['below_content_two']): ?>
    <section id="below-content-two">
      <div class="section-wrapper">
        <?php print render($page['below_content_two']); ?>
      </div>
    </section>
  <?php endif; ?>
  
  <?php if ($page['below_content_three']): ?>
    <section id="below-content-three">
      <div class="section-wrapper">
        <?php print render($page['below_content_three']); ?>
      </div>
    </section>
  <?php endif; ?>

  <?php print render($page['footer']); ?>

</div>

<?php print render($page['bottom']); ?>
