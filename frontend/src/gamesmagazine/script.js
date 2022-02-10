class Game {
    constructor() {
        this.id;
        this.name;
        this.year;
        this.genre;
        this.mult;
        this.off;
        this.cross;
    }

    
}

$(document).ready(function () {
    const url = "localhost:3000";


    $("button").on('click', function () {
        $("input[name='']").val();
        $.ajax({ 
            type: "POST",
            url: `${url}/` })
        .done(function (data) {

        });
    });
})