var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Abhijeet Doiphode", "Swara Abhijeet Doiphode", "Shataneek Abhijeet Doiphode", "Priyanka Abhijeet Doiphode";
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
   
    var updatedImage = "https://i.postimg.cc/MGn9GJXw/family.jpg" image;
    var updatedImage = "https://i.postimg.cc/wjMnFtMX/father.jpg" image;
var updatedImage = "https://i.postimg.cc/5ymDKL83/bro.jpg" image;
    var updatedImage ="https://i.postimg.cc/JnL6wtrd/sister.jpg" image;
    var updatedImage = "https://i.postimg.cc/bw5W5zSK/mother.jpg"image;
    

   
    
    var updatedName = " Family Book"name;
    var updatedName = "Swara Abhijeet Doiphode"name ;
    var updatedName = "Shataneek Abhijeet Doiphode"name;
     var updatedName = "Priyanka Abhijeet Doiphode" name;
     var updatedName =  "Abhijeet Doiphode"name;
     
     document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
