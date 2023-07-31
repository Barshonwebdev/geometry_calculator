// blog button functionalities 
document.getElementById("blog-button-section").addEventListener("click",function(event){
    location.href="blog.html";
})

// single input taking funvtion 
function getValue(inputId){
    const inputElement=document.getElementById(inputId);
    const inputString=inputElement.value;
    inputElement.value="";
    const inputNumber=parseFloat(inputString);
    return inputNumber;
}

// both input taking function 
function getValuesfromInput(input1Id,input2Id){
    const value1=getValue(input1Id);
    const value2=getValue(input2Id);
    if(isNaN(value1) || isNaN(value2)){
        alert("Please enter both number");
        return;
    }
    else if(value1<0 || value2<0){
        alert("please enter positive number");
        return;
    }
    console.log(value1);
    console.log(value2);
}

// calculation button click event function 
function clickCalc(buttonId,in1,in2){
document.getElementById(buttonId).addEventListener("click",function(){
    getValuesfromInput(in1,in2);
})
}

// function call for triangle calculation 
clickCalc("triangle-calc","base-input","height-input");

// shared function for formula application of area measurement of triangle, rhombus & pentagon 
function areaFunctionOfTRP(param1,param2){
    const area=0.5*param1*param2;
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