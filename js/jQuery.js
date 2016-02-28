

$("#searchterm").keyup(function(e){
        var q = $("#searchterm").val();
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $("#results").append("Results for <b>" + q + "</b>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" +
                encodeURIComponent(item.title) + "'>" + item.title + "</a>" +
                item.snippet + "</div>");
          });
        });
});


$("#randomsearch").click(function(e){
        //var q = $("#searchterm").val();
        $.getJSON("http://en.wikipedia.org/wiki/Special:Random",
        {
          //srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $("#results").append("Results for <b>" + q + "</b>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" +
                encodeURIComponent(item.title) + "'>" + item.title + "</a>" +
                item.snippet + "</div>");
          });
        });
});



/*
//MediaWiki API client
$('#randomsearch').off('click');
$('#randomsearch').on('click', function() {
    $('#randomsearch').trigger("click");
$.ajax({

    //url: "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=San_Francisco&imlimit=20"
    url: 'http://en.wikipedia.org/wiki/Special:Random',
    //url: '//www.wikidata.org/w/api.php',
    data: { action: 'wbgetentities', ids: mw.config.get('wgWikibaseItemId'), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
    //console.log('wb label', x.entities.Q39246.labels.en.value);
    //console.log('wb description', x.entities.Q39246.descriptions.en.value);
    $("#results").empty();
          $("#results").append("Results for <b>" + q + "</b>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" +
                encodeURIComponent(item.title) + "'>" + item.title + "</a>" +
                item.snippet + "</div>");
          })
  }
});
});

/*
var api = new mw.Api();
api.get( {
    action: 'query',
    meta: [ 'userinfo', 'siteinfo' ] // same effect as 'userinfo|siteinfo'
} ).done( function ( data ) {
    console.log( data );
} );


var url = ‘http://en.wikipedia.org/w/api.php?action=opensearch&search=value&format=json&callback=spellcheck‘;
var elem = document.createElement (‘script’);
elem.setAttribute (‘src’, url);
elem.setAttribute (‘type’,’text/javascript’);
document.getElementsByTagName (‘head’) [0].appendChild (elem);

*/


