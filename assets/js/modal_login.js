const $pop_up = document.getElementsByClassName("pop-up")[0];

const $pop_warp = document.getElementsByClassName("pop-warp")[0];

const $submit1 = document.getElementById("submit1");

const $submit2 = document.getElementById("submit2");

const $close = document.getElementById("cerrar");



$submit1.addEventListener("click", (e) => {

        console.log(e.target);

        $pop_up.classList.add("show");
        $pop_warp.classList.add("show");




        console.log($pop_up);
    }),


    $close.addEventListener("click", (e) => {
        console.log(e.target);
        $pop_up.classList.remove('show')
        $pop_warp.classList.remove('show')
    })


$submit2.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);

        $pop_up.classList.add("show");
        $pop_warp.classList.add("show");




        console.log($pop_up);
    }),


    $close.addEventListener("click", (e) => {
        console.log(e.target);
        $pop_up.classList.remove('show')
        $pop_warp.classList.remove('show')
    })