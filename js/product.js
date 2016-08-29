(function() {

    //initialze jQuery
    $(init);

    function init() {
        calcPricePerCup();
    }

    function calcPricePerCup()
    {
        var weight, price, cups, pricePerCup;
        const SERVING_SIZE = 7;
        weight = 227;
        price = 7.99;

        //calculat the number of cups based on the weight
        cups = weight / SERVING_SIZE;
        
        //get the price per cup
        pricePerCup = (price / cups) * 100;

        //calculate to decimal places and round down.  (It looks better priced) 
        console.log(Math.floor(pricePerCup.toFixed(2)));
    }
})();