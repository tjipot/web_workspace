<script type="text/javascript">
    var lists = $('.tab li');
    var contents = $('.content .inner');

    function bindEvent(){

        lists.each(function(index_li, li){
            $(this).on('click', function(event){

                lists.removeClass('tab-active');
                $(this).addClass('tab-active');

                contents.each(function(index_content, content){
                    if(index_li === index_content){
                        $(this).show();
                    }else{
                        $(this).hide();
                    }
                });
            });
        });
    }

    function init(){
        bindEvent();
    }

    init();
</script>