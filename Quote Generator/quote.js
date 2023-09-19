let quotesList = [
    {
        quote:"wisdom gathered over time I have found that every experience is a form of exploration.",
        author :"Ansel Adams"    
    },
    {
        quote:"The thoughts we choose to think are the tools we use to paint the canvas of our lives.",
        author:"Louise Hay"
    },
    {
        quote:"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author:"Helen Keller"
    },
    {
        quote:"He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.",
        author:"Pablo Picasso"
    },
    {
        quote:"Imagination is not a talent of some men but is the health of every man.",
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"By living deeply in the present moment we can understand the past better and we can prepare for a better future.",
        author:"Thích Nhất Hạnh"
    },
    {
        quote:"Every man is a volume if you know how to read him. ",
        author:"William Ellery Channing"
    },
    {
        quote:"You do not become good by trying to be good, but by finding the goodness that is already within you.",
        author:"Eckhart Tolle"
    },
]


let quoteEle = document.getElementById("quote")

let authorEle = document.getElementById("author") 
function getLocalQuotes(){
    let i = Math.floor(Math.random()*quotesList.length)
    quoteEle.innerText = quotesList[i].quote
    authorEle.innerText = "--" + " " + quotesList[i].author

}

// async function quoteAPI(){
//     let response = await fetch("https://api.quotable.io/random");
//     let quote = await response.json()
//     quoteEle.innerText = quote.content
//     authorEle.innerText = "--" + " " + quote.author

// }
 document.getElementById("getQuote").onclick = getLocalQuotes





