function menuShow(){

    let menuOpitions = document.querySelector('.buttons');
    if (menuOpitions.classList.contains('open')){
        menuOpitions.classList.remove('open');
    } else{
        menuOpitions.classList.add('open');
    }
}


function menuRifaAdd(){

    let rifaMenu = document.querySelector('.rifa-page-add');
    if (rifaMenu.classList.contains('open')){
        rifaMenu.classList.remove('open');
    } else{
        rifaMenu.classList.add('open');
    }
}

function removeItem(){

    let item = document.querySelector('.delete-item');
        if (item.classList.contains('open')){
            item.classList.remove('open');
        } else{
            item.classList.add('open');
        }
    }

function createRifa(){

    let menu = document.querySelector('.create-page');
    if (menu.classList.contains('open')){
        menu.classList.remove('open');
    } else{
        menu.classList.add('open');
    }
}

function openMenu(){

    let openmenu = document.querySelector('.options');
        if (openmenu.classList.contains('open')){
            openmenu.classList.remove('open');
        } else{
            openmenu.classList.add('open');
        }
    }

    window.onload = function() {
        if (window.location.search.includes('login=adm')) {
          document.querySelector('.button-edit').classList.add('open');
        }
      };

const button = document.querySelector('.person');

button.addEventListener('click', function() {
  if (!window.location.search.includes('login=success')){
    window.location.href = './acess/login.html';
  } else {
    window.location.href = './user/index.html';
  }
});
