Handlebars.registerHelper('when', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  else{
    return options.inverse(this);
  }
});
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
function loadNews(){
  var rt = ($(window).width() - ($( "#new" ).offset().left + $( "#new" ).outerWidth()));
  $( "#new" ).animate({
    maxWidth: "82%",

  }, 500 )
  .css({backgroundColor:"#fff"})
  $('#new').removeClass('col-md-7')
  //$('#new').addClass('col-md-12')
  getTemplateAjax('/templates/news.handlebars','#new',{})
}
function loadTrending(){
  $('#new').removeClass('col-md-7')
  $('#new').addClass('col-md-7')
}
function loadHot(){
  $('#new').removeClass('col-md-7')
  $('#new').addClass('col-md-8')
}
var navData = {
    logo: '/img/logo.jpg' ,
    links: [
            {title:'Home',href:'#',onClick:"loadNews()"},
            {title:'News',href:'#' ,onClick:"loadNews()"},
            {title:'Trending',href:'#',onClick:"loadTrending()"},
            {title:'Updates',href:'#',onClick:"loadNews()"},
            {title:'Whats Hot',href:'#',onClick:"loadHot()"},
            {title:'More',href:'#',onClick:"loadNews()"}
         ]
}
var CarouselData = {
    images:[
      {src:'/img/f.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/h.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/k.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/l.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/b.jpg',caption:'Da Les Lit at NMMU'},
      {src:'/img/c.jpg',caption:'Da Les Lit at NMMU'},
    ]
}

getTemplateAjax('/templates/nav.handlebars','#us',navData)
getTemplateAjax('/templates/carousel.handlebars','#new',CarouselData)
