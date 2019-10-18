$(document).ready(function(){

    $(".content")
    .first()
    .show()



    $(".tabs").on("click", "a", function(e) {
    var tab = $(this).attr("href")
    $(".content").hide()
    $(tab).show()


})
})