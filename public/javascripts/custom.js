$(function() {
    //tab js
    $('.tabs-nav a').click(function() {

        // Check for active
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        let currentTab = $(this).attr('href');
        $('.tabs-content > div').hide();
        $(currentTab).show();

        return false;
    });
    //progressbas js
    if ($(".nx-progress-bar").length > 0) {
        var widthOfitem = $('.nx-progress-bar .nx-progressbar-item').width();
        $('head').append('<style>.nx-progress-bar .nx-progressbar-item .nx-progressbar-value::before{content:"";position:absolute;height:100%;z-index:-1;background-color:#eff1f4;inset:0;width:' + widthOfitem + 'px;}</style>');
        $('.nx-progress-bar .nx-progressbar-item .nx-progressbar-value').each(function() {
            var value = $(this).data('percent');
            $(this).prev('.nx-value').text(value + '%');
            $(this).animate({ 'width': value + '%' }, 3000);
            $(this).prev('.nx-value').animate({ 'left': value + '%' }, 3000);
        });
    }
});