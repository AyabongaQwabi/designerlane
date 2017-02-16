Handlebars.registerHelper('firstItem', function (array){return array[0]});
Handlebars.registerHelper('listItem', function (from, context, options){
    var item = "";
    for (var i = from;i<context.length; i++) {
        item = item + options.fn(context[i]);
    }
    return item;
});

function getTemplateAjax(path, target, jsonData) {
  var source;
  var template;

  $.ajax({
    url: path, //ex. js/templates/mytemplate.handlebars
    cache: true,
    success: function(data) {
      source    = data;
      template  = Handlebars.compile(source);
      $(target).html(template(jsonData));
    }
  });
}

var navData = {
    logo: '/img/logo.jpg' ,
    links: [
            {title:'Home',href:'#'},
            {title:'News',href:'#'},
            {title:'Trending',href:'#'},
            {title:'Updates',href:'#'},
            {title:'Whats Hot',href:'#'},
            {title:'More',href:'#'}
         ]
}
var CarouselData = {
    images:[
      {src:'/img/h.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/k.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/l.jpg',caption:'Da Les Lit at NMMU'},
    ]
}

getTemplateAjax('/templates/nav.handlebars','#us',navData)
getTemplateAjax('/templates/carousel.handlebars','#new',CarouselData)
