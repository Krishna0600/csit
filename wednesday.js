$(document).ready(function(){
    $("button").click(function(){
       $.get("https://reqres.in/api/users?page=1", function(response, status){
        if(status == "success"){
            let responseData = response.data;
            if (responseData.length > 0){
                for (var i = 0; i < responseData.length; i++){
                    $("#apiList").append("<li>" + responseData[i].email + "</li>");

                }
            }

        }else{
            console.log('Error Loading Data');
        }
       });
    });
});

// post request

$("button").click(function(){
    $.post("https://reqres.in/api/users",{
        "first_name": "Krishna ",
        "last_name" : "Yadav",
        "address" : "bhaktapur"
       }, function(response, status){
        if(status=="success"){
            console.log('Post Data' + response['address']);
        }else{
            alert('error' + status);
        

       }
    })
})