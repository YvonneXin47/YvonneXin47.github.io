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

            var contents = document.getElementById('title1').innerHTML="The Latest Five Months Records";

            var chart = c3.generate({
              bindto: '#chart_rw',
              data: {
              columns: [
             ['Wong Cheukying', 54, 54, 41, 54, 49],
             ['Pun Waiching', 40.5, 46, 54, 54, 54],
             ['Lei Sukwan', 40, 30, 20, 40, 30],
             ['Chan Wingtung', 38, 31, 34, 34, 40],
             ['Yeung Seuijing', 35, 35, 31, 24, 18.5],
             ['Lam Sukjing', 34, 17, 17, 23.5, 20.5],
             ['Jeng Jingyi', 31, 19, 12, 12, 0],
             ['Pun Chiuyi', 28, 30, 32, 25, 25],
             ['Hon Hinyan', 24.75, 23.75, 32, 37.5, 45],
             ['Jyu Houching', 24.5, 24.5, 35, 38, 29.5]
                ]
              }
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

              var contents = document.getElementById('title2').innerHTML="The Latest Five Months Records";

              var chart = c3.generate({
                bindto: '#chart_rm',
                data: {
                columns: [
               ['Ngaan Dungcyun', 57, 49.5, 49.5, 46.5, 46.5],
               ['Geoi Zunggong', 51, 51, 51, 54, 46],
               ['Wong Sungtin', 41, 47, 49.5, 49.5, 39],
               ['Mou Leoi', 31, 36, 36, 28, 20],
               ['Ceoi Zeonman', 30, 14, 14, 14, 24],
               ['Zeng Waiciu', 28, 25, 18, 18, 21],
               ['Gong Singgwong', 25, 25, 28, 19.5, 19.5],
               ['Luk Manwaa', 23, 17.5, 17.5, 10.75, 4],
               ['Dung Saiman', 21.75, 20.25, 20.25, 14.25, 12.5],
               ['Sin Syuwun', 21, 21, 9, 9, 14]
                  ]
                }
              });

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

            var contents = document.getElementById('title3').innerHTML="The Latest Five Months Records";

            var chart = c3.generate({
              bindto: '#chart_cw',
              data: {
              columns: [
             ['Zeng Hungting', 54, 49, 44, 33.5, 28.5],
             ['Luk Jinji', 46, 57, 57, 50, 38.5],
             ['Lei Waihong', 37, 41, 40.5, 40.5, 32],
             ['Sam Gitpui', 36.5, 45, 45, 48, 43],
             ['Tung Gaawai', 35.25, 24.75, 24.75, 23.25, 23.5],
             ['Lau Zicing', 32.5, 24, 4, 14, 14],
             ['Lin Jikei', 27.5, 27.5, 19.25, 15.5, 7],
             ['Sou Saujing', 24.75, 24.75, 21.75, 15.5, 16.75],
             ['Ngai Sukman', 23.5, 23.5, 21.75, 12.25, 7],
             ['Coi Junlung', 23, 23, 30, 37, 40]
                ]
              }
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

            var contents = document.getElementById('title4').innerHTML="The Latest Five Months Records";

            var chart = c3.generate({
              bindto: '#chart_cm',
              data: {
              columns: [
             ['Jan Gaaging', 43.25, 23.25, 23.25, 6.25, 0],
             ['Lei Housam', 41, 48, 54, 57, 51],
             ['Lau Zihung', 41, 51, 51, 51, 37],
             ['Ceoi Zeongit', 40.5, 30.5, 21, 21, 7],
             ['Wong Waajan', 38.5, 38.5, 46, 48, 31],
             ['Jip Puilam', 38.5, 36.5, 29.5, 29.5, 26.75],
             ['Loeng Wingci', 33, 33, 25.25, 25.25, 15.25],
             ['Can Minghang', 29.5, 29.5, 14.75, 9.75, 16.25],
             ['Gwaan Zeonhou', 24.75, 14.75, 2.75, 6, 7.25],
             ['Zoeng Kaihim', 22, 19, 20.75, 20.5, 16]
                ]
              }
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
