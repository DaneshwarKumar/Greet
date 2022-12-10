import './App.css';

let currDate = new Date();
currDate = currDate.getHours();
let greet = " ";
const greetColor = {};

// changing the greet according to the time 
if(currDate>=1 && currDate<=12){
   greet = "Good Morning";
   greetColor.color = "Green";
}
else if(currDate>12 && currDate<=16){
    greet = "Good Afternoon";
    greetColor.color = "orange";
}
else if(currDate>16 && currDate<=24){
    greet = "Good Evening";
    greetColor.color = "blue";
}else{
    greet = "Good Night";
    greetColor.color = "black";
}


// declaring the exporting the function 
function App(){
    return <div>
            <h1>Hellow Sir , <span  style={greetColor}>{greet}</span> </h1>
    </div>
}


export default App;