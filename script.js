function compute()
{
    // helps to validate the principal field
    var x = document.getElementById("principal").value;
    if (x = 0 || x < 1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    //the value for the amount or principal
    var principal = document.getElementById("principal").value
    //the value for the rate
    var rate = document.getElementById("rate").value;
    // the value for the number of years
    var years = document.getElementById("years").value;
    // Calculates the interest acquired based on the numbers of years
    var interest = (principal * years * rate)/100;
    // Converting the number of years into actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    
    // Computes the final result on clicking the compute interest button
     var result = principal * ( (rate/100)  * years); 
     document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,<br> at an interest rate of"+
    "<mark>"+rate+"</mark> %<br>You will receive an amount of <mark>"+result+"</mark>,<br/>in the year <mark>"+year+"</mark><br>";
   
}

 function updateRate()
 {
     var rateval = document.getElementById("rate").value;
     document.getElementById("rate_val").innerText = rateval;

 }   

        
    

        