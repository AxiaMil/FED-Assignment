$(function() {
	$('#navigation a').each(function(){
		var $this = $(this);
        $this.hover(function(){
            var r=Math.floor(Math.random()*41)-30;
            $this.css({
                '-moz-transform':'rotate('+r+'deg)',
                '-webkit-transform':'rotate('+r+'deg)',
                'transform':'rotate('+r+'deg)'
                });
            $('#content').css({
                '-moz-transform':'rotate('+r+'deg)',
                '-webkit-transform':'rotate('+r+'deg)',
                'transform':'rotate('+r+'deg)'
                });
        },
            function(){
                $this.css({
                    '-moz-transform':'rotate('+'0deg)',
                    '-webkit-transform':'rotate('+'0deg)',
                    'transform':'rotate('+'0deg)'
                    });
                $('#content').css({
                    '-moz-transform':'rotate('+'0deg)',
                    '-webkit-transform':'rotate('+'0deg)',
                    'transform':'rotate('+'0deg)'
                    });
            }
        )
		
	});
	
});