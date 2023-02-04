import React from "react";

//create your first component
const Home = () => {
	const [selectedColor,setSelectedColor]=React.useState("red")
	return (
		<div className="TrafficLight">
			<center><div 
				className={"light red"+(selectedColor==="red"?" glowRed":"")}
				onClick={()=>{setSelectedColor("red")}}
			></div><br></br>
			<div	
				className={"light yellow"+(selectedColor==="yellow"?" glowYellow":"")}
				onClick={()=>{setSelectedColor("yellow")}}
			></div><br></br>
			<div	
				className={"light green"+(selectedColor==="green"?" glowGreen":"")}
				onClick={()=>{setSelectedColor("green")}}
			></div><br></br></center>
		</div>
	);
};

export default Home;
