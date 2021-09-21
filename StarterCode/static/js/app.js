
//STEPS
  //First create the drop-down
  //Barchart
  //bubblchart
  //Demographics
  //connect the dropdown to all the parts

init();

function init(){
  barplot(940);
  console.log("Init function is running now")
}


function barplot(sample){
d3.json("samples.json").then(function(data) {

  console.log(data);
  samples = data.samples;
  console.log(samples);

  let abc = samples.filter(sample_object => sample_object.id == sample);
  console.log("id", abc);
  let a = abc[0]
  console.log("a",a)
  let ids = a.sample_values
  topten_ids = ids.slice(0,10)

  let otu_ids = a.otu_ids
  console.log("otu_ids",otu_ids)
  topten_otuids = otu_ids.slice(0,10)
  console.log("topten_otuids",topten_otuids)

  otu_labels = a.otu_labels
  topten_otulabels = otu_labels.slice(0,10)
  console.log("topten_otulabels",topten_otulabels)

   var trace1 = {
    x: topten_ids.reverse(),
    y: topten_otuids.reverse().map(otu =>`OTU ${otu}`),
    text: topten_otulabels.reverse(),
    type: 'bar',
    orientation: "h"
   };
    var trace2 = {
        x: otu_ids,
        y: ids,
        mode: 'markers',
        text: otu_labels,
        marker: {
          size: ids,
          color: otu_ids}
        
      };
    
Plotly.newPlot("bar", [trace1]);

Plotly.newPlot("bubble", [trace2]);

metadata = data.metadata.filter(sample_obj => sample_obj.id == sample);
console.log ("Metadata", metadata[0])


//demodata = "<table><tr><td>id:" + metadata.id + "</td></tr></table>";
  let demo = d3.select("#sample-metadata");
  demo.html("")
  Object.entries(metadata[0]).forEach(([a,b])=>{
    demo.append("h5").text(`${a}:${b}`);
  });
  // let rows = demo.append("tr")

  // rows.append("td").text(metadata[0].id);
  
  // rows.append("td").text(metadata[0].ethnicity);
  // rows.append("td").text(metadata[0].gender);
  // rows.append("td").text(metadata[0].age);
  // rows.append("td").text(metadata[0].bbtype);
  // rows.append("td").text(metadata[0].location);
  // rows.append("td").text(metadata[0].wfreq);

// document.getElementById("#sample-metadata").innerHTML = demodata; 
});
}

// function Demographics(sample)
// {
//   metadata = data.metadata[0].filter(sample_obj => sample_obj.id == sample);
// console.log ("Metadata", metadata)

// //demodata = "<table><tr><td>id:" + metadata.id + "</td></tr></table>";
//   let demo = d3.select("#sample-metadata")
//   demo.html("")
//   let rows = demo.append("tr")

//   rows.append("td").text(metadata)
// }

d3.json("samples.json").then(function(data) {
    for(let i =0;i < data.names.length; i++){
        var li1 = d3.select("#selDataset").append("option").text(data.names[i]).attr('value',data.names[i]);
      }});

function optionChanged(subjectId){
    
    console.log("SubjectID", subjectId);
    barplot(subjectId);
    Demographics(subjectId);

};


