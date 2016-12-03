---
layout: post
title:  "Set Up Zoho Mail for Custom Domain"
date: 2014-10-09 23:28 +5:30
permalink: blog/:categories/:title/
featured: domain-ownership.png
is_post: true

excerpt: Zoho is pretty cool email service comes with premium and free service. If you are a small business owner
description: Set Up Zoho Mail for Custom Domain...Gmail, Yahoo, Live and more other are email service that provide you a mail service with their domain name(i.e. ...
vertical: Tutorial
categories: tutorials
tags: ['Mail', 'Zoho']
comments: true
---

<p>Gmail, Yahoo, Live and more other are email service that provide you a mail service with their domain name(i.e. you@gmail.com and so on.) but Outlook, Zoho etc. are email service on a custom web domain so that your email address reads like <strong>you@yourdomain.com</strong>. This services are similar to Google Apps which is now available with premium cycle.</p>

<p>Zoho is pretty cool email service comes with premium and free service. If you are a small business owner then free service is good for you. Free mail service is not bad because it provides following features.</p>

<ul>
	<li>Email Hosting</li>
	<li>Calender</li>
	<li>Docs</li>
	<li>Dropbox Integration</li>
	<li>Chat Integration and many more.</li>
</ul>

<p>Let's implement this process step by step.</p>

<h5>Step #1:</h5>

<p>After creating your free account on Zoho Mail, add your domain name for email hosting and you need to verify your domain owenership.</p>

<figure>
	<img src="/blog/uploads/2014/10/domain-ownership.png" alt="Domain Ownership" />
	<figcaption>Domain Ownership</figcaption>
</figure>

<p>Now, add above generated code as CNAME record in your cpanel,</p>

<ul>
	<li>In the Name/ Host/ Alias/ CNAME add the code generated in Zoho <strong>zb********</strong></li>
	<li>In the Value/ Points To/ Destination field add <strong>zmverify.zoho.com</strong></li>
</ul>

<p>After that, click on verify and your <strong>Step #1</strong> is completed. You can also verify your domain ownership via TXT method and HTML file upload method. <a href="https://adminconsole.wiki.zoho.com/set-up/Domain-verification-steps.html#TXT_Record_Method" title="See Tutorial" target="_blank">See Tutorial</a></p>

<h5>Step #2:</h5>

<p>This is very simple step, in this step you have to create your email account which should like you@yourdomain.com.</p>

<h5>Step #3:</h5>

<p>This is very critical step, you need to change your MX records from your cpanel but don't forgot to remove default MX records for your email service that already provided by your domain registrar otherwise you will not able to receive email in Zoho mail.</p>

<strong>MX Record 1:</strong>

<ul>
<li>Specify the '<strong>Name</strong>'/'<strong>Host</strong>' as '<strong>@</strong>' or leave it blank as an empty box. In case your domain provider does not accept the values, provide your domain name directly in the text box.</li>
<li>Specify the <strong>Value/ Points To/ Mail Server/ Records</strong> as '<strong>mx.zohomail.com</strong>' for the first record.</li>
<li>Select the priority to <strong>10</strong> or any lower number as supported by your registrar.</li>
</ul>

<strong>MX Record 2:</strong>

<ul>
<li>Specify the '<strong>Name</strong>'/'<strong>Host</strong>' as '<strong>@</strong>' or leave it blank as an empty box. In case your domain provider does not accept the values, provide your domain name directly in the text box.</li>
<li>Specify the <strong>Value/ Points To/ Mail Server/ Records</strong> as '<strong>mx2.zohomail.com</strong>' for the first record.</li>
<li>Select the priority to <strong>20</strong> or any greater value than first record.</li>
</ul>

<p><strong>Note:</strong> If the TTL is editable, provide the lowest possible value for the changes to effect as early as possible.</p>

<p>Save your DNS zone file and you are ready to Go. You can verify that your MX records are added properly or not using following command in Command Prompt.</p>

<ul>
	<li>> nslookup</li>
	<li>> set query=mx</li>
	<li>> yourdomain.com</li>
</ul>
<p>And you will see the following result if you had added MX record properly.</p>

<figure>
	<img src="/blog/uploads/2014/10/mx-nslookup.png" alt="MX Records Lookup" />
	<figcaption>MX Records Lookup</figcaption>
</figure>

<p>Yeah, that was a final step, now you are ready to send and receive mail with your awesome domain name.</p>

<p><strong>Tip:</strong> If you are not able to receive emails to your newly set up email accounts then make sure that there is other MX records pointing to <strong>@</strong> or the naked domain.</p>

<p>Still, if you have any issue with your custom email account then fill free to contact me or comment please.</p>

<h2>More</h2>
<ul>
	<li><a href="https://www.zoho.com/mail/help/email-hosting-with-zoho.html" title="Email Hosting with Zoho" target="_blank">Documentation: Email Hosting with Zoho</a></li>
</ul>