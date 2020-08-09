
function fetchData(){
    $.ajax({
        url: "/catalog/getCatalog",
        type: "Get",
        success: function(data){
            console.log("Server Responded with ", data);

            // Sort by lowest price first
            data.sort(function(a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });

            for (let i = 0; i < data.length; i++) {
                var property = data[i];

                var syntax =
                `<div class="item">
                <img src="${property.imageUrl}">
                <label class='price fas fa-tag'> $ ${property.price ? property.price.toFixed(2) : 'Please Call'}</label>
                    <div class="info">
                        <label class="rooms fas fa-bed"> ${property.rooms}</label>
                        <br>
                        <label class="bathrooms fas fa-bath">  ${property.bath}</label>
                        <br>
                        <label class="area fas fa-ruler"> ${property.sqrFeet} ft</label>
                    <br>
                    <label>Description:</label><p>${property.description}</p>
                    
                    
                </div>`;

                $("#catalogContainer").append(syntax);
            }

            // Travel the array
            // get each property
            // display property in html
        },
        error: function(details){
            console.log("Error ", details);
        }
    });
}



function init(){
    console.log("Catalog Page");

    fetchData();
}

window.onload = init;