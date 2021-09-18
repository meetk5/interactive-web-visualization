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
    y: topten_otuids.reverse(),
    text: topten_otulabels.reverse(),
    type: 'bar',
   // orientation: "h"
};

Plotly.newPlot("bar", [trace1]);
  //STEPS
  //First create the drop-down
  for(let i =0;i < data.names.length; i++){
    var li1 = d3.select("#selDataset").append("option").text(data.names[i]).attr('value',data.names[i]);
  }
  //Barchart
  //bubblchart
  //Demographics
  //connect the dropdown to all the parts


 // for (i = 0; i< samples.length;i++)
  //{ids = samples[i].id
//console.log("ids",ids)
//otu_ids = samples[i].otu_ids
//console.log(otu_ids)
//}



  //ids = samples[0].id
  //console.log(ids);
  //sample_value = data.samples[0]
  //console.log(sample_value)
  //for (i = 0; i<=data.samples.length;i++){
    //  sample_values = data.samples[i]
     // console.log(sample_values)
 // }

});
}


function optionChanged(subjectId){
    console.log(subjectId)

}

barplot("940");
  //sample_values = sample
  //Sample_ids = data.names
  //console.log("Names:",data.names)
  //console.log("Metadata",data.metadata)
  //id = data.metadata[0]
  //console.log("first metadata record",id)
  //console.log("Samples",data.samples)
  //console.log(data.samples[0].otu_ids)
  //panelbody = d3.select("#sample-metadata")
  //console.log("Panelbody",panelbody)
  //var trace1 = {
    //x: data.samples[0].otu_ids,
   // y: data.samples[0],
    //type: 'bar'
//};
//});

//  for (i = 0, i < data.names.length, i++)
 // {
   
//  let data1 = trace1

  //let layout = {
    //title: title
  //};

  //Plotly.newPlot("plot", data);
