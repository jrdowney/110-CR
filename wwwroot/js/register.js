
function Property(name, room, baths, price, sqrFeet, image, desc){
    
    this.Name = name;
    this.Rooms= parseInt(room);
    this.Bath = parseInt(baths);
    this.Price = parseFloat(price);
    this.SqrFeet = parseInt(sqrFeet);
    this.ImageUrl = image;
    this.Description = desc;

}

function register(){
    var name = $('#txtName').val();
    var rooms = $('#txtRooms').val();
    var baths = $('#txtBathrooms').val();
    var price = $('#txtPrice').val();
    var sqrFeet = $('#txtSqrFeet').val();
    var image = $('#txtImage').val();
    var desc = $('#txtDescription').val();

    var property = new Property(name, rooms, baths, price, sqrFeet, image, desc);
    console.log(property);

    $.ajax({
        url: "/catalog/registerProperty",
        type: "POST",
        data: JSON.stringify(property),
        contentType: 'application/json',
        success: function(res){
            console.log("Server responded", res);
        },
        error: function(details){
            console.log("Error ", details);
        }
    });
    
}

function init(){
    console.log("Register Page")
    // events
    $('#btnSave').click(register);
}


window.onload = init;