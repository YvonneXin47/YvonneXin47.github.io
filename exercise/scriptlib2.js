$(document).ready(function(){
    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appck1ixyjJBoAosx/%E4%B8%8A%E6%B5%B7?api_key=keyx6ScOw6mCv5Vc4";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.poi);
                       items.push(value.fields.intro);
                       items.push(value.fields.location);
                       items.push(value.fields.time);
                       dataSet.push(items);
                }); // end .each
             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "poi",
                       defaultContent:""},
                     { title: "intro",
                       defaultContent:"" },
                     { title: "location",
                       defaultContent:""},
                     { title: "time",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button
}); // document ready
