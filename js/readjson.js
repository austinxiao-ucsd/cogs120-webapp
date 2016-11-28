
        $(document).ready(function() { 
          $.getJSON('result.json', function(jd) {
            $("#task1Name_ID").text(jd.task1);
            $("#task1Infor_ID").text(jd.des1);
            $("#task1Due_ID").text(jd.dueTime1);
            $("#task2Name_ID").text(jd.task2);
            $("#task2Infor_ID").text(jd.des2);
            $("#task2Due_ID").text(jd.dueTime2);
          });
        });

            $(document).on('click', '.panel-heading span.clickable', function(e){
            var $this = $(this);
        	if(!$this.hasClass('panel-collapsed')) {
        		$this.parents('.panel').find('.panel-body').slideUp();
        		$this.addClass('panel-collapsed');
        		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        	} else {
        		$this.parents('.panel').find('.panel-body').slideDown();
        		$this.removeClass('panel-collapsed');
        		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        	}
      })
