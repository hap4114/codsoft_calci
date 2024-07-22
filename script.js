// Function to append characters to the input field
function appendToResult(value) 
{
    document.getElementById('result').value += value;
}

// Function to calculate sine
function sin() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.sin(value);
}

// Function to calculate cosine
function cos() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.cos(value);
}

// Function to calculate tangent
function tan() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.tan(value);
}

// Function to delete last character
function backspace() 
{
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}

// Function to calculate square
function square() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.pow(value, 2);
}

// Function to calculate cube
function cubed() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.pow(value, 3);
}

// Function to calculate square root
function sqrt() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.sqrt(value);
}

// Function to calculate cube root
function sqrt3() 
{
    var value = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.pow(value, 1/3);
}

// Function to clear the input field
function clearResult() 
{
    document.getElementById('result').value = '  ';
}

// Function to evaluate the expression and display result
function calculate() 
{
    var expression = document.getElementById('result').value;
    if (expression) {
        document.getElementById('result').value = eval(expression);
    }
}
