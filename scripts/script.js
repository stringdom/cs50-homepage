function IncreaseCounter()
{
    let counter = document.getElementById("counter").innerHTML;
    counter++;
    document.getElementById("counter").innerHTML = counter.toString();
}

function DecreaseCounter()
{
    let counter = document.getElementById("counter").innerHTML;
    counter--;
    document.getElementById("counter").innerHTML = counter.toString();
}

function ResetCounter()
{
    document.getElementById("counter").innerHTML = "0";
}