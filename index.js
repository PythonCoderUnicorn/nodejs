// const http = require('http');
// const PORT = 3000;



// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });


const PORT = process.env.PORT || 8000

const express = require('express')
// const axios = require('axios')
// const cheerio = require('cheerio')

const app = express()  // call the library as app


const words = ['one', 'two', 'three']

const affirmations = [
  "Everyday you are a shining star",
  "You are as natural as the sunset, where the clouds are pink in a blue sky",
  "You are special, you have something that no one else",
  "you are rockin' it",
  "some people don't know how awesome you are",
  "take a few minutes, breathe, say something positive about yourself",
  "only you have the PhD in the study of you",
  "the binary was never meant to hold you",
  "your 3 lucky colors are #51C5FA, #FB8190, #FCECFF",
  "fun fact: Transgender people are awesome, even when you don't feel like it",
  "your difference is the special sauce in the recipe of life",
  "don't let them win, you are strong to make it",
  "everyone is on their journey, it's okay to be unsure",
  "how you feel is legit",
  "you are made with 100% astronomy, you are a star",
  "not everyday will feel like this",
  "your lacose-free nut milk milkshake brings all the non-binary people to the yard",
  "truth hurts that you are so wonderful and others have issues with that",
  "gender euphoria, that feels good as hell",
  "the gender affirming people are so lovely",
  "make a chatbot to say positive gender affirmations outloud to you",
  "some of us are struggling, some of us are soaring, there is no binary",
  "living your truth takes courage, safety, strength, and determination",
  "in Sci-Fi fantasy we exist, here on Earth we do too",
  "it's not like everyday a cisgender person questions their gender in a meaningful way",
  "your gender today can change, it's not written in stone, and if it were, you can break it",
  "computer code is binary, but we run on special software",
  "grey skies today, sunshine tomorrow",
  "being Trans is special, you get to redo parts of life",
  "your trauma does not define you, be kind to yourself",
  "being Transgender is the calculus of social construct of gender, the study of change",
  "your future self will want to see you shining",
  "not all of society sees you, but fellow Trans people do",
  "today [do that gender thing], or don't, do whatever you want!",
  "in the shower, shower yourself with soap and compliments",
  "live in the infinity of love and self acceptance",
  "CONGRATS! You just won a high five!",
  "you were entered into a contest, you won!",
  "Jadzia Dax considers you a friend and lovely person",
  "try to not let the haters live rent free in your head, that's valued property",
  "similar to your computer, you can delete the pre-installed gender software",
  "some traditions die, some become lifesavers",
  "REMINDER: breathe, say something positive about yourself",
  "Transgender people found the gender cheatcodes",
  "you are valid, your gender is valid, your pronouns are valid",
  "did you know that you don't have to a role model for the Trans community",
  "REMINDER: drink some water, stay hydrated",
  "each day in your truth you get closer to knowing yourself",
  "you can write it down, then make editorial changes, make yourself feel better",
  "life is full of prizes, some of us don't know it yet",
  "Tegan & Sara said you're walking with a ghost",
  "you got the body humps in all the right places",
  "you are the very definition of Biology, diversity",
  " Play 'I Will Survive' by Gloria Gaynor, say it to yourself",
  "What a Wonderful World, especially with you in it",
  "any day you leave your home as yourself, you are brave, bold and badass",
  "ain't no gender euphoria is enough",
  " Play 'Beautiful' by Christina Aguilera",
  " Play 'I m Still Standing' by Elton John",
  "let the world hear your roar",
  "you can burst with pride and joy, be a starburst",
  "before 1492 Transgender people existed like me and you",
  "you have the power, you got the power, YOU GOT THE POWER",
  "Transgender people are Marvelous humanoids with super powers",
  "between the ears is something special, handle with care",
  "SHIPMENT UPDATE: your box of self love has been delivered",
  "your Transgender realness token is A76L8H1WA6X",
  "you have admin priviledges on your gender ",
  "the traffic light is green, you can keep going, you are doing great",
  "Tip: use BASH commands for your gender, touch pronouns , rm *.patriarchy ",
  "take this promo code UMATTER and get yourself a treat ",
  "REMINDER: self.care is an act of love ",
  "REMINDER: self.care is important ",
  "being in Stealth_Mode is okay, be safe ",
  "wear socks & underwear that is gender affirming, small wins matter ",
  "gender is software, it changes and there is no one way to run software",
  "if Farrokh Bulsara can change his name (Freddie Mercury), you can too.",
  "the real owners of Bath & Body Works are Trans people",
  "your pronouns can be returned if they don't fit you",
  "give yourself a compliment, you earned it",
  "Transgender care is best served with love and acceptance, especially within yourself",
  "loving yourself can take time, can be a struggle, but keep trying",
  "Trans people exist in all parts of society, you exist, we exist  ",
  "caring for yourself is not only for holidays",
  "try to have the confidence of a white cisgender heterosexual man ",
  "hormones, we all have them, some of us want more of a specifc type",
  "your plane of existence can be in higher dimensions, use your Trans cheatcodes ",
  "some people live by 1 book, Trans people have many books",
  "your daily gender password is: noBinary4me",
  "your daily gender password is: GenderSpectrumPass",
  "your daily gender password is: careBear_countdown",
  "your daily gender password is: transRage",
  "your daily gender password is: transHistory",
  "your daily gender password is: transThemstory",
  "your daily gender password is: youRvalid",
  "{The Matrix}  you now know karate and taekwondo  ",
  "the say you are the Oracle or you worked there ",
  "expect yourself to find joy in your gender journey",
  "we all have gender neutral bathrooms in our homes ",
  "find something today that makes you laugh! ",
  "gender is like a tea bag, you can steep in a gender, let it get stronger",
  "on your calendar it says you have 5 minutes to say something nice about yourself",
  "your gender is 100% naturally grown, ethically sourced",
  "YOU WANT THE TRUTH? you are wonderful ",
  "gender is a daily iteration",
  "name one part of you that you like ",
  "your energy is not an endless supply, you need to rest",
  "for G in gender_spectrum : print( gender_spectrum[ G ] ) ",
  "the rainbow lives inside you, let the world see all the colors ",
  "the Trans community Blockchain appreciates you ",
  "you can survive, but also thrive ",
  "hit the like and subscribe button for your _self_ positivity",
  "this is a digital hug :: hug ::, it is for you ",
  "REMINDER: breathe, drink some water, say the word LOVE ",
  "loving yourself despite of all the negativity is an act of defiance",
  "the pronouns you use are valid ",
  "only mushrooms grow in the dark, find the light, even some of it ",
  "Apple says 'Think Different' but Orange you happy you are?",
  "there is no one true way in being Trans ",
  "you are doing the best you can, and that is good ",
  "you can cry, you can scream, you can even enjoy some ice cream",
  "fun fact: gender has n! permutations",
  "Trans Rage Against the cishet normcore Machine want you to join the band ",
  "your daily gender cheatcode: up up down down left right left right B A ",
  "your daily gender cheatcode: IDDQD {Doom invincibility}",
  "your daily gender cheatcode: up right right down up kick kick jump ",
  "your daily gender cheatcode: back back jump punch punch B ",
  "your daily gender cheatcode: fwd fwd up up A B ",
  "your daily gender cheatcode: back fwd down up jump jump ",
  "your daily gender cheatcode: jump fwd fwd jump B jump ",
  "your daily gender cheatcode: B A fwd fwd A jump",
  "WIFI passcode: whiteBluePink",
  "WIFI passcode: construct2destruct",
  "WIFI passcode: BLACKTRANSLIVESMATTER",
  "WIFI passcode: hackURgender",
  "WIFI passcode: lessGenderRoles_morePizzaRoles ",
  "WIFI passcode: hackTheBinary",
  "WIFI passcode: TransIsBeautiful",
  "gender is like water, it is fluid, yet powerful",
  



  "Robot is Czech for 'slave.' You are human, not a robot. You have the right to have boundaries.",
  "They say trans folks are obsessed with sex. Is there a culture that isn't?",
  "You're not obsessed with gender. You are on a journey of self-discovery.",
  "It is okay to try and understand yourself.",
  "It is okay to feel good about being trans.",
  "Gender Euphoria is a thing."
  
  
  
  
]

function between(min, max) {
  return Math.floor( Math.random() * (max - min + 1) + min) 
}


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// listening response  "/" is base
app.get("/", (req, res) => {
  res.json("Welcome to TransRest API")
  
})

app.get('/news', (req, res) => {
  res.json(words)
})

app.get('/affirmation', (req, res) => {
  res.json(affirmations[between(1, affirmations.length)])
})