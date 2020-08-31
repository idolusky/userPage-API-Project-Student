//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData() {


        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (data) => {
                const mainUser = {
                    name: { first: data.results[0].name.first, last: data.results[0].name.last }
                    , picture: data.results[0].picture.large, city: data.results[0].location.city, state: data.results[0].location.state
                }
                this.data.mainUser = mainUser
                const friends = []
                for (let u = 1; u < data.results.length; u++) {
                    const friend = { first: data.results[u].name.first, last: data.results[u].name.last }
                    friends.push(friend)
                }
                this.data.friends = friends
            }
        });


        $.ajax({
            url: 'https://api.kanye.rest/',
            dataType: 'json',
            success: (data) => {
                let quote = data.quote
                this.data.quote = quote

            }
        })


        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100)}`,
            dataType: 'json',
            success: (data) => {
                const pokemon = { name: data.name, picture: data.sprites.front_default }
                this.data.pokemon = pokemon
            }
        })
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2&=1',
            dataType: 'json',
            success: (data) => {
                const meat = data[0]
                this.data.meat = meat
            }
        })
    }
}




