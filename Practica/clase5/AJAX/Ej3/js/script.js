window.addEventListener('load', ()=>{

    document.getElementById('btnTraer').addEventListener('click',traerTexto);
});

function traerTexto()
{
    let xhr=new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        //aca va el codigo que maneja la peticion

        let info= document.getElementById('info');

        if(xhr.readyState == 4) //esta bien
        {
            if(xhr.status == 200) //si la peticion es correcta
            {
                setTimeout(() => {
                    let persona = JSON.parse(xhr.responseText);

                    info.innerHTML="";
                    for (persona of lista  ) //FOR IN trae indices ... FOR ON trae los valores de esos indices
                    {
                      info.innerText= `${persona.id} ${persona.nombre}${persona.email} ${persona.genero} <hr/>`;

                    }
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
    xhr.open('GET','./personas.json',true);
    xhr.send();

    var tiempo =setTimeout(() => {
        xhr.abort();
        info.innerHTML='Servidor ocupado. intente mas tarde';
    }, 4000);
}