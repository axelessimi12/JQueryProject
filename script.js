$(document).ready(function(){

    var $mainMenItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenItems.length,
    openedIndex = 2,

    init = function(){

    bindEvents();

        if(validIndex(openedIndex)){
            animateItem($mainMenItems.eq(openedIndex),true,900);
        }
    },

    bindEvents = function(){
        $mainMenItems.children(".images").click(function(){

            var newIndex =$(this).parent().index(),
            $item = $mainMenItems.eq(newIndex);
    
            if(openedIndex === newIndex){
                animateItem($item, false, 250);
                openedIndex = -1;
            }
            else{
                if(validIndex(newIndex)){
                    animateItem($mainMenItems.eq(openedIndex),false,250);
                    openedIndex = newIndex;
                    animateItem($item,true,250);
                }
            }
    
           // openedIndex = newIndex;
    });

    $(".button").hover(
        function(){
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered");
        }
    );

    $(".button").click(function(){
        var newIndex = $(this).index();
        $item = $mainMenItems.eq(newIndex);

        if(openedIndex === newIndex){
            animateItem($item, false, 250);
            openedIndex = -1;
        }
        else{
            if(validIndex(newIndex)){
                animateItem($mainMenItems.eq(openedIndex),false,250);
                openedIndex = newIndex;
                animateItem($item,true,250);
            }
        }

    })

};

    validIndex = function(indexToCheck){
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },

    animateItem = function($item, toOpen, speed){
    var $colorImage = $item.find(".color"),
    itemParam = toOpen ? {width:"420px"}: {width:"140px"},
    colorImageParam = toOpen ? {left:"0px"}: {left:"140px"};
    $colorImage.animate(colorImageParam,speed);
    $item.animate(itemParam,speed);
    },

    checkAndAnimateItem = function(indexToCheckAndAnimate){

        if(openedIndex === indexToCheckAndAnimate){
            animateItem($mainMenItems.eq(indexToCheckAndAnimate), false, 250);
            openedIndex = -1;
        }
        else{
            if(validIndex(newIndex)){
                animateItem($mainMenItems.eq(openedIndex),false,250);
                openedIndex = indexToCheckAndAnimate;
                animateItem($$mainMenItems.eq(openedIndex),true,250);
            }
        }

    }

    init();

});