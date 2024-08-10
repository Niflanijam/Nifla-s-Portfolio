document.getElementById('BUTTON1').addEventListener('click', function() {
    document.getElementById('image1').style.display = 'block';
    document.getElementById('image2').style.display = 'none';
});

document.getElementById('BUTTON2').addEventListener('click', function() {
    document.getElementById('image1').style.display = 'none';
    document.getElementById('image2').style.display = 'block';
});
