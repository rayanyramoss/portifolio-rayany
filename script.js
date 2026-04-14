
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modalCertificado");
    const modalImg = document.getElementById("imgCertificado");
    const legenda = document.getElementById("legenda-modal");
    const cartoes = document.querySelectorAll(".cartao");
    const spanFechar = document.querySelector(".fechar-modal");

    cartoes.forEach(cartao => {
        cartao.onclick = function() {
            const caminhoImagem = this.getAttribute("data-cert");
            const tituloCurso = this.querySelector("h4").innerText;
           
            if (caminhoImagem && caminhoImagem !== "") {
                modal.style.display = "block";
                modalImg.src = caminhoImagem;
                legenda.innerHTML = `Certificado: ${tituloCurso}`;
            } else {
                alert("O certificado para este curso ainda não foi carregado.");
            }
        }
    });


    spanFechar.onclick = () => modal.style.display = "none";

   
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

