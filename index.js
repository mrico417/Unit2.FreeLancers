//sample data taken from the lab instructions
const freelancersSample = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

//collect all the names, prices, and occupation into an array from the freelancersSample array of freelancer objects
const names = freelancersSample.map((freelancer) => freelancer.name);
const prices = freelancersSample.map((freelancer) => freelancer.price);
const occupationsTemp = freelancersSample.map((freelancer) => freelancer.occupation);

//iterate through the occupationsTemp array and use the Set.add() method to create a 
//unique list of occupations.
const occupationsSet = new Set();
occupationsTemp.forEach((occ) => occupationsSet.add(occ));
//convert Set() object to array
const occupations = [...occupationsSet]

//add sample data into theFreelancers array
const theFreelancers = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "teacher"},
];

//caculate the average price of the freelancers
const averagePrice = () => {
    return theFreelancers.reduce((sum,freelancer)=>sum + freelancer.price,0) / theFreelancers.length;
}

//start rendering sample data from theFreelancers to the web browser
const addFreelancerIntervalID = setInterval(addFreelancer,1500);

//this render() function needs to be here in order to render the first two objects of theFreelancers array
render();


//this function is call from addFreelancer() function used in setInterval with 1.5 seconds
//it iterates through theFreelancers array of freelancer objects
// a) creates a parent freelancerRow div element and b) its three children div elements
// for the freelancer's name, occupation, and price
function render(){

    const freelancersInfo = document.querySelector(".freelancers_info");
    const freelancersElements = theFreelancers.map((elFreelancer,idx)=> {
        const freelancerRow = document.createElement("div");
        freelancerRow.classList.add("freelancer_row");
        freelancerRow.setAttribute("id",idx);
        if(idx % 2 === 0){
            freelancerRow.classList.add("freelancer_row_khaki"); 
        }        
        const freelancerName = document.createElement("div");
        freelancerName.classList.add("freelancer_name");
        freelancerName.textContent = elFreelancer.name;

        const freelancerOccupation = document.createElement("div");
        freelancerOccupation.classList.add("freelancer_occupation");
        freelancerOccupation.textContent = elFreelancer.occupation;

        const freelancerPrice = document.createElement("div");
        freelancerPrice.classList.add("freelancer_starting_price");
        freelancerPrice.textContent = `$${elFreelancer.price}`;

        freelancerRow.appendChild(freelancerName);
        freelancerRow.appendChild(freelancerOccupation);
        freelancerRow.appendChild(freelancerPrice);

        return freelancerRow;
    })

    //remove any old elements and add the new elements
    freelancersInfo.replaceChildren(...freelancersElements);

    //update the average starting price.
    document.getElementById("average_starting_price").textContent = "The average starting price is $" + Math.round(averagePrice());
}

//function is called from addFreelancer() method
//determines a random freelancer and return it as an object
const randomFreelancer = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];

    return {name,price,occupation};
}

//this function is called by setInterval every 1.5 seconds.
// 1) it adds a random freelancer to theFreelancers array of objects
// 2) it renders/displas the updated list on the web browser.  
function addFreelancer(){
    theFreelancers.push(randomFreelancer());
    render();

    if(theFreelancers.length >= 15){
        clearInterval(addFreelancerIntervalID)
    }
  }

  

