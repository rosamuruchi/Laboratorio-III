window.addEventListener('load', ()=>{

    document.forms[0].addEventListener('submit', enviarDatos)
});

function enviarDatos(e)
{
    e.preventDefault();

    let data = traerDatos(e.target);

    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        

        let info= document.getElementById('info');

        if(xhr.readyState == 4) //esta bien
        {
            if(xhr.status == 200) //si la peticion es correcta
            {
                setTimeout(() => {
                    info.innerText = xhr.responseText;

                
                    clearTimeout(tiempo);
                }, 3000);

            }
            else
            {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
        else
        {
            info.innerHTML = '<img src = "./images/spinner.gif" alt="spinner" />';
        }


    }
    xhr.open('GET','./servidor.php?' + data,true); 

    //xhr.setRequestHeader('Content-type','Application/x-www-form-urlencoded');
    xhr.send();

    var tiempo =setTimeout(() => {
        xhr.abort();
        info.innerHTML='Servidor ocupado. intente mas tarde';
    }, 4000);
}

function traerDatos(form){
    let nombre =form.nombre.value;
    let apellido =form.apellido.value;

    return `nombre=${nombre}&apellido=${apellido}`;
}