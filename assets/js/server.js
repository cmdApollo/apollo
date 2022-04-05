$.ajax({
  //your server url
  url: "http://google.com",
  type: "post",
  data: "onlinecheck",

  success: function(){
      //function if server's online
      document.getElementById("serverstatus").src = "./assets/img/icons/200.png";
  },
  error:function(){
      //function if server's offline
      document.getElementById("serverstatus").src = "./assets/img/icons/404.png";
  }
});
