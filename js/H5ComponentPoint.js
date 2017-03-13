/* 散点图表组件对象 */

var H5ComponentPoint =function ( name, cfg ) {
    var component =  new H5ComponentBase( name ,cfg );

    var base = cfg.data[0][1];   //  以第一个数据的 比例为大小的 100%

    //   输出每个 Point
    $.each( cfg.data,function( idx ,item ){

        var point = $('<div class="point point_'+idx+'" >');

        var name = $('<div class="name">'+item[0]+'</div>');
        var info = $('<div class="info">'+ item[2]+'</div>');

        name.append(info);
        point.append(name);


        var per =  (item[1]/base*100) + '%';

        point.width(per).height(per);

        if(item[3]){
            point.css('background-color',item[3]);
        }
        if(item[4] !== undefined && item[5]!== undefined ){
            point.css('left',item[4]).css('top',item[5]);
        }

        point.css('transition','all 1s '+idx*.5+'s')
        component.append( point );

    } );

    component.find('.point').on('click',function(){

        component.find('.point').removeClass('point_focus');
        $(this).addClass('point_focus');

        return false;
    }).eq(0).addClass('point_focus')

    return component;
}