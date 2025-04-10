$(document).ready(function()
 {
    let scrollScore;
    $(document).scroll(function() {
        let scrollScore = $(document).scrollTop();
        // console.log(scrollScore)

        if (scrollScore > 0) {
            $('h2').css("display", "block")
        }

        if (scrollScore > 250) {
            $('#header').css("visibility", "hidden");
            $('#stuff').css("opacity", "0.2")
            $('#foreword').css("opacity", "1")
        } else if (scrollScore < 250) {

            $('#header').css("visibility", "visible");
            $('#stuff').css("opacity", "1")
        } 

    })

    // establish variables
    let hooktailOne = $('#hooktail-part1').html()
    let hooktailTwo = $('#hooktail-part2').html()
    let hooktailTwoHalf = $('#hooktail-part2-5').html()
    let hooktailThree = $('#hooktail-part3').html()
    let hooktailFour = $('#hooktail-part4').html()

    let ghsOne = $('#gethomesafe-part1').html()
    let ghsTwo = $('#gethomesafe-part2').html()
    let ghsThree = $('#gethomesafe-part3').html()
    let ghsFour = $('#gethomesafe-part4').html()
   
    let graphCount = 0;


    console.log(graphCount)

    $('#girlpath').click(function() {
        graphCount++
        let targetDiv = `#` + graphCount
        console.log(targetDiv)
        $('#choosepath').css("visibility", "hidden")
        $('#project').html("Get Home Safe")
        $(targetDiv).html(ghsOne)
        $(targetDiv).addClass('showthis')
    })

    $('#catpath').click(function() {
        graphCount++
        let targetDiv = `#` + graphCount
        console.log(targetDiv)
        $('#choosepath').css("visibility", "hidden")
        $('#project').html("Hooktail Inn")
        $(targetDiv).html(hooktailOne)
        $(targetDiv).addClass('showthis')
    })

    // change the background when you select an option
    $(document).on('click', 'li', function() {
        $(this).parent().css("background-color", "#391C34")
        graphCount++
    })

    console.log(graphCount)

    // get home safe question 2

    $(document).on('click', '#GHS-stay1', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsTwo);
        $(targetDiv).addClass('showthis');
    });

    $(document).on('click', '#GHS-leave1', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailOne);
        $(targetDiv).addClass('showthis');
    });

    // get home safe question 2

    $(document).on('click', '#GHS-stay2', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsThree);
        $(targetDiv).addClass('showthis');
    });

    $(document).on('click', '#GHS-leave2', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailOne);
        $(targetDiv).addClass('showthis');
    });

    // Get Home Safe question 3

    $(document).on('click', '#GHS-stay3', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsFour);
        $(targetDiv).addClass('showthis');
        $('#the-end').css("display", "block")
    });

    $(document).on('click', '#GHS-leave3', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailTwoHalf);
        $(targetDiv).addClass('showthis');
    });

    // Hooktail question 1
    $(document).on('click', '#hooktail-stay1', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailTwo + hooktailTwoHalf);
        $(targetDiv).addClass('showthis');
    });

    $(document).on('click', '#hooktail-leave1', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsOne);
        $(targetDiv).addClass('showthis');
    });


       // Hooktail question 2
       $(document).on('click', '#hooktail-stay2', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailThree);
        $(targetDiv).addClass('showthis');
    });

    $(document).on('click', '#hooktail-leave2', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsFour);
        alert("Wake up! Snap out of it! You still have to make it home!")
        $(targetDiv).addClass('showthis');
        $('#the-end').css("display", "block")
    });

    
       // Hooktail question 3
       $(document).on('click', '#hooktail-stay3', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailFour);
        $(targetDiv).addClass('showthis');
        $('#the-end').css("display", "block")
    });

    $(document).on('click', '#hooktail-leave3', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsFour);
        alert("Wake up! Snap out of it! You still have to make it home!")
        $(targetDiv).addClass('showthis');
        $('#the-end').css("display", "block")
        
    });

 })