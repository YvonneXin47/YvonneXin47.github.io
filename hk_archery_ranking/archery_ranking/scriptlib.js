$(document).ready(function(){

     $("button#recurve_women").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Recurve%20Women?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.Ranking);
                      table1_items.push(value.fields.Name);
                      table1_items.push(value.fields.Club);
                      table1_items.push(value.fields.Score);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                    { title: "Ranking",
                      defaultContent:""},
                    { title: "Name",
                        defaultContent:"" },
                    { title: "Club",
                      defaultContent:"" },
                    { title: "Score",
                      defaultContent:""},
                ]
            });
       }); // end .getJSON
     }); // end .button

       $("button#recurve_men").click(function() {
         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Recurve%20Men?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Ranking);
                        table2_items.push(value.fields.Name);
                        table2_items.push(value.fields.Club);
                        table2_items.push(value.fields.Score);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);

              $('#table2').DataTable( {
                  data: table2_dataSet,
                  retrieve: true,
                  columns: [
                      { title: "Ranking",
                        defaultContent:""},
                      { title: "Name",
                          defaultContent:"" },
                      { title: "Club",
                        defaultContent:"" },
                      { title: "Score",
                        defaultContent:""},
                  ]
              } );
         }); // end .getJSON
     }); // end .button

     $("button#compound_women").click(function() {
       var table3_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Compound%20Women?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table3_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table3_items = [];
                      table3_items.push(value.fields.Ranking);
                      table3_items.push(value.fields.Name);
                      table3_items.push(value.fields.Club);
                      table3_items.push(value.fields.Score);
                      table3_dataSet.push(table3_items);
                      console.log(table3_items);
               }); // end .each
               console.log(table3_dataSet);

            $('#table3').DataTable( {
                data: table3_dataSet,
                retrieve: true,
                columns: [
                    { title: "Ranking",
                      defaultContent:""},
                    { title: "Name",
                        defaultContent:"" },
                    { title: "Club",
                      defaultContent:"" },
                    { title: "Score",
                      defaultContent:""},
                ]
            });
       }); // end .getJSON
     }); // end .button

     $("button#compound_men").click(function() {
       var table4_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/appoSSyxNcXWWvTf0/Compound%20Men?api_key=keyx6ScOw6mCv5Vc4&maxRecords=10&view=Grid%20view";
       var table4_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table4_items = [];
                      table4_items.push(value.fields.Ranking);
                      table4_items.push(value.fields.Name);
                      table4_items.push(value.fields.Club);
                      table4_items.push(value.fields.Score);
                      table4_dataSet.push(table4_items);
                      console.log(table4_items);
               }); // end .each
               console.log(table4_dataSet);

            $('#table4').DataTable( {
                data: table4_dataSet,
                retrieve: true,
                columns: [
                    { title: "Ranking",
                      defaultContent:""},
                    { title: "Name",
                        defaultContent:"" },
                    { title: "Club",
                      defaultContent:"" },
                    { title: "Score",
                      defaultContent:""},
                ]
            });
       }); // end .getJSON
     }); // end .button

    $("button#recurve_women").click(function(){
        $("#rw").slideToggle();
    });

    $("button#recurve_men").click(function(){
        $("#rm").slideToggle();
    });

    $("button#compound_women").click(function(){
        $("#cw").slideToggle();
    });

    $("button#compound_men").click(function(){
        $("#cm").slideToggle();
    });

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {
}); // document ready
