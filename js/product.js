(function() {

    /* wait for jQuery to initialze */
    $(init);

    /* initialze our code */
    function init() {
        initWeightButtons();
    }

    /* wire up the click events for each button */
    /* TODO: Look into looping through these */
    function initWeightButtons() {
        $("#btn227").click(function(){
            deactivateButtons();
            var weight = setActiveButton(0);
            calcPricePerCup(weight);
        });
        
        $("#btn500").click(function() {
            deactivateButtons();
            var weight = setActiveButton(1);
            calcPricePerCup(weight);
        });

        $("#btn1000").click(function() {
            deactivateButtons();
            var weight = setActiveButton(2);
            calcPricePerCup(weight);
        });

        $("#btn6000").click(function() {
            deactivateButtons();
            var weight = setActiveButton(3);
            calcPricePerCup(weight);
        });
    }

    /* deactive all the buttons */
    function deactivateButtons() {
        //remove the class
        $('.btn-group > .btn').removeClass('active')
    }

    /* set the button that has been clicked to active class */
    function setActiveButton(index) {
        //set the class to active so that it is highlighted
        $('.btn-group > .btn').eq(index).addClass('active');

        //return the value of the active button
        return weight = $('.btn-group > .btn.active').val();
    }

    /* calculate the price per cup */
    /* formula: cups = weight / SERVING_SIZE */
    /*        : pricePerCup = price / cups */
    function calcPricePerCup(weight)
    {
        const SERVING_SIZE = 7;
        var price, cups, pricePerCup;
        
        //get the price entered
        price = $('#price').val();

        //calculate the number of cups based on the weight
        cups = weight / SERVING_SIZE;
        
        //get the price per cup
        pricePerCup = (price / cups);

        //update the gui
        $('#ppc').text(pricePerCup.toFixed(2));
    }
})();