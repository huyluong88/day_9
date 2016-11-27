$(function() {
    $("li").draggable({
        helper: 'clone',
        connectToSortable: '#cart',
        appendTo: '#cart',
        drag: function(e, ui) {
            $(this).find("h3").text('Added to cart');
        }
    })

    $("#cart").sortable({
        sort: function() {
          // $(this).find("span").text('hi');
        },
    });


    $("#cart").droppable({

        out: function(event, ui) {
            var self = ui;
            ui.helper.off('mouseup').on('mouseup', function() {

                $(this).remove();
                // $(this).find("h3").text('');
            });
        },
    });

});



var source = $("#entry-template").html();
var template = Handlebars.compile(source);

var shop = [{
    img: "http://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/recipe_photos/30175_easy_pumpkin_pie.jpg",
    food: "Pumpkin slice",
    price: "5"
}, {
    img: "http://myfreshideas.com/wp-content/uploads/2012/06/The-Perfect-Turkey.jpg",
    food: "Turkey",
    price: "20"
}, {
    img: "http://savorysweetlife.com/wp-content/uploads/2010/11/momsstuffing.jpg",
    food: "Stuffing",
    price: "6"
}, {
    img: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/9/3/0/mashedpotatoes_s4x3.jpg",
    food: "Mashed Potatoes",
    price: "4"
}, {
    img: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2012/9/18/0/CCDFMSP1_Fresh-Cranberry-Sauce-recipe_s4x3.jpg",
    food: "Cranberries Sauce",
    price: "5"
}, {
    img: "http://images.latintimes.com/sites/latintimes.com/files/2015/11/24/thanksgiving-dinner.jpg",
    food: "Complete Thanksgiving Dinner",
    price: "150"
}, ];

for (var i = 0; i < shop.length; i++) {
    var html = template(shop[i]);
    $('#shopping').append(html)
}
