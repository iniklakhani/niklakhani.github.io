---
layout: post
title:  "WordPress Loop"
date: 2014-12-25 22:52 +5:30
permalink: blog/:categories/:title/
featured: WordPress-Loop.jpg
is_post: true

excerpt: The WordPress loop is a list of all or limited number of post and page entries in database.
description: WordPress Loop...The WordPress loop is a list of all or limited number of post and page entries in database. It is the main part of each WordPress theme...
vertical: Article
categories: articles
tags: ['WordPress', 'PHP', 'Loop']
comments: true
---

<p>The WordPress loop is a list of all or limited number of post and page entries in database. It is the main part of each WordPress theme and core of every WordPress powered site. It cycles through posts that allow us to display them in any manner we want.</p>

<figure>
	<img src="/blog/uploads/2014/12/WordPress-Loop.jpg" alt="WordPress Loop" />
	<figcaption>WordPress Loop</figcaption>
</figure>

<p>Before we start, let’s see how the heck we can structure this loop.</p>

<ol>
<li>
Start the loop
</li>
<li>
Do something in loop
</li>
<li>
End the loop
</li>
</ol>
<h2>The Loop</h2>

<p>The simple example of WordPress loop is:</p>

{% highlight php %}
<?php if ( have_posts() ): while ( have_posts() ) : the_post(); ?>

<?php endwhile; endif; ?>
{% endhighlight %}

<h6>OR</h6>

{% highlight php %}
<?php
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post(); 
		//
		// Post Content here
		//
	} // end while
} // end if
?>
{% endhighlight %}

<p>The above is a very simple loop but WordPress provides four ways to get the customized one.</p>

<ol>
<li>
<a href="#loop">Default loop</a>
</li>
<li>
<a href="#query_posts">Using query_posts()</a>
</li>
<li>
<a href="#wp_query">Using WP_Query()</a>
</li>
<li>
<a href="#get_posts">Using get_posts()</a>
</li>
</ol>

<p>All above looping techniques are pretty useful in various situations. These four loops can be used in simple loops, multiple loops as well as custom loops in your WordPress theme.</p>

<h3>What we can display within loop</h3>

<p>There are lots of things that we can display in the loop, such as post title, content, excerpt, post metadata etc. Some of them are given below:</p>

<ul>
	<li>the_ID</li>
	<li>the_title</li>
	<li>the_time</li>
	<li>the_shortlink</li>
	<li>the_author</li>
	<li>the_category</li>
	<li>the_tags</li>
	<li>the_excerpt</li>
	<li>the_content</li>
	<li>next_post_link</li>
	<li>previous_post_link</li>
	<li>etc.</li>
</ul>

<p>Let’s start using WordPress loop in different ways:</p>

<h3 id="loop">Default Loop</h3>

<p>The WordPress default <a href="http://codex.wordpress.org/The_Loop" target="_blank">loop</a> is as under that we already seen at the starting of article:</p>

{% highlight php %}
<?php if ( have_posts() ): while ( have_posts() ) : the_post(); ?>
	// Display the Post
<?php endwhile; ?>
	// Next/Previous navigation or numeric pagination
<?php else : ?>
	// what to do if there is no any post/page? (Post not found)
<?php endif; ?>
{% endhighlight %}

<p>This loop is only work with default post type called "post" and it is not able to modify global query. It displays certain number of posts that is specified from WordPress admin.</p>

<h3 id="query_posts">Using query_posts()</h3>

<p>The <code>query_posts()</code> is used to alter the main query that we’ve seen. It puts the main query to one side and put new query to another side. When we use this method then we must have to call <code>wp_reset_query()</code> function to restore main query.</p>


<p>For example, if we want to display 5 posts on homepage instead of 10 latest posts.</p>

{% highlight php %}
global $query_string;
query_posts( $query_string . 'posts_per_page=5' );
{% endhighlight %}

<p>Kindly note that, if we remove <code>$query_string</code> variable from the <code>query_posts()</code> then it will remove the default query and replaces it with your given variable. It means paging won’t work and some other stuff, so remove it if you know what you’re doing otherwise you’ll do something smart with your website.(actually i doubt it)</p>

<h6>Basic usage</h6>

{% highlight php %}
<?php
	// The Query
	query_posts( $args );
	// The Loop
	while ( have_posts() ) : the_post();
		// Display main post content
	endwhile;
	// Reset Query
	wp_reset_query();
?>
{% endhighlight %}

<h3 id="wp_query">Using WP_Query()</h3>

<p>The <a href="http://codex.wordpress.org/Function_Reference/WP_Query" target="_blank">WP_Query()</a>, provide full control over customization of loops. It is used to modify default loop, it is similar to <code>query_posts()</code>.</p>

<p>Let’s see the query that fetches multiple custom post type:</p>

{% highlight php %}
$wp_query = new WP_Query( 'post_type[]=post_type_1&post_type[]=post_type_2' );
{% endhighlight %}

<p>Excluding specific category from being displayed:</p>

{% highlight php %}
$wp_query = new WP_Query( 'cat=-10' ); // It’ll exclude category 9.
{% endhighlight %}

<h6>Basic usage</h6>

{% highlight php %}
<?php
	$wp_query = new WP_Query( 'post_type[]=post_type_1&post_type[]=post_type_2&cat=-10' );
	while($wp_query->have_posts()) : $wp_query->the_post();
		// Main post content
		$wp_query->the_post();
	endwhile;
	// Restore original data
	wp_reset_postdata();
?>
{% endhighlight %}

<p><strong>Note</strong>: If you use <code>the_post()</code> with your query, you need to run <code>wp_reset_postdata()</code> to restore original post data.</p>

<h3 id="get_posts">Using get_posts()</h3>

<p>This is the best way to create multiple loops in WordPress theme. When you want to display post other than homepage like custom page templates, <a href="http://codex.wordpress.org/Template_Tags/get_posts" target="_blank">get_posts()</a> is the best choise.</p>

<h6>Basic usage</h6>

{% highlight php %}
<?php
	global $post; // compulsory
	$args = array( 'posts_per_page' => 5 ); // display 5 posts per page
	$posts = get_posts($args);

	foreach($posts as $post) : setup_postdata($post);
		// Post content
	endforeach;
?>
{% endhighlight %}

<p>You can use <code>get_posts()</code> function to create additional loops anywhere in your theme. It uses the same parameter as <code>query_posts()</code>, we can use it in sidebar or footer to create recent post widget or something else.</p>

<h2>More</h2>
<ul>
	<li>The Loop at <a href="http://codex.wordpress.org/The_Loop" target="_blank">Codex</a></li>
	<li>The Loop in Action at <a href="http://codex.wordpress.org/The_Loop_in_Action" target="_blank">Codex</a></li>
</ul>