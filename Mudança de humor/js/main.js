function show_happy(){
    document.getElementById('happy').style.display = 'block';
    document.getElementById('sad').style.display = 'none';
    document.getElementById('angry').style.display = 'none';
    document.getElementById('rage').style.display = 'none';
    document.getElementById('humor_home').style.display = 'none';
    document.getElementById('body').style.backgroundColor = '#533E14';
}

function show_sad(){
    document.getElementById('happy').style.display = 'none';
    document.getElementById('sad').style.display = 'block';
    document.getElementById('angry').style.display = 'none';
    document.getElementById('rage').style.display = 'none';
    document.getElementById('humor_home').style.display = 'none';
    document.getElementById('body').style.backgroundColor = '#7845C7';
}

function show_angry(){
    document.getElementById('happy').style.display = 'none';
    document.getElementById('sad').style.display = 'none';
    document.getElementById('angry').style.display = 'block';
    document.getElementById('rage').style.display = 'none';
    document.getElementById('humor_home').style.display = 'none';
    document.getElementById('body').style.backgroundColor = '#B8331F';
}

function show_rage(){
    document.getElementById('happy').style.display = 'none';
    document.getElementById('sad').style.display = 'none';
    document.getElementById('angry').style.display = 'none';
    document.getElementById('rage').style.display = 'block';
    document.getElementById('humor_home').style.display = 'none';
    document.getElementById('body').style.backgroundColor = '#db0f00';
}

function home(){
    document.getElementById('happy').style.display = 'none';
    document.getElementById('sad').style.display = 'none';
    document.getElementById('angry').style.display = 'none';
    document.getElementById('rage').style.display = 'none';
    document.getElementById('humor_home').style.display = 'block';
    document.getElementById('body').style.backgroundColor = '#000103';
}

