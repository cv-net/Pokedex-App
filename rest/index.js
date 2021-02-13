const express = require('express')
const axios = require('axios');
const cors = require("cors")
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

const app = express()
const port = 3000


app.set('view engine', 'pug');
app.use(cors())

let pokemon;

app.get('/', async (req, res) => {


    var interval = {
      limit: 5,
      offset: 0
    }

  //select list of 5 pokemon, with their names and urls
  //loop through each one's url to 
  //then access the rest of its data
  //create an instance of the pokemon class
  //fill it with the data from second API call
  //push that instance object to an array
  //loop restarts

  class Pokemon {
    constructor(name, id, img, type) {
      this.name = name;
      this.id = id;
      this.img = img;
      this.type = type;
    }

  }

  let pokedex = [];


  P.getPokemonsList(interval) // with Promise
  .then(function(response) {


    for ( let i = 0 ; i < response.results.length ; i++ ) {

      P.resource([response.results[i].url]) // with Promise
      .then(function(response) {

        let instance = new Pokemon (
          response.name, 
          response.id, 
          response.sprites["front_default"], 
          response.types[0].type.name
        )

        console.log(instance);


        // pokemon = response.map(data => ({

        //   name: data.name,
        //   id: data.id,
        //   img: data.sprites["front_default"],
        //   type: data.types[0].type.name

        // }));
        // return pokemon;

      }).catch(function(error) {
        console.log('There was an ERROR: ', error);
      })


    
    } //end loop
  console.log(pokedex);

    // res.render('pokedex', { pokemon })
  }).catch(function(error) {
    console.log('There was an ERROR: ', error);
  });

});

// let card = document.getElementById('container');
// card.innerHTML = pokemon.name;


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


// let notes = {
//     message: "This is a key second-brain tool",
//     img: "https://1.bp.blogspot.com/-3dwDvsI_VcA/XU3Gh-zVYXI/AAAAAAAAgSc/FZtGUNiC5hIxlcy1t2fkOA1fxTDfwtS7gCLcBGAs/w0/darkstalkers___morrigan___render_by_entemberdesigns_dcodkx9.png",
//     timeStamp: Date.now(),
//     post: function postMessage(note) {
//         console.log(note);
//         pageComments.push(note)
//     }
// }

// app.get('/berrypicking', (req, res) => {
//     res.render('berrypicking', { notes });
// });


  //Define Problem
    //
  
  //Steps
    //Return all the information for all specified pokemon
      //Access url in response
      //Pass urls to an array of urls
      //loop through array of urls
      //take each one, access it's endpoint, parse the data and response
      //take response and put it in an instance of a class object?
    //Need to then specify the information to test
    //Then turn all the needed information into an object
    //Be able to access that object's info for every pokemon called
    //Render that info on the DOM, or a template

