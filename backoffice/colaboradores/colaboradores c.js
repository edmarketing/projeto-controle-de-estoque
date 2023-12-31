const dadosGrid=document.querySelector("#dadosGrid");
const btn_add=document.querySelector("#btn_add");
const novoColaborador=document.querySelector("#novoColaborador");
const btn_fecharPopup=document.querySelector("#btn_fecharPopup");

const endpint_todoscolaboradores="http://127.0.0.1:1880/todosusuarios";
fetch(endpint_todoscolaboradores)
.then(res=>res.json())
.then(res=>{
    dadosGrid.innerHTML="";
    res.forEach(e=>{
        const divlinha=document.createElement("div");
        divlinha.setAttribute("class","linhaGrid");

        const divc1=document.createElement("div");
        divc1.setAttribute("class","colunalinhaGrid c1");
        divc1.innerHTML=e.n_usuario_usuario;
        divlinha.appendChild(divc1);

        const divc2=document.createElement("div");
        divc2.setAttribute("class","colunalinhaGrid c2");
        divc2.innerHTML=e.s_nome_usuario;
        divlinha.appendChild(divc2);

        const divc3=document.createElement("div");
        divc3.setAttribute("class","colunalinhaGrid c3");
        divc3.innerHTML=e.n_tipousuario_tipousuario;
        divlinha.appendChild(divc3);

        const divc4=document.createElement("div");
        divc4.setAttribute("class","colunalinhaGrid c4");
        divc4.innerHTML=e.c_status_usuario;
        divlinha.appendChild(divc4);

        const divc5=document.createElement("div");
        divc5.setAttribute("class","colunalinhaGrid c5");
        divc5.innerHTML=e.n_usuario_usuario;
        divlinha.appendChild(divc5);

        dadosGrid.appendChild(divlinha);
    });
});

btn_add.addEventListener("click",(evt)=>{
    novoColaborador.classList.add("ocultarPopup");
});

btn_fecharPopup.addEventListener("click",(evt)=>{
    novoColaborador.classList.remove("ocultarPopup");
});