var btnAbrir = document.querySelector('.btn-menu');
var btnClose = document.querySelector('.btn-close')    
btnAbrir.addEventListener('click',()=>{
            let menu = document.querySelector('.iens-mobile');
            
                menu.style.height = "400px";
                
                btnAbrir.style.display = "none";
                btnClose.style.display = "block";
            
        });
        btnClose.addEventListener('click',(e)=>{
            e.preventDefault();
            let menu = document.querySelector('.iens-mobile');
            
                menu.style.height = "0px";
                
                btnAbrir.style.display = "block";
                btnClose.style.display = "none";
        })