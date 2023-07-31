// blog button functionalities 
document.getElementById("blog-button-section").addEventListener("click",function(event){
    location.href="blog.html";
})

// single input taking function 
function getValue(inputId){
    const inputElement=document.getElementById(inputId);
    const inputString=inputElement.value;
    inputElement.value="";
    const inputNumber=parseFloat(inputString);
    return inputNumber;
}

// both input taking function and multiplying them
function getValuesfromInputandMultiply(input1Id,input2Id){
    const value1=getValue(input1Id);
    const value2=getValue(input2Id);
    if(isNaN(value1) || isNaN(value2)){
        alert("Please enter both as numbers");
        exit;
    }
    else if(value1<0 || value2<0){
        alert("please enter positive numbers");
        exit;
    }
    const multiplied=(value1*value2).toFixed(2);
    console.log(multiplied);
    return multiplied;
}


// calculation button click event function 
function clickCalc(buttonId,in1,in2){
document.getElementById(buttonId).addEventListener("click",function(){
    const multiplied=getValuesfromInputandMultiply(in1,in2);
    const output=areaFunctionOfTRP(multiplied);
    const newOutputElementplace=document.getElementById("calculation-section");
    const newOutputElement=document.createElement("li");
    newOutputElement.innerHTML = `${buttonId} <span class="mx-3">${output} cm<sup>2</sup></span> <button class="px-1 py-1 mt-5 rounded-xl w-1/4 bg-blue-500 text-white text-xs">Convert to m<sup>2</sup></button>`; 
    newOutputElementplace.appendChild(newOutputElement);
})
}

// set value function 
function setValues(){

}

// function call for triangle calculation 
clickCalc("Triangle","triangleBase-input","triangleHeight-input");
// function call for rhombus calculation 
clickCalc("Rhombus","rhombusD1","rhombusD2");
// function call for pentagon calculation 
clickCalc("Pentagon","pentagonP","pentagonB");

// shared function for formula application of area measurement of triangle, rhombus & pentagon 
function areaFunctionOfTRP(param){
    const area=0.5*param;
    return area;
}

// shared function for formula application of area measurement of rectangle and parallelogram
function areaFunctionOfPR(param1, param2) {
  const area =  param1 * param2;
  return area;
}

// function for ellipse area measurement 
function areaFunctionOfEllipse(param1,param2){
    const pi=3.1416;
    const area=pi*param1*param2;
    return area;
}