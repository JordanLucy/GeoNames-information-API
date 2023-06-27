//Earthquake Function
$('#btn').click(function() {

    $.ajax({ 
        url: "/php/getEarthquakeInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#eqNorth').val(),
            south: $('#eqSouth').val(),
            east: $('#eqEast').val(),
            west: $('#eqWest').val()
        },
        success: function(result) {

            if (result.status.name == "ok") {
                $('#eqDate').html(result['data']['earthquakes'][0]["datetime"]);
                $('#eqDepth').html(result['data']['earthquakes'][0]["depth"]);
                $('#eqMagnitude').html(result['data']['earthquakes'][0]["magnitude"]);
                $('#eqLng').html(result['data']['earthquakes'][0]["lng"]);
                $('#eqLat').html(result['data']['earthquakes'][0]["lat"]);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);

        }
    });
});

//TimeZone Function
$('#btn1').click(function() {

    $.ajax({
        url: "/php/getTimezoneInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            longitude1: $('#long1').val(),
            latitude1: $('#lat1').val()
        },
        success: function(result) {
            
            if (result.status.name == "ok") {

                /*$.map(result['data'], (el) => {
                    $(`#${el}`.html(el))
                    console.log(el);
                })*/
                
                console.log(result);    

                Object.keys(result['data']).forEach(key => {
                    console.log(key);
                    $(`#timeZoneData `).append(`<p>${key}: ${result['data'][key]}</p>`);
                  });

                /*$('#sunrise').html(result['data']['sunrise']);
                $('#sunset').html(result['data']['sunset']);
                $('#country').html(result['data']['countryName']);
                $('#timeZone').html(result['data']['timezoneId']);
                $('#currentTime').html(result['data']['time']);*/
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
});

//Ocean Function
$('#btn2').click(function() {

    $.ajax({
        url: "/php/getOceanInfo.php",
        type: "POST",
        dataType: 'json',
        data: {
            longitude2: $('#long2').val(),
            latitude2: $('#lat2').val()
        },
        success: function(result) {

            if (result.status.name == "ok") {
                console.log(result['data']['ocean']);
                $('#ocean').html(result['data']['ocean']['name']);
            }
        }, 
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
});