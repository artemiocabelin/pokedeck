$(document).ready(function(){

    for(var i=1;i<= 151;i++){
        $('#container').append('<img class="monster" id=\"'+i+'\"src=\"http://pokeapi.co/media/img/'+i+'.png\" alt=\"img'+i+'\">');
    }
    
    $('.monster').on('mouseover',function(){
        var monsterId = $(this).attr('id');
        // console.log(monsterId);
        $('#'+monsterId).click(function(){
            $.get('http://pokeapi.co/api/v2/pokemon/'+monsterId+'/', function(res) {
                $('.pop').remove();
                // name
                var title = res.name;
                var header = '<h1>'+title+'</h1>'
                // image
                var pic = '<img class="monster" id=\"'+monsterId+'\" src=\"http://pokeapi.co/media/img/'+monsterId+'.png\" alt=\"img'+monsterId+'\">'

                // powers array
                var powers = '';
                for (var i = 0;i<res.abilities.length;i++) {
                    powers += '<li>'+res.abilities[i].ability.name+'</li>';
                }
                var potent = '<h4>Types</h4><ul>'+powers+'</ul>';
                
                
                // height
                var tall = '<h4>Height</h4><p class="height_data">'+res.height+'</p>';

                // weight
                var heavy = '<h4>Weight</h4><p class="weight_data">'+res.weight+'</p>';

                $('#viewer').append('<div class="pop">'+header+pic+potent+tall+heavy+'</div>');


            },'json');
        });

    });

});