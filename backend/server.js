// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.get('/api/recommended-songs', (req, res) => {
  const { mood } = req.query;

  // Implement your logic to fetch recommended songs based on the mood
  // For demonstration purposes, returning a static list of songs
  const recommendedSongs = getRecommendedSongsByMood(mood);
  
  res.json({ data: recommendedSongs }); // Wrap the result in an object with a 'data' property
});

// Example function to get recommended songs based on mood
const getRecommendedSongsByMood = (mood) => {
  // Replace this with your logic to fetch songs from a database or external API
  // For now, returning a static list of songs
  if (mood === 'happy') {
    return [
      { title: "Happy", artist: 'Pharrell Williams', link: 'https://youtu.be/ZbZSe6N_BXs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Uptown Funk", artist: 'Mark Ronson ft. Bruno Mars', link: 'https://youtu.be/OPf0YbXqDm0?si=T5c6nkQ87pPAZ-ie' },
{ title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', link: 'https://youtu.be/ru0K8uYEZWw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Together", artist: 'The Turtles', link: 'https://youtu.be/mRCe5L1imxg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Shut Up and Dance", artist: 'WALK THE MOON', link: 'https://youtu.be/6JCLY0Rlx6Q?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Gotta Feeling", artist: 'The Black Eyed Peas', link: 'https://youtu.be/uSD4vsh1zDA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Don't Stop Believin'", artist: 'Journey', link: 'https://youtu.be/1k8craCGpgs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dance Monkey", artist: 'Tones and I', link: 'https://youtu.be/q0hyYWKXF0Q?si=T5c6nkQ87pPAZ-ie' },
{ title: "Walking on Sunshine", artist: 'Katrina and the Waves', link: 'https://youtu.be/iPUmE-tne5U?si=T5c6nkQ87pPAZ-ie' },
{ title: "All Star", artist: 'Smash Mouth', link: 'https://youtu.be/L_jWHffIx5E?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Will Survive", artist: 'Gloria Gaynor', link: 'https://youtu.be/gYkACVDFmeg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Shake It Off", artist: 'Taylor Swift', link: 'https://youtu.be/nfWlot6h_JM?si=T5c6nkQ87pPAZ-ie' },
{ title: "Twist and Shout", artist: 'The Beatles', link: 'https://youtu.be/znf1zrZ2Hrw?si=T5c6nkQ87pPAZ-ie' },
{ title: "I'm a Believer", artist: 'The Monkees', link: 'https://youtu.be/XfuBREMXxts?si=T5c6nkQ87pPAZ-ie' },
{ title: "Can't Get Enough of Your Love, Babe", artist: 'Barry White', link: 'https://youtu.be/kr2IQ0bWT1Y?si=T5c6nkQ87pPAZ-ie' },
{ title: "Footloose", artist: 'Kenny Loggins', link: 'https://youtu.be/ltrMfT4Qz5Y?si=T5c6nkQ87pPAZ-ie' },
{ title: "Sweet Caroline", artist: 'Neil Diamond', link: 'https://youtu.be/1vhFnTjia_I?si=T5c6nkQ87pPAZ-ie' },
{ title: "Wannabe", artist: 'Spice Girls', link: 'https://youtu.be/gJLIiF15wjQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dancing Queen", artist: 'ABBA', link: 'https://youtu.be/xFrGuyw1V8s?si=T5c6nkQ87pPAZ-ie' },
{ title: "September", artist: 'Earth, Wind & Fire', link: 'https://youtu.be/Gs069dndIYk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Birthday", artist: 'Stevie Wonder', link: 'https://youtu.be/inS9gAgSENE?si=T5c6nkQ87pPAZ-ie' },
{ title: "ABC", artist: 'The Jackson 5', link: 'https://youtu.be/ho7796-au8U?si=T5c6nkQ87pPAZ-ie' },
{ title: "You Make My Dreams", artist: 'Hall & Oates', link: 'https://youtu.be/EErSKhC0CZs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy People", artist: 'R. Kelly', link: 'https://youtu.be/UbhsVKnVQAU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Sugar", artist: 'Maroon 5', link: 'https://youtu.be/09R8_2nJtjg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Celebration", artist: 'Kool & The Gang', link: 'https://youtu.be/3GwjfUFyY6M?si=T5c6nkQ87pPAZ-ie' },
{ title: "Get Lucky", artist: 'Daft Punk ft. Pharrell Williams', link: 'https://youtu.be/5NV6Rdv1a3I?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dare", artist: 'Gorillaz', link: 'https://youtu.be/uAOR6ib95kQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Walking on a Dream", artist: 'Empire of the Sun', link: 'https://youtu.be/eimgRedLkkU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Hour", artist: 'Weezer', link: 'https://youtu.be/5Q-vDAydq3M?si=T5c6nkQ87pPAZ-ie' },
{ title: "Firework", artist: 'Katy Perry', link: 'https://youtu.be/QGJuMBdaqIw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Best Day of My Life", artist: 'American Authors', link: 'https://youtu.be/Y66j_BUCBMY?si=T5c6nkQ87pPAZ-ie' },
{ title: "Good Vibrations", artist: 'The Beach Boys', link: 'https://youtu.be/Eab_beh07HU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Downtown", artist: 'Macklemore & Ryan Lewis', link: 'https://youtu.be/JGhoLcsr8GA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Song", artist: 'Bring Me The Horizon', link: 'https://youtu.be/G17_cY1zW1I?si=T5c6nkQ87pPAZ-ie' },
{ title: "Hey Ya!", artist: 'OutKast', link: 'https://youtu.be/PWgvGjAhvIw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Counting Stars", artist: 'OneRepublic', link: 'https://youtu.be/hT_nvWreIhg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Wake Me Up", artist: 'Avicii', link: 'https://youtu.be/IcrbM1l_BoI?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Love It", artist: 'Icona Pop ft. Charli XCX', link: 'https://youtu.be/UxxajLWwzqY?si=T5c6nkQ87pPAZ-ie' },
{ title: "Shiny Happy People", artist: 'R.E.M.', link: 'https://youtu.be/iCQ0vDAbF7s?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dynamite", artist: 'BTS', link: 'https://youtu.be/gdZLi9oWNZg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Don't Worry, Be Happy", artist: 'Bobby McFerrin', link: 'https://youtu.be/d-diB65scQU?si=T5c6nkQ87pPAZ-ie' },
{ title: "On Top of the World", artist: 'Imagine Dragons', link: 'https://youtu.be/w5tWYmIOWGk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Days", artist: 'Pratt & McClain', link: 'https://youtu.be/NCVhU2VEBjM?si=T5c6nkQ87pPAZ-ie' },
{ title: "Holiday", artist: 'Madonna', link: 'https://youtu.be/4UDWxFfbQI4?si=T5c6nkQ87pPAZ-ie' },
{ title: "A-Punk", artist: 'Vampire Weekend', link: 'https://youtu.be/_XC2mqcMMGQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Love Today", artist: 'Mika', link: 'https://youtu.be/HcJCbH-uOg0?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Wanna Dance with Somebody", artist: 'Whitney Houston', link: 'https://youtu.be/eH3giaIzONA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dog Days Are Over", artist: 'Florence + The Machine', link: 'https://youtu.be/iWOyfLBYtuU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Now", artist: 'Zedd ft. Elley Duhé', link: 'https://youtu.be/-qnyd7Ht9uc?si=T5c6nkQ87pPAZ-ie' }

    ];
  } else if (mood === 'sad') {
    return [
      { title: "Someone Like You", artist: 'Adele', link: 'https://youtu.be/hLQl3WQQoQ0?si=T5c6nkQ87pPAZ-ie' },
{ title: "Tears Dry on Their Own", artist: 'Amy Winehouse', link: 'https://youtu.be/WejOz-1RwRw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Back to Black", artist: 'Amy Winehouse', link: 'https://youtu.be/TJAfLE39ZZ8?si=T5c6nkQ87pPAZ-ie' },
{ title: "Hurt", artist: 'Johnny Cash', link: 'https://youtu.be/vt1Pwfnh5pc?si=T5c6nkQ87pPAZ-ie' },
{ title: "Nothing Compares 2 U", artist: 'Sinead OConnor', link: 'https://youtu.be/0-EF60neguk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Yesterday", artist: 'The Beatles', link: 'https://youtu.be/PGHOHlZl1Y0?si=T5c6nkQ87pPAZ-ie' },
{ title: "The Night We Met", artist: 'Lord Huron', link: 'https://youtu.be/KtlgYxa6BMU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Someone You Loved", artist: 'Lewis Capaldi', link: 'https://youtu.be/bCuhuePlP8o?si=T5c6nkQ87pPAZ-ie' },
{ title: "Fix You", artist: 'Coldplay', link: 'https://youtu.be/k4V3Mo61fJM?si=T5c6nkQ87pPAZ-ie' },
{ title: "The Sound of Silence", artist: 'Simon & Garfunkel', link: 'https://youtu.be/4zLfCnGVeL4?si=T5c6nkQ87pPAZ-ie' },
{ title: "Creep", artist: 'Radiohead', link: 'https://youtu.be/XFkzRNyygfk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Someone You Loved", artist: 'Lewis Capaldi', link: 'https://youtu.be/zABLecsR5UE?si=T5c6nkQ87pPAZ-ie' },
{ title: "Wish You Were Here", artist: 'Pink Floyd', link: 'https://youtu.be/IXdNnw99-Ic?si=T5c6nkQ87pPAZ-ie' },
{ title: "Skinny Love", artist: 'Bon Iver', link: 'https://youtu.be/ssdgFoHLwnk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Mad World", artist: 'Gary Jules', link: 'https://youtu.be/4N3N1MlvVc4?si=T5c6nkQ87pPAZ-ie' },
{ title: "I'm Not the Only One", artist: 'Sam Smith', link: 'https://youtu.be/nCkpzqqog4k?si=T5c6nkQ87pPAZ-ie' },
{ title: "Everybody Hurts", artist: 'R.E.M.', link: 'https://youtu.be/5rOiW_xY-kc?si=T5c6nkQ87pPAZ-ie' },
{ title: "Say Something", artist: 'A Great Big World ft. Christina Aguilera', link: 'https://youtu.be/-2U0Ivkn2Ds?si=T5c6nkQ87pPAZ-ie' },
{ title: "Hallelujah", artist: 'Jeff Buckley', link: 'https://youtu.be/y8AWFf7EAc4?si=T5c6nkQ87pPAZ-ie' },
{ title: "Angie", artist: 'The Rolling Stones', link: 'https://youtu.be/8YdQBkxf4kU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Everybody's Gotta Learn Sometime", artist: 'Beck', link: 'https://youtu.be/I2UAd6KwckM?si=T5c6nkQ87pPAZ-ie' },
{ title: "Fast Car", artist: 'Tracy Chapman', link: 'https://youtu.be/TO9Qa7MpAvw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Un-break My Heart", artist: 'Toni Braxton', link: 'https://youtu.be/p2Rch6WvPJE?si=T5c6nkQ87pPAZ-ie' },
{ title: "Boulevard of Broken Dreams", artist: 'Green Day', link: 'https://youtu.be/Soa3gO7tL-c?si=T5c6nkQ87pPAZ-ie' },
{ title: "Back at One", artist: 'Brian McKnight', link: 'https://youtu.be/5Ntfx5Sbbcw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Fade Into You", artist: 'Mazzy Star', link: 'https://youtu.be/ImKY6TZEyrI?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Can't Make You Love Me", artist: 'Bonnie Raitt', link: 'https://youtu.be/nW9Cu6GYqxo?si=T5c6nkQ87pPAZ-ie' },
{ title: "Nothing Else Matters", artist: 'Metallica', link: 'https://youtu.be/tAGnKpE4NCI?si=T5c6nkQ87pPAZ-ie' },
{ title: "Landslide", artist: 'Fleetwood Mac', link: 'https://youtu.be/WM7-PYtXtJM?si=T5c6nkQ87pPAZ-ie' }

    ];
  }else if (mood === 'neutral') {
    return [
      { title: "The Less I Know The Better", artist: 'Tame Impala', link: 'https://youtu.be/sBzrzS1Ag_g?si=T5c6nkQ87pPAZ-ie' },
{ title: "Lost on You", artist: 'LP', link: 'https://youtu.be/wDjeBNv6ip0?si=T5c6nkQ87pPAZ-ie' },
{ title: "Yellow", artist: 'Coldplay', link: 'https://youtu.be/yKNxeF4KMsY?si=T5c6nkQ87pPAZ-ie' },
{ title: "Ho Hey", artist: 'The Lumineers', link: 'https://youtu.be/zvCBSSwgtg4?si=T5c6nkQ87pPAZ-ie' },
{ title: "Somewhere Only We Know", artist: 'Keane', link: 'https://youtu.be/Oextk-If8HQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Home", artist: 'Edward Sharpe & The Magnetic Zeros', link: 'https://youtu.be/DHEOF_rcND8?si=T5c6nkQ87pPAZ-ie' },
{ title: "Take Me to Church", artist: 'Hozier', link: 'https://youtu.be/PVjiKRfKpPI?si=T5c6nkQ87pPAZ-ie' },
{ title: "Budapest", artist: 'George Ezra', link: 'https://youtu.be/3X9LvC9WkkQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Hometown Glory", artist: 'Adele', link: 'https://youtu.be/l9PxOanFjxQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Riptide", artist: 'Vance Joy', link: 'https://youtu.be/uJ_1HMAGb4k?si=T5c6nkQ87pPAZ-ie' },
{ title: "Let It Go", artist: 'James Bay', link: 'https://youtu.be/0appiPr2DvY?si=T5c6nkQ87pPAZ-ie' },
{ title: "All of Me", artist: 'John Legend', link: 'https://youtu.be/450p7goxZqg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Chasing Cars", artist: 'Snow Patrol', link: 'https://youtu.be/GemKqzILV4w?si=T5c6nkQ87pPAZ-ie' },
{ title: "Waves", artist: 'Dean Lewis', link: 'https://youtu.be/eIrFwRAs-KQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Better Together", artist: 'Jack Johnson', link: 'https://youtu.be/u57d4_b_YgI?si=T5c6nkQ87pPAZ-ie' },
{ title: "Perfect", artist: 'Ed Sheeran', link: 'https://youtu.be/2Vv-BfVoq4g?si=T5c6nkQ87pPAZ-ie' },
{ title: "Hey There Delilah", artist: 'Plain White Ts', link: 'https://youtu.be/h_m-BjrxmgI?si=T5c6nkQ87pPAZ-ie' },
{ title: "Bleeding Love", artist: 'Leona Lewis', link: 'https://youtu.be/7_weSk0BonM?si=T5c6nkQ87pPAZ-ie' },
{ title: "The Scientist", artist: 'Coldplay', link: 'https://youtu.be/RB-RcX5DS5A?si=T5c6nkQ87pPAZ-ie' },
{ title: "Say You Won't Let Go", artist: 'James Arthur', link: 'https://youtu.be/0yW7w8F2TVA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Stay", artist: 'Rihanna ft. Mikky Ekko', link: 'https://youtu.be/JF8BRvqGCNs?si=T5c6nkQ87pPAZ-ie' },
{ title: "I'm Yours", artist: 'Jason Mraz', link: 'https://youtu.be/EkHTsc9PU2A?si=T5c6nkQ87pPAZ-ie' },
{ title: "Lost Stars", artist: 'Adam Levine', link: 'https://youtu.be/COGZIiFftNk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Sweater Weather", artist: 'The Neighbourhood', link: 'https://youtu.be/GCdwKhTtNNw?si=T5c6nkQ87pPAZ-ie' },
{ title: "You're Beautiful", artist: 'James Blunt', link: 'https://youtu.be/oofSnsGkops?si=T5c6nkQ87pPAZ-ie' },
{ title: "Let Her Go", artist: 'Passenger', link: 'https://youtu.be/RBumgq5yVrA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Perfect", artist: 'One Direction', link: 'https://youtu.be/Ho32Oh6b4jc?si=T5c6nkQ87pPAZ-ie' },
{ title: "Stay With Me", artist: 'Sam Smith', link: 'https://youtu.be/pB-5XG-DbAA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Fix You", artist: 'Coldplay', link: 'https://youtu.be/cYnTp2xF2n0?si=T5c6nkQ87pPAZ-ie' },
{ title: "Viva La Vida", artist: 'Coldplay', link: 'https://youtu.be/dvgZkm1xWPE?si=T5c6nkQ87pPAZ-ie' },
{ title: "Something Just Like This", artist: 'The Chainsmokers & Coldplay', link: 'https://youtu.be/FM7MFYoylVs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Love Yourself", artist: 'Justin Bieber', link: 'https://youtu.be/oyEuk8j8imI?si=T5c6nkQ87pPAZ-ie' },
{ title: "Budapest", artist: 'George Ezra', link: 'https://youtu.be/VHrLPs3_1Fs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Photograph", artist: 'Ed Sheeran', link: 'https://youtu.be/nSDgHBxUbVQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Ho Hey", artist: 'The Lumineers', link: 'https://youtu.be/zvCBSSwgtg4?si=T5c6nkQ87pPAZ-ie' },
{ title: "Pumped Up Kicks", artist: 'Foster The People', link: 'https://youtu.be/SDTZ7iX4vTQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Will Follow You Into the Dark", artist: 'Death Cab for Cutie', link: 'https://youtu.be/2_k7WB_gdps?si=T5c6nkQ87pPAZ-ie' },
{ title: "Ho Hey", artist: 'The Lumineers', link: 'https://youtu.be/zvCBSSwgtg4?si=T5c6nkQ87pPAZ-ie' },
{ title: "Best Day of My Life", artist: 'American Authors', link: 'https://youtu.be/Y66j_BUCBMY?si=T5c6nkQ87pPAZ-ie' },
{ title: "Counting Stars", artist: 'OneRepublic', link: 'https://youtu.be/hT_nvWreIhg?si=T5c6nkQ87pPAZ-ie' },
{ title: "A Sky Full of Stars", artist: 'Coldplay', link: 'https://youtu.be/VPRjCeoBqrI?si=T5c6nkQ87pPAZ-ie' },
{ title: "Yellow", artist: 'Coldplay', link: 'https://youtu.be/yKNxeF4KMsY?si=T5c6nkQ87pPAZ-ie' }

    ];
  }
  else if(mood === 'surprised'){
    return[
{ title: "Shut Up and Dance", artist: 'WALK THE MOON', link: 'https://youtu.be/6JCLY0Rlx6Q?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Gotta Feeling", artist: 'The Black Eyed Peas', link: 'https://youtu.be/uSD4vsh1zDA?si=T5c6nkQ87pPAZ-ie' },
{ title: "Don't Stop Believin'", artist: 'Journey', link: 'https://youtu.be/1k8craCGpgs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dance Monkey", artist: 'Tones and I', link: 'https://youtu.be/q0hyYWKXF0Q?si=T5c6nkQ87pPAZ-ie' },
{ title: "Walking on Sunshine", artist: 'Katrina and the Waves', link: 'https://youtu.be/iPUmE-tne5U?si=T5c6nkQ87pPAZ-ie' },
{ title: "All Star", artist: 'Smash Mouth', link: 'https://youtu.be/L_jWHffIx5E?si=T5c6nkQ87pPAZ-ie' },
{ title: "I Will Survive", artist: 'Gloria Gaynor', link: 'https://youtu.be/gYkACVDFmeg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Shake It Off", artist: 'Taylor Swift', link: 'https://youtu.be/nfWlot6h_JM?si=T5c6nkQ87pPAZ-ie' },
{ title: "Twist and Shout", artist: 'The Beatles', link: 'https://youtu.be/znf1zrZ2Hrw?si=T5c6nkQ87pPAZ-ie' },
{ title: "I'm a Believer", artist: 'The Monkees', link: 'https://youtu.be/XfuBREMXxts?si=T5c6nkQ87pPAZ-ie' },
{ title: "Can't Get Enough of Your Love, Babe", artist: 'Barry White', link: 'https://youtu.be/kr2IQ0bWT1Y?si=T5c6nkQ87pPAZ-ie' },
{ title: "Footloose", artist: 'Kenny Loggins', link: 'https://youtu.be/ltrMfT4Qz5Y?si=T5c6nkQ87pPAZ-ie' },
{ title: "Sweet Caroline", artist: 'Neil Diamond', link: 'https://youtu.be/1vhFnTjia_I?si=T5c6nkQ87pPAZ-ie' },
{ title: "Wannabe", artist: 'Spice Girls', link: 'https://youtu.be/gJLIiF15wjQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dancing Queen", artist: 'ABBA', link: 'https://youtu.be/xFrGuyw1V8s?si=T5c6nkQ87pPAZ-ie' },
{ title: "September", artist: 'Earth, Wind & Fire', link: 'https://youtu.be/Gs069dndIYk?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Birthday", artist: 'Stevie Wonder', link: 'https://youtu.be/inS9gAgSENE?si=T5c6nkQ87pPAZ-ie' },
{ title: "ABC", artist: 'The Jackson 5', link: 'https://youtu.be/ho7796-au8U?si=T5c6nkQ87pPAZ-ie' },
{ title: "You Make My Dreams", artist: 'Hall & Oates', link: 'https://youtu.be/EErSKhC0CZs?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy People", artist: 'R. Kelly', link: 'https://youtu.be/UbhsVKnVQAU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Sugar", artist: 'Maroon 5', link: 'https://youtu.be/09R8_2nJtjg?si=T5c6nkQ87pPAZ-ie' },
{ title: "Celebration", artist: 'Kool & The Gang', link: 'https://youtu.be/3GwjfUFyY6M?si=T5c6nkQ87pPAZ-ie' },
{ title: "Get Lucky", artist: 'Daft Punk ft. Pharrell Williams', link: 'https://youtu.be/5NV6Rdv1a3I?si=T5c6nkQ87pPAZ-ie' },
{ title: "Dare", artist: 'Gorillaz', link: 'https://youtu.be/uAOR6ib95kQ?si=T5c6nkQ87pPAZ-ie' },
{ title: "Walking on a Dream", artist: 'Empire of the Sun', link: 'https://youtu.be/eimgRedLkkU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy Hour", artist: 'Weezer', link: 'https://youtu.be/5Q-vDAydq3M?si=T5c6nkQ87pPAZ-ie' },
{ title: "Firework", artist: 'Katy Perry', link: 'https://youtu.be/QGJuMBdaqIw?si=T5c6nkQ87pPAZ-ie' },
{ title: "Best Day of My Life", artist: 'American Authors', link: 'https://youtu.be/Y66j_BUCBMY?si=T5c6nkQ87pPAZ-ie' },
{ title: "Good Vibrations", artist: 'The Beach Boys', link: 'https://youtu.be/Eab_beh07HU?si=T5c6nkQ87pPAZ-ie' },
{ title: "Can't Take My Eyes Off You", artist: 'Frankie Valli', link: 'https://youtu.be/NGFToiLtXro?si=T5c6nkQ87pPAZ-ie' },
{ title: "Happy", artist: 'Mudvayne', link: 'https://youtu.be/64PscY7Xb0M?si=T5c6nkQ87pPAZ-ie' },
{ title: "Mr. Brightside", artist: 'The Killers', link: 'https://youtu.be/gGdGFtwCNBE?si=T5c6nkQ87pPAZ-ie' },
{ title: "Pump It", artist: 'The Black Eyed Peas', link: 'https://youtu.be/Wgo8FU3jHr4?si=T5c6nkQ87pPAZ-ie' },
{ title: "Jump", artist: 'Van Halen', link: 'https://youtu.be/SwYN7mTi6HM?si=T5c6nkQ87pPAZ-ie' },
{ title: "Love Today", artist: 'Mika', link: 'https://youtu.be/HcJCbH-uOg0?si=T5c6nkQ87pPAZ-ie' },
{ title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', link: 'https://youtu.be/ru0K8uYEZWw?si=T5c6nkQ87pPAZ-ie' }

    ];
  }
   else {
    return [
      { title: "Happy", artist: 'Pharrell Williams', link: 'https://youtu.be/ZbZSe6N_BXs?si=T5c6nkQ87pPAZ-ie' },
      { title: "Uptown Funk", artist: 'Mark Ronson ft. Bruno Mars', link: 'https://youtu.be/OPf0YbXqDm0?si=T5c6nkQ87pPAZ-ie' },
      { title: "Can't Stop the Feeling!", artist: 'Justin Timberlake', link: 'https://youtu.be/ru0K8uYEZWw?si=T5c6nkQ87pPAZ-ie' },
      { title: "Happy Together", artist: 'The Turtles', link: 'https://youtu.be/mRCe5L1imxg?si=T5c6nkQ87pPAZ-ie' },
      { title: "Can't Take My Eyes Off You", artist: 'Frankie Valli', link: 'https://youtu.be/NGFToiLtXro?si=T5c6nkQ87pPAZ-ie' },
      { title: "Happy", artist: 'Mudvayne', link: 'https://youtu.be/64PscY7Xb0M?si=T5c6nkQ87pPAZ-ie' },
      { title: "Mr. Brightside", artist: 'The Killers', link: 'https://youtu.be/gGdGFtwCNBE?si=T5c6nkQ87pPAZ-ie' },
      { title: "Pump It", artist: 'The Black Eyed Peas', link: 'https://youtu.be/Wgo8FU3jHr4?si=T5c6nkQ87pPAZ-ie' },
      { title: "Jump", artist: 'Van Halen', link: 'https://youtu.be/SwYN7mTi6HM?si=T5c6nkQ87pPAZ-ie' },
      { title: "Love Today", artist: 'Mika', link: 'https://youtu.be/HcJCbH-uOg0?si=T5c6nkQ87pPAZ-ie' },
    ];
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
