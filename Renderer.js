
class Renderer {


    renderFriends = function (friends) {
        $('.friends-container').empty()
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ friends })
        $('.friends-container').append(newHTML);
    }

    renderMain = function (mainUser) {
        $('.user-container').empty()
        const source = $("#main-user-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(mainUser)
        $('.user-container').append(newHTML);
    }

    renderQuote = function (quote) {
        $('.quote-container').empty();
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(quote)
        $('.quote-container').append(newHTML);
    }

    renderPokemon = function (pokemon) {
        $('.pokemon-container').empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemon)
        $('.pokemon-container').append(newHTML);
    }

    renderMeat = function (meat) {
        $('.meat-container').empty()
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(meat)
        $('.meat-container').append(newHTML);
    }




}

