<?php get_header(); ?>
	<div class="intro firstintro">
		<div class="intro-benefits">
			<div class="intro-benefits-benefit"><div class="intro-benefits-benefit-logo ok"></div>Good Service</div>
			<div class="intro-benefits-benefit"><div class="intro-benefits-benefit-logo tool"></div>High performance</div>
			<div class="intro-benefits-benefit noborder"><div class="intro-benefits-benefit-logo star"></div>Experience</div>
		</div>
		<ul class="intro-slider">
			<li class="intro-slider-item item1" value="1">1</li>
			<li class="intro-slider-item item2" value="2">2</li>
			<li class="intro-slider-item item3" value="3">3</li>
			<li class="intro-slider-item item4" value="4">4</li>
		</ul>
	</div>
	<div class="about">
		<div class="about-additional"><div class="about-additional-text">additional task</div></div>
		<div class="about-title">about us</div>
		<div class="about-info">
			<div class="about-info-pic"></div>
			<div class="about-info-text">
				<div class="about-info-text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero dui, pharetra vitae tempus id, interdum in elit. Fusce cursus interdum auctor. Proin et aliquam tellus, vel egestas sapien.</div>
				<div class="about-info-text-list">
					<div class="about-info-text-list-item first">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
					<div class="about-info-text-list-item second">Deleniti fuga minus molestias omnis perferendis voluptatem.</div>
					<div class="about-info-text-list-item third">Laboriosam maiores nisi nulla recusandae repellendus vero.</div>
					<div class="about-info-text-list-item fourth">Corporis, eos impedit pariatur quaerat quod reprehenderit?</div>
					<div class="about-info-text-list-item fifth">Dolore fuga illo iure quas quisquam voluptates.</div>
				</div>
			</div>
		</div>
	</div>
	<div class="news">
		<div class="container">
			<div class="news-title">latest news</div>

			<?php if( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<div class="news-block">
				<div class="news-block-pic blockpic1"></div>
				<div class="news-block-text">
					<div class="news-block-text-title"><?php the_title(); ?></div>
					<div class="news-block-text-date">posted <?php the_date(); ?></div>
					<div class="news-block-text-text"><?php the_excerpt(); ?></div>
					<div class="news-block-text-button">read more</div>
				</div>
			</div>
			<?php endwhile; ?>

			<?php else: ?>

			<?php endif; ?>
			<div class="news-block">
				<div class="news-block-pic blockpic2 newsblockright"></div>
				<div class="news-block-text">
					<div class="news-block-text-title">news title</div>
					<div class="news-block-text-date">posted 10.12.15</div>
					<div class="news-block-text-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias asperiores assumenda consequatur cum cumque delectus doloremque doloribus ducimus earum laboriosam laudantium nam necessitatibus nostrum praesentium quisquam ratione repellendus rerum sed tempore tenetur vel voluptate voluptatibus. Ab consectetur corporis delectus harum iusto laboriosam maxime molestiae odio quisquam quod quos sit temporibus, totam vel veniam veritatis?[...]</div>
					<div class="news-block-text-button">read more</div>
				</div>
			</div>
		</div>
	</div>
	<div class="testimonials">
		<div class="testimonials-title">testimonials</div>
		<div class="testimonials-slider">
			<div class="testimonials-slider-item left">
				<div class="testimonials-slider-item-pic man1"></div>
				<div class="testimonials-slider-item-text">
					<div class="testimonials-slider-item-text-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim facilis fugiat illum ipsam laudantium libero non reprehenderit totam ullam?</div>
					<div class="testimonials-slider-item-text-name">-Lorem ipsum</div>
				</div>
			</div>
			<div class="testimonials-slider-item center">
				<div class="testimonials-slider-item-pic woman"></div>
				<div class="testimonials-slider-item-text">
					<div class="testimonials-slider-item-text-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim facilis fugiat illum ipsam laudantium libero non reprehenderit totam ullam?</div>
					<div class="testimonials-slider-item-text-name">-Lorem ipsum</div>
				</div>
			</div>
			<div class="testimonials-slider-item right">
				<div class="testimonials-slider-item-pic man2"></div>
				<div class="testimonials-slider-item-text">
					<div class="testimonials-slider-item-text-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus enim facilis fugiat illum ipsam laudantium libero non reprehenderit totam ullam?</div>
					<div class="testimonials-slider-item-text-name">-Lorem ipsum</div>
				</div>
			</div>
		</div>
		<div class="testimonials-slider-buttons">
			<div class="testimonials-slider-buttons-button man1small"></div>
			<div class="testimonials-slider-buttons-button womansmall"></div>
			<div class="testimonials-slider-buttons-button man2small"></div>
		</div>
	</div>
	<?php get_footer(); ?>