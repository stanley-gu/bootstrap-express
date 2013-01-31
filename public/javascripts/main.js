///*global Backbone*/
//var MenuItem = Backbone.Model.extend({
//    defaults: {
//        title: "blank",
//        id: "blank",
//        active: false
//    },
//    initialize: function() {
//        this.set('el', $('li#' + this.id));
//        var model = this;
//        this.get('el').click(function() {
//            if (model.get('active')) {
//                model.set('active', false);
//            }
//            else {
//                model.set('active', true);
//            }
//            model.get('el').toggleClass('active');
//            //$('div#' + model.get('id')).toggleClass('hidden');
//            $('div#' + model.get('id')).slideToggle();
//        });
//    }
//});
//var MenuItems = Backbone.Collection.extend({
//    model: MenuItem,
//    render: function() {
//        console.log('rendering menu');
//        var activeItem = this.find(function(item) {
//            return item.get('active');
//        });
//        if (activeItem) {
//            $('div#home').addClass('hidden');
//        } else {
//            $('div#home').removeClass('hidden');
//        }
////        $('li#' + activeItem.get('id')).addClass('active');
//    }
//});
//$(document).ready(function() {
//    var syllabus = new MenuItem({
//        title: 'Syllabus',
//        id: 'syllabus'
//    });
//    var handouts = new MenuItem({
//        title: 'Handouts',
//        id: 'handouts'
//    });
//    var menu = new MenuItems([syllabus, handouts]);
//    menu.on('change', menu.render);
//});
