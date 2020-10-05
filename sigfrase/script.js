function frases_img(){
    home.style.display="none"
    Box_one.style.display="flex"
    home.style.transition="all 0.8s";
    sigtitulo.innerHTML="Sigfly-Frases"
}

function ver_visao_signo() {
    var signo = signo_digitado.value;
    var dia = Number(data_dia.value);
    var mes = Number(data_mes.value);
    
    if (signo != "Áries" ||signo != "Touro" ||signo != "Gêmeos" ||signo != "Câncer" ||signo != "Leão" ||signo != "Virgem" ||signo != "Libra" ||signo != "Escorpião" ||signo != "Sagitário" ||signo != "Capricórnio" ||signo != "Aquário" ||signo != "Peixes" ){
        visao_signo.innerHTML = "seu signo não existe, veja se está perfeitamente escrito"
    };
    var certificar = dia * mes;
    if (dia>= 30 && mes==2){
        visao_signo.innerHTML = "Dia de fevereiro está errado"
        return
    }
    if (certificar >= 373 || dia >= 32 || mes >= 13 || certificar == 0) {
        visao_signo.innerHTML = "Parece que a data está errada!"
        return
    }
    if (signo == "Áries" || signo == "Touro") {
        var sig_valor = dia * mes * 100 / 100;
    }
    if (signo == "Gêmeos" || signo == "Câncer") {
        var sig_valor = dia * mes * 200 / 100;
    }
    if (signo == "Leão" || signo == "Virgem") {
        var sig_valor = dia * mes * 300 / 100;
    }
    if (signo == "Libra" || signo == "Escorpião") {
        var sig_valor = dia * mes * 400 / 100;
    }
    if (signo == "Sagitário" || signo == "Capricórnio") {
        var sig_valor = dia * mes * 500 / 100;
    }
    if (signo == "Aquário" || signo == "Peixes") {
        var sig_valor = dia * mes * 600 / 100;
    }
    if (sig_valor == 2232) {
        visao_signo.innerHTML = `O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis. <br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 2000) {
        visao_signo.innerHTML = `Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 1800) {
        visao_signo.innerHTML = `Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?<br> Numero da sorte ${sig_valor}`

    }
    if (sig_valor <= 1500) {
        visao_signo.innerHTML = `Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 1300) {
        visao_signo.innerHTML = `Só existe um êxito: a capacidade de levar a vida que se quer.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 1000) {visao_signo.innerHTML =`<br> Numero da sorte ${sig_valor}` }
    if (sig_valor <= 800) {
        visao_signo.innerHTML = `A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 500) {
        visao_signo.innerHTML = `A coragem não é ausência do medo; é a persistência apesar do medo.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 300) {
        visao_signo.innerHTML = `Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 100) {
        visao_signo.innerHTML = `O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 80) {
        visao_signo.innerHTML = `Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 50) {
        visao_signo.innerHTML = `Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 30) {
        visao_signo.innerHTML = `Força de ânimo e coragem na adversidade servem para conquistar o êxito, mais do que um exército.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 20) {
        visao_signo.innerHTML = `Uma auto-imagem forte e positiva é a melhor preparação possível para o sucesso.<br> Numero da sorte ${sig_valor}`
    }
    if (sig_valor <= 10) {
        visao_signo.innerHTML =`Creia em si, mas não duvide sempre dos outros.<br> Numero da sorte ${sig_valor}`
     }
    if (sig_valor <= 5) {
        visao_signo.innerHTML =`Dois homens não podem passar meia hora juntos sem que um conquiste uma evidente superioridade em relação ao outro.<br> Numero da sorte ${sig_valor}`
     }
    if (sig_valor == 1) {
        visao_signo.innerHTML =`Talento é dom, é graça. E sucesso nada tem a ver com sorte, mas com determinação e trabalho.<br> Numero da sorte ${sig_valor}`
     }

}