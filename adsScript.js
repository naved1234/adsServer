const insertAd = () => {
  const adDiv = document.getElementById('some_random_id');
  adDiv.style.backgroundImage = "url('http://localhost:3000/images/kellogs.jpg')";
  adDiv.style.width = "500px";
  adDiv.style.height = "400px";
};

insertAd();