var planes: {
  model: "Boeing 757",
  size: "Midsize",
  engine: 2,
  color: ['yellow', 'white', 'blue'];
  land: true,
  snack: {
    pretzels: false,
    peanuts: "salted",
    bread: false,
    water: "tap" 
  }
  greeting: function (time, name) {
    console.log("Good" + time + name);
  }
  plane.greeting('Afternoon', 'passengers')
}
