
const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"
// const endpoint = "https://catfact.ninja/fact"
async function getQuote()
{
    console.log("button clicked")
    try
    {
        const response = await fetch(endpoint);
        console.log(response)
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json.bpi.USD)
        displayQuote(json.bpi.USD.rate)
        advice(json.bpi.USD.rate_float)
    }
    catch(err)
    {
        console.log(err);
        alert('Failed');
    }
}

function displayQuote(quote)
{
    document.getElementById('text').innerHTML = "The current value of Bitcoin is: " + quote;
}


function advice(currentprice)
{
    if (currentprice <= 40000)
    {
        document.getElementById('advice').innerHTML = "Bitcoin is currently a good investment, but bad for the environment!"
    }
    else
    {
        document.getElementById('advice').innerHTML = "Bitcoin is currently an okay investment, but you should definitely think about investing into something more eco-friendly!"
    }
}


const quoteText = document.querySelector('button');
quoteText.addEventListener('click', getQuote);

