
const quotes = [
    {
           quote:`May you have the strength to accept where you are now and the courage to move forward into the unknown`,
        author:`@notsosmalltalk`
    },
    
    {
           quote:`My challanges have not defined me, but have strengthed me`,
        author:`@notsosmalltalk`
    },
    
    {
           quote:`Stop comparing. Social Media is fantasy, and a lot of people don't look like that in real life`,
        author:`@wetheurban`
    },
    {
           quote:`My richness is life forever`,
        author:`@hindzsight`
    },
    {
           quote:`Protect your peace. Your space is priceless.Don't settle for false sense of it`,
        author:`@notsosmalltalk`
    },
    {
           quote:`Choose longevity over instant gratification`,
        author:`@wetheurban`
    },
    {
           quote:`Even if it doesn't seem like a big deal to others, you can still be proud of yourself`,
        author:`@wetheurban`
    },
    {
           quote:`You are immaculate in your own divine unique energy for me`,
        author:`@hindzsight`
    },
    {
           quote:`There is so much greatness for you to come`,
        author:`@hindzsight`
    },
    {
           quote:`Don't think small. DREAM BIG. Don't shrink. EXPAND`,
        author:`@notsosmalltalk`
    },
    
    {
           quote:`With each step I take, MY PATH becomes more visibile. I trust the process of my journey and fully embrace it`,
        author:`@notsosmalltalk`
    },
    {
           quote:`Doing your best might look different each day, but atleast you're trying`,
        author:`@wetheurban`
    },
    {
           quote:`Keep doing what you love`,
        author:`@wetheurban`
    },
    {
           quote:`You are a gift to this planet, open your self up`,
        author:`@hindzsight`
    },
    {
           quote:`You are beautiful, you have the strength to pursue this next step in your life`,
        author:`@hindzsight`
    },
    {
           quote:`Our hardships don't have the last word`,
        author:`@notsosmalltalk`
    },
    {
           quote:`When people deem you unworthy, love yourself even harder`,
        author:`@notsosmalltalk`
    },
    {
           quote:`Yes, your feelings are valid but that is not an excuse to treat people poorly`,
        author:`@wetheurban`
    },
    
    {
         quote:`Try to appreciate that sometimes its peaceful to not know`,
        author:`@wetheurban`
    },
    {
           quote:`You have the ability to step up and live your truth, stop being hard on yourself`,
        author:`@hindzsight`
    },
    {
           quote:`The greatest project you will ever work on is yourself, have fun with it`,
        author:`@hindzsight`
    },
    {
           quote:`In a world full of noise may my soul be the loudest voice I hear`,
        author:`@notsosmalltalk`
    },
    {
           quote:`Overwhelm your doubt with faith`,
        author:`@notsosmalltalk`
    },
    {
           quote:`Breathe deeply. Coming back to your breath forces you to be present`,
        author:`@wetheurban`
    },
    {
           quote:`It's okay to want more for yourself. You don't have to settle`,
        author:`@wetheurban`
    },
    {
           quote:`Honestly, I'm at a point in my life where I just wanna cut out the bullshit and surround myself with things that make me happy`,
        author:`Issa Rae Insecure`
    },
    {
           quote:`Honey if you reading this, you are going to be a successful black woman`,
        author:`@prettyshadesofmelanin`
    },
    {
           quote:`It's okay to want more for yourself. You don't have to settle`,
        author:`@wetheurban`
    },
    {
           quote:`Whatever didn't workout wasn't meant for you. Trust the process`,
        author:`@wetheurban`
    },
    {
           quote:`I deserve love. I deserve happy and healthy relationships. I deserve a quality of life that does not come at the expense of sacrifice or trauma. I deserve nice things. It's ok to have nice things. I deserve`,
        author:`@jackieaina`
    },
    {
           quote:`Dear black women, invest in yourself unappologetically`,
        author:``
    },
    {
           quote:`I'll remove myself before I allow anger to consume me. I like to love. I like to be happy. So if I have to distance myself to keep things that way I will`,
        author:`@demigoddessnik`
    },
    {
           quote:`An unhealed person can find offense in pretty much anything someone else does. A healed person understands that the actions of others has absolutely nothing to do with them`,
        author:``
    },
    {
           quote:`It's okay to want more for yourself. You don't have to settle`,
        author:`@wetheurban`
    },  
    {
        quote:`Being a nice person means being nice to yourself as well`,
     author:`@wetheurban`
    },
    {
        quote:`I embrace the greatness within me`,
     author:`@soulfulpursuit`
    }, 
    {
        quote:`I accept responsibility for my own happiness and development`,
     author:`@soulfulpursuit`
    },
    {
        quote:`I'm building a supportive network that encourages and motivates me`,
     author:`@soulfulpursuit`
    },
    {
        quote:`I'm proud of my culture, upbringing and experiences, they have made me who I am`,
     author:`@soulfulpursuit`
    },
    {
        quote:`Normalize black women loving themselves. Choosing themselves. Freeing themselves and healing themselves`,
     author:`@notsosmalltalk`
    },
    {
        quote:`My growth is a continuous process`,
     author:`@notsosmalltalk`
    },
    {
        quote:`Stop expecting people to read your mind. It's on you to communicate your feelings`,
     author:`@wetheurban`
    },
    {
        quote:`Stop feeling guilty about propritizing your boundaries`,
     author:`@wetheurban`
    },
    {
        quote:`Growth isn't Linear`,
     author:`@wetheurban`
    }
    
]


const quoteBtn = document.getElementById('quote-btn');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () => {
   let random = Math.floor(Math.random() * quotes.length);

   quote.innerHTML = quotes[random].quote;
   author.innerHTML = quotes[random].author;

})

var colors = [
    '#AF815E',
    '#81583A',
    '#DCBEA4',
    '#C7BBA0',
    '#CCA98A',
    '#CEAC90',
    '#B49172',
    '#B59575',
    '#B77957',
    '#977251',
    '#814723',
    '#845F3F',
    '#755335',
    '#7A5241',
    '#57300E',
    '#634226',
    '#412914',
    '#311E0D',
    '#2B4521',
    '#5A6E3A',
    '#203738',
    '#395F60'
]

var i = 0;

quoteBtn.addEventListener('click', () => {
    i = i < colors.length ? ++i : 0;
    document.body.style.backgroundColor =  colors[i]
})


const twitterBtn = document.getElementById('twitter-btn')

twitterBtn.addEventListener('click', () => {

    twitterBtn.setAttribute('href', `https://twitter.com/share?text=${quote.innerHTML}+${author.innerHTML}`)

})









