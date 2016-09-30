// waiting for DOM to be ready before making changes
$(document).ready( function(){
    // appending image to the empty div
    $('#my-div').append('<img src="http://i.imgur.com/90Mmdcm.png" />');

    // calling jQuery hover function to add animation on hover
    $('#my-div img').hover( function(){
        this.src = 'http://i.imgur.com/nTj3Fxx.gif';
    }, function(){
        this.src = 'http://i.imgur.com/90Mmdcm.png';
    });

    // using the mousedown function to change the image
    $('#my-div img').mousedown( function(){
        this.src = 'http://i.imgur.com/Rfj0a80.png';
    });

    // removes any hadoukens that are on the screen before displaying another one
    $('#my-div img').mousedown( function(){
        $('.hadouken').remove();
    });

    // on mousedown add new hadouken image
    $('#my-div img').mousedown( function(){
        $('#my-div').append(
            '<img class="hadouken" src="http://i.imgur.com/oTyQRvX.gif" />'
        );
    });

    // after the image is added use the animate function to make the image move to the right
    $('#my-div img').mousedown( function(){
        $('.hadouken').animate( {
            "margin-left": "600px"
        }, 1000, 'swing', function(){
            this.remove();
        });
    });

    // on mouseup use original image of Ryu
    $('#my-div img').mouseup( function(){
        this.src = 'http://i.imgur.com/90Mmdcm.png'
    });
});