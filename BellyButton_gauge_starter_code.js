// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    // Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = metadata.filter(sampleObj => sampleObj.id == sample)

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var MetaArray = data.metadata.filter(metaObj => metaObj.id == sample);

    // Create a variable that holds the first sample in the array.
    var sampleResult = sampleArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var metaResult = metaArray[0];


    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids
    console.log(otu_ids);
    var otu_labels = result.otu_labels
    console.log(otu_labels);
    var sample_values = result.sample_values;
    console.log(sample_values);

    // 3. Create a variable that holds the washing frequency.
    var washFreq = parseFloat(metaResult.wfreq);

    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: washFreq,
        title: { text: "<b>Bellybutton Washing Frequency</b><br>Scrubs Per Week" },
        type: "indicator",
        mode: "gauge+mode",
        gauge
      },
      axis: { range: [null, 10] },
      bar: { color: "browm" },
      steps[
      { range: [0, 2], color: "red" },
      { range: [2, 4], color: "orange" },
      { range: [4, 6], color: "yellow" },
      { range: [6, 8], color: "limegreen" },
      { range: [8, 10], color: "green" },
        
  }
      }
     
    ];

// 5. Create the layout for the gauge chart.
var gaugeLayout = {

  width: 500,

  height: 400,

  margin: {
    t: 25,
    r: 25,
    l: 25,
    b: 25
  }


};

// 6. Use Plotly to plot the gauge data and layout.
Plotly.newPlot("gauge", gaugeData, gaugeLayout);

});
}
