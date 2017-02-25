var model = {
    resturants: [
        {
            name: "Moes BBQ",
            denied: false
        },
        {
            name: "Picas",
            denied: false
        },
        {
            name: "Black Belly",
            denied: false
        },
        {
            name: "Basta",
            denied: false
        },
        {
            name: "The roadhouse Boulder depot",
            denied: false
        },
        {
            name: "Avery Brewing",
            denied: false
        },
        {
            name: "Chipotle",
            denied: false
        },
        {
            name: "TacoBell",
            denied: false
        }
    ],
    displayResturantOptions: function()
    {
        for(var i = 0; i < model.resturants.length; i++)
        {
            console.log(model.resturants[i].name);
            console.log(model.resturants[i].denied);            
        }
    },
    addResturantOption: function(newResturant)
    {
        this.resturants.push({
            name: newResturant,
            denied: false
        });
        this.displayResturantOptions();
    },
    pickRandomResturant: function()
    {
        var randomNumber = Math.floor((Math.random() * this.resturants.length));
        if (this.resturants[randomNumber].denied === false) {
            console.log(this.resturants[randomNumber].name);            
        }
        
    },
    fuckThatPlace: function(denyPlace)
    {   
        for(var i = 0; i < this.resturants.length; i++){
            var resturant = this.resturants[i]            
            if( denyPlace === resturant.name){
                resturant.denied = true;
            }
        }
        this.pickRandomResturant();
    }

}