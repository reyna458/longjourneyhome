$(document).ready(function()
 {

  
    let scrollScore;
    $(document).scroll(function() {
        let scrollScore = $(document).scrollTop();
        // console.log(scrollScore)

        if (scrollScore > 0) {
            $('h2').css("opacity", "1")
            $('h2').css("animation", "appear 2s ease-in-out")
            $('#project').html("Invisible Nightlife")
          
           
                $('#name').html("The Long Journey Home")

                $('#plain').html(
                    "<a href='plaintext.html'>Plain text</a>"
                )
                $('#plain').css("border", "white solid 2px")
                    
        
        } 
             

        if (scrollScore > 250) {
            $('#stuff').css("opacity", "0.2")
            $('#foreword').css("animation", "appear 3s ease-in-out")
            $('#foreword').css("opacity", "1")
        } else if (scrollScore < 250) {

            $('#header').css("visibility", "visible");
            $('#stuff').css("opacity", "1")
        } 

    })

    // establish variables
    let hooktailOne = $('#hooktail-part1').html()
    console.log(hooktailOne)
    let hooktailTwo = $('#hooktail-part2').html()
    let hooktailTwoHalf = $('#hooktail-part2-5').html()
    let hooktailThree = $('#hooktail-part3').html()
    let hooktailFour = $('#hooktail-part4').html()

    let ghsOne = $('#gethomesafe-part1').html()
    let ghsTwo = $('#gethomesafe-part2').html()
    let ghsThree = $('#gethomesafe-part3').html()
    let ghsFour = $('#gethomesafe-part4').html()
   
    let graphCount = 0;

    let hooktailTitle = `Hooktail Inn`
    let ghsTitle = `Get Home Safe`

    console.log(graphCount)

    $(document).on('click', '#girlpath', function() {
        graphCount++
        let targetDiv = `#` + graphCount
        console.log(targetDiv)
        $('#choosepath').css("display", "none")
        $('#project').html(ghsTitle)
        $('#safeTitle').removeClass('titleHide')

            var delay = 5000;
            setTimeout(function() {
                $(targetDiv).html(ghsOne)
                let currentScroll = $(window).scrollTop();
                $('html, body').animate({
                    scrollTop: currentScroll + 200
                }, 300);
                $(targetDiv).addClass('showthis')
                    }, delay);  
    
    }) 

    $(document).on('click', '.questiondiv', (function(){
        $(this).find('p, li, ol, hr').css("visibility", "visible")
        
        $(this).find('h6').html("CHOICE")
        $(this).find('h5').css("display", "none")
    }))

    $(document).on('click', '#catpath', function() {
        graphCount++
        let targetDiv = `#` + graphCount
        console.log(targetDiv)
        $('#choosepath').css("display", "none")
      
        $('#project').html(hooktailTitle)
        $('#hookTitle').removeClass('titleHide')

        var delay = 5000;
            setTimeout(function() {
                $(targetDiv).html(hooktailOne)
                let currentScroll = $(window).scrollTop();
                $('html, body').animate({
                    scrollTop: currentScroll + 200
                }, 300);
                $(targetDiv).addClass('showthis')
                    }, delay);  
    })

    // change the background when you select an option
    $(document).on('click', 'li', function() {
        $(this).parent().css("background-color", "#391C34")
        graphCount++ 
        let currentScroll = $(window).scrollTop();
        $('html, body').animate({
            scrollTop: currentScroll + 200
        }, 300);
    })

    console.log(graphCount)

    // get home safe question 2

    $(document).on('click', '#GHS-stay1', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsTwo);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#GHS-leave1').prop('disabled', true);
        $(this).css("color", "aqua")
    });

    $(document).on('click', '#GHS-leave1', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailOne);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#GHS-stay1').prop('disabled', true);
        $(this).css("color", "aqua")
        $('#project').html(hooktailTitle)
    });

    // get home safe question 2

    $(document).on('click', '#GHS-stay2', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsThree);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#GHS-leave2').prop('disabled', true);
        $(this).css("color", "aqua")

    });

    $(document).on('click', '#GHS-leave2', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailOne);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#GHS-stay2').prop('disabled', true);
        $(this).css("color", "aqua")
        $('#project').html(hooktailTitle)
    });

    // Get Home Safe question 3

    $(document).on('click', '#GHS-stay3', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsFour);
        $(targetDiv).addClass('showthis');
        $('#the-end-div').css("display", "block")
        $(this).prop('disabled', true);
        $('#GHS-leave3').prop('disabled', true);
        $(this).css("color", "aqua")
    });

    $(document).on('click', '#GHS-leave3', function() {
        // graphCount++;
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailTwoHalf);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#GHS-stay3').prop('disabled', true);
        $(this).css("color", "aqua")
        $('#project').html(hooktailTitle)

    });

    // Hooktail question 1
    $(document).on('click', '#hooktail-stay1', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailTwo + hooktailTwoHalf);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#hooktail-leave1').prop('disabled', true);
        $(this).css("color", "aqua")

    });

    $(document).on('click', '#hooktail-leave1', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsOne);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#hooktail-stay1').prop('disabled', true);
        $(this).css("color", "aqua")
        $('#project').html(ghsTitle)
    });


       // Hooktail question 2
       $(document).on('click', '#hooktail-stay2', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailThree);
        $(targetDiv).addClass('showthis');
        $(this).prop('disabled', true);
        $('#hooktail-leave2').prop('disabled', true);
        $(this).css("color", "aqua")

    });

    $(document).on('click', '#hooktail-leave2', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsFour);
        alert("Wake up! Snap out of it! You still have to make it home!")
        $(targetDiv).addClass('showthis');
        $('#the-end-div').css("display", "block")
        $(this).prop('disabled', true);
        $('#hooktail-stay2').prop('disabled', true);
        $(this).css("color", "aqua")
        $('#project').html(ghsTitle)
    });

    
       // Hooktail question 3
       $(document).on('click', '#hooktail-stay3', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(hooktailFour);
        $(targetDiv).addClass('showthis');
        $('#the-end-div').css("display", "block")
        $(this).prop('disabled', true);
        $('#hooktail-leave3').prop('disabled', true);
        $(this).css("color", "aqua")

    });

    $(document).on('click', '#hooktail-leave3', function() {
        let targetDiv = `#` + graphCount
        $(targetDiv).html(ghsFour);
        alert("Wake up! Snap out of it! You still have to make it home!")
        $(targetDiv).addClass('showthis');
        $('#the-end-div').css("display", "block")
        $(this).prop('disabled', true);
        $('#hooktail-stay3').prop('disabled', true);
        $(this).css("color", "aqua")
        $('#project').html(ghsTitle)
    });

    $(document).on('click', '#reset', function() {
        alert("Was it all a dream...?");
        setTimeout(function() {
            window.location.reload();
        }, 200); // waits half a second before reloading
    });
    

 })