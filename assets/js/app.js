$(document).ready(function() {
    // Initial
    dynamicSpacing('.flex-text', $('.flex-text').parent());

    // FitText
    $(".responsive-text").fitText();

    // Fill Skillbar
    fillSkillBar(0);

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Change active class on scroll
    $(document).on("scroll", onScroll);

    setInterval(function(){
        adjustPortfolio();
        $('.site-loader').fadeOut('slow');
        $('.logo-inner span').removeClass('animate');
    }, 1000);
});

$(window).resize(function() {
    // Refresh
    dynamicSpacing('.flex-text', $('.flex-text').parent());

    // Fill Skillbar
    var viewportWidth = $(window).width();
    $('.skill-bar span').removeClass('fill');
    if (viewportWidth <= 450) {
        fillSkillBar(1);
    } else {
        fillSkillBar(0);
    }

    // Resize Portfolio Setup
    adjustPortfolio();
});

$("#contact-form").on("submit", function(e) {
    e.preventDefault();
    var form    = $(this);
    var button  = $("#contact-form button");
    var alert   = $('.submit-alert');
    var name    = $('.form-name');
    var email   = $('.form-email');
    var message = $('.form-message');
    $.ajax({
        url: "https://formspree.io/mr.niklakhani@gmail.com",
        method: "POST",
        data: {
            name: name.val(),
            email: email.val(),
            message: message.val()
        },
        dataType: "json",
        beforeSend: function() {
            button.attr('disabled', true);
            button.text('Sending..');
        },
        success: function(data) {
            if(data.success == 'email sent') {
                alert.text('Thank you for contacting, i\'ll contact back you soon!');
                name.val('');
                email.val('');
                message.val('');
            } else {
                alert.text('Something is wrong, please try again!');
            }
        },
        error: function() {
            alert.text('Make sure that all fields are valid!');
        },
        complete: function() {
            button.attr('disabled', false);
            button.text('Send');
            alert.fadeIn();
        }
    });
});

$('.submit-alert').on('click', function(e) {
    $(this).slideUp();
});

function adjustPortfolio() {
    $('.folio').masonry({
        itemSelector: '.folio-group'
    });
}

function fillSkillBar(left) {
    // Skillbar
    if (left == 1) {
        var flag = false;
        $('.skill-bar').each(function() {
            var fill = $(this).data('fill');
            if (flag) {
                flag = true;
            } else {
                for (var i = 1; i <= fill; i++) {
                    $(this).children('span:nth-child(' + i + ')').addClass('fill');
                }
                flag = false;
            }
        });
    } else {
        var flag = false;
        $('.skill-bar').each(function() {
            var fill = $(this).data('fill');
            if (flag) { // Right 
                for (var i = 10; i >= 10 - fill + 1; i--) {
                    $(this).children('span:nth-child(' + i + ')').addClass('fill');
                }
                flag = false;
            } else { // Left
                for (var i = 1; i <= fill; i++) {
                    $(this).children('span:nth-child(' + i + ')').addClass('fill');
                }
                flag = true;
            }
        });
    }
}

function dynamicSpacing(full_query, parent_element) {
    $(full_query).css('letter-spacing', 0);
    var content = $(full_query).html();
    var original = content;
    content = content.replace(/(\w|\s)/g, '<span>$1</span>');
    $(full_query).html(content);

    var letter_width = 0;
    var letters_count = 0;
    $(full_query + ' span').each(function() {
        letter_width += $(this).width();
        letters_count++;
    });

    var h1_width = $(parent_element).width();

    var spacing = (h1_width - letter_width) / (letters_count - 1);

    $(full_query).html(original);
    $(full_query).css({
        'letter-spacing': spacing,
        'margin-right': -spacing
    });
}

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('#nav a').each(function() {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('#nav ul li a').removeClass("active");
            currentLink.addClass("active");
        } else {
            currentLink.removeClass("active");
        }
    });
}