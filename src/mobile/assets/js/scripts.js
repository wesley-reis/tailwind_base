
/**FORMATAÇÃO DE DATA E HORA DO APLICATIVO */
//Formatando 1 em 01
const zeroFill = n =>{
    return ('0' + n).slice(-2);
}

//formatação de timezone
const timeZone = {
    timeZone: 'America/Sao_Paulo',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
const timez = new Intl.DateTimeFormat([], timeZone);

//formatação de timezone
const dateZone = {
    timeZone: 'America/Sao_Paulo',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};
const datez = new Intl.DateTimeFormat([], dateZone);

//Criar intervalo
const interval = setInterval(() => {
    
    //Hora no timezone America/Sao_paulo
    const horaT = timez.format(new Date());
    //Data no timezone America/Sao_paulo
    const dataT = datez.format(new Date());

    //exibe na tela usando o elemento com a classe data-hora
    document.getElementById('hora').innerHTML = horaT;
    document.getElementById('data').innerHTML = dataT

}, 1000);

/** PEGAR LOCALIZÇÃO DO USUÁRIO */
//geolocalização
if("geolocation" in navigator){

    //ficar atualizando a posição
    const watcher = navigator.geolocation.watchPosition(function(position){
        const lat = position.coords.latitude
        const long = position.coords.longitude
        console.log("Minha lat: " + lat, " e long: " + long);
        document.getElementById('latUser').value = lat;
        document.getElementById('lonUser').value = long;
    }, function(error){
        console.log(error)
    }, { enableHighAccuracy: true, maximumAge: 1000, timeout: 1000})
    //navigator.geolocation.clearWatch(watcher)

}else{
    alert('ops, não foi possivel pegar localização')
}
