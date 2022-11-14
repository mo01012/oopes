$(document).ready(function() {
    $(".after").mouseenter(function() {
        $(".none").removeClass("d-none");
    })
    $(".after").mouseleave(function() {
        $(".none").addClass("d-none");
    })
})