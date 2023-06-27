//Earthquake Function
$('#btn').click(function() {

    $(`#earthquakeData`).html(`<p>Loading...</p>`);

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

            $(`#earthquakeData`).html("");
            
            if (result.status.name == "ok") {
                if (result['data']['magnitude'] === undefined) {
                    $(`#earthquakeData`).html(`<p>Error: API returned invalid data.</p>`);
                    return
                }
                const wantedKeys = ['datetime', 'depth', 'magnitude','lng','lat'];
                Object.keys(result['data']['earthquakes'][0]).forEach(key => {
                    if (wantedKeys.includes(key)) {
                        $(`#earthquakeData`).append(`<p>${key}: ${result['data'][key]}</p>`);
                    }
                  });
            }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $(`#earthquakeData`).html(`<p>Error: Error has occured, please try again later</p>`);
            console.log(jqXHR, textStatus, errorThrown);

        }
    });
});

//TimeZone Function
$('#btn1').click(function() {

    $(`#timeZoneData`).html(`<p>Loading...</p>`);

    $.ajax({
        url: "/php/getTimezoneInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            longitude1: $('#long1').val(),
            latitude1: $('#lat1').val()
        },
        success: function(result) {

            $(`#timeZoneData`).html("");
            
            if (result.status.name == "ok") {
                if (result['data']['countryName'] === undefined) {
                    $(`#timeZoneData`).html(`<p>Error: API returned invalid data.</p>`);
                    return
                }
                const wantedKeys = ['sunrise', 'sunset', 'countryName','timezoneId','time'];
                Object.keys(result['data']).forEach(key => {
                    if (wantedKeys.includes(key)) {
                        $(`#timeZoneData`).append(`<p>${key}: ${result['data'][key]}</p>`);
                    }
                  });
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $(`#timeZoneData`).html(`<p>An Error has occured, please try again later.</p>`);
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
                $('#ocean').html(`oceanName: ${result['data']['ocean']['name'] ?? "Ocean Not Found"}`);
            }
        }, 
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
});