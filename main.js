$(document).ready(function(){


    $(".content")
    .first()
    .show()

    $(".tabs").on("click", "a", function(e) {
        e.preventDefault()
    var tab = $(this).attr("href")
    $(".content").hide()
    $(tab).show()
})

   
        $.get("https://obscure-tundra-54269.herokuapp.com/bar-food")
        .done(function(data){
            // console.log(data)
            // const result = data.appetizers[0]
            // const name=appetizers.name
            // const price=appetizers.price
            // const description=appetizers.description
            const html = data.appetizers.map(item => (
             `
            name: ${item.name}
            price: $${item.price}
            description: ${item.description}
            `
            ))
            

            $("#menuapi").html(html)
        })

})