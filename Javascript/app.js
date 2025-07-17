 
 function displayMenu() {
        var element = document.getElementById('dropdown');
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }

document.getElementById('menu').addEventListener('click', displayMenu);