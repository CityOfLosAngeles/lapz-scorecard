var myVar;

queue()
  .defer(d3.json, 'data/lapz-scorecard.JSON')
  .await(data_ready)

function data_ready(error, data) {
  if (error) throw error;

  myVar = data;

  // create sparklines for each indicator
  var PovertySetup = make_sparkline('#PovertySparkline', '#PovertyLabel', data.Poverty, "amount", 150);
  PovertySetup();

  var JobsSetup = make_sparkline('#JobsSparkline', '#JobsLabel', data.Jobs, "amount", 110);
  JobsSetup();

  var PermitsSetup = make_sparkline('#PermitsSparkline', '#PermitsLabel', data.Permits, "amount", 130);
  PermitsSetup();

  var MathSetup = make_sparkline('#MathSparkline', '#MathLabel', data.Math, "amount", 120);
  MathSetup();

  var EnglishSetup = make_sparkline('#EnglishSparkline', '#EnglishLabel', data.English, "amount", 120);
  EnglishSetup();

  var GraduationSetup = make_sparkline('#GraduationSparkline', '#GraduationLabel', data.Graduation, "amount", 120);
  GraduationSetup();

  var CollegeSetup = make_sparkline('#CollegeSparkline', '#CollegeLabel', data.College, "amount", 120);
  CollegeSetup();

  var RentBurdenSetup = make_sparkline('#RentBurdenSparkline', '#RentBurdenLabel', data.RentBurden, "amount", 120);
  RentBurdenSetup();

  var HomelessSetup = make_sparkline('#HomelessSparkline', '#HomelessLabel', data.Homeless, "nodeci", 110);
  HomelessSetup();

  var CleanStreetsSetup = make_sparkline('#CleanStreetsSparkline', '#CleanStreetsLabel', data.CleanStreets, "amount", 110);
  CleanStreetsSetup();

  var CollisionsSetup = make_sparkline('#CollisionsSparkline', '#CollisionsLabel', data.Collisions, "nodeci", 110);
  CollisionsSetup();

  var Part1CrimesSetup = make_sparkline('#Part1CrimesSparkline', '#Part1CrimesLabel', data.Part1Crimes, "amount", 110);
  Part1CrimesSetup();

  var Part2CrimesSetup = make_sparkline('#Part2CrimesSparkline', '#Part2CrimesLabel', data.Part2Crimes, "amount", 110);
  Part2CrimesSetup();

  d3.select('#PovertyDescription').select('.tooltiptext').text(data.Descriptions[0].Poverty)
  d3.select('#JobsDescription').select('.tooltiptext').text(data.Descriptions[0].Jobs)
  d3.select('#PermitsDescription').select('.tooltiptext').text(data.Descriptions[0].Permits)
  d3.select('#MathDescription').select('.tooltiptext').text(data.Descriptions[0].Math)
  d3.select('#EnglishDescription').select('.tooltiptext').text(data.Descriptions[0].English)
  d3.select('#GraduationDescription').select('.tooltiptext').text(data.Descriptions[0].Graduation)
  d3.select('#CollegeDescription').select('.tooltiptext').text(data.Descriptions[0].College)
  d3.select('#RentBurdenDescription').select('.tooltiptext').text(data.Descriptions[0].RentBurden)
  d3.select('#HomelessDescription').select('.tooltiptext').text(data.Descriptions[0].Homeless)
  d3.select('#CleanStreetsDescription').select('.tooltiptext').text(data.Descriptions[0].CleanStreets)
  d3.select('#CollisionsDescription').select('.tooltiptext').text(data.Descriptions[0].Collisions)
  d3.select('#Part1CrimesDescription').select('.tooltiptext').text(data.Descriptions[0].Part1Crimes)
  d3.select('#Part2CrimesDescription').select('.tooltiptext').text(data.Descriptions[0].Part2Crimes)


}
