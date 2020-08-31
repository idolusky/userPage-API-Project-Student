
let apiManager = new APIManager
let renderer = new Renderer

$("#load-user").on("click", function () {
    apiManager.loadData()
})

$("#display-user").on("click", function () {
    renderer.renderMain(apiManager.data.mainUser)
    renderer.renderFriends(apiManager.data.friends)
    renderer.renderQuote(apiManager.data.quote)
    renderer.renderPokemon(apiManager.data.pokemon)
    renderer.renderMeat(apiManager.data.meat)
})


