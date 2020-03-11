// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
// d3.json("samples.json").then((importedData) => {
//     console.log(importedData);
//     var data = importedData;

// function unpack(rows, index) {
//     return rows.map(function(row) {
//         return row[index];
//     });
// }

d3.json("samples.json").then((data) => {
    //  Create the Traces
    var trace1 = {
      x: data.organ,
      y: data.survival.map(val => Math.sqrt(val)),
      type: "box",
      name: "Cancer Survival",
      boxpoints: "all"
    };
  
    // Create the data array for the plot
    var data = [trace1];
  
    // Define the plot layout
    var layout = {
      title: "Square Root of Cancer Survival by Organ",
      xaxis: { title: "Organ" },
      yaxis: { title: "Square Root of Survival" }
    };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("plot", data, layout);
  });
  

//     // Grab values from the data json object to build the plots
//     var names = data.names;
//     console.log(names);

// //     // Create an array of the numbers
//     var sampleValues = unpack(data.samples, 2);
//     console.log(sampleValues);    
//     // var otuLabels = Object.values(data.otu_labels);
//     // var otuIds = Object.values(data.otu_ids);

//     if (sampleValues === undefined) { return undefined;} // return undefined for undefined 
//     if (sampleValues === null) { return null;} // null unchanged

//     console.log(sampleValues);

//     // Create an array of music provider labels
//     var labels = Object.keys(data.us);

//   // Sort the data array using the sample values
//     data.sort(function(a, b) {
//         return parseFloat(b.sample_values) - parseFloat(a.sample_values);
//     });
//   // Slice the first 10 objects for plotting
//   data = data.slice(0, 10);

//   // Reverse the array due to Plotly's defaults
//   data = data.reverse();

//   // Trace1 for the Sample Data
//   var trace1 = {
//     x: data.map(row => row.sample_values),
//     y: data.map(row => row.otu_ids),
//     text: data.map(row => row.otu_ids),
//     name: "Samples",
//     type: "bar",
//     orientation: "h"
//   };

//   // data
//   var chartData = [trace1];

//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "Sample value search results",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };

//   // Render the plot to the div tag with id "bar"
//   Plotly.newPlot("bar", chartData, layout);
// });
