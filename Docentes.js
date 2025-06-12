function pegarDocentes(doc){
    
    let div = document.querySelector("#res");
    doc.querySelectorAll("#docente").forEach(desc => {
        div.appendChild(desc);
    });

}

function Mostrar() {
    fetch("https://fatecrl.edu.br/cursos/sistemas-para-internet/docentes")
        .then(resp => {
            if(resp.status != 200){
                throw new Error ("Problemas no servidor");
            }
            return resp.text();
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text, "text/html");
            pegarDocentes(doc);
        })

        .catch(err =>{
            document.querySelector("#res").innerHTML = err.message;
        })


    
}
function main(){
    document.querySelector("#btn").addEventListener("click", Mostrar);
}

window.onload = main