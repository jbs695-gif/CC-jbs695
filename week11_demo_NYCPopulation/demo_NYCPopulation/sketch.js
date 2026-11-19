let data; nyc1950;

async function setup() {
  createCanvas(600,600);
  data = await loadTable('data/nyc_population_1950.csv',',','header');
  console.log(data);
  nyc1950 = data.getColumn('1950');
  console.log(nyc1950);
}

function draw() {
  background(220);
}