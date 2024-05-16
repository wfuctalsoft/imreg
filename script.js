var container = document.getElementById("standContent");
function upload(e){
    e.preventDefault();
    alert("Сервер недоступен для загрузки. Поробуйте другие варианты");
    // let email = document.getElementById("emailI").value;
    // let name = document.getElementById("nameI").value;
    // let bio = document.getElementById("bioI").value;
    // let portrait = document.getElementById("portraitI").files[0];
    // const namedata = new FormData();
    // namedata.append('nameI', name);
    // const biodata = new FormData();
    // biodata.append('bioI', bio);
    // const imgdata = new FormData();
    // biodata.append('portraitI', portrait);
  
    // fetch(`/names`, {
    //   method: 'POST',
    //   body: namedata
    // }).catch(err => console.error(err));
    // fetch(`/bios`, {
    //   method: 'POST',
    //   body: biodata
    // }).catch(err => console.error(err));
    // fetch(`/images`, {
    //   method: 'POST',
    //   body: imgdata
    // }).catch(err => console.error(err));
}
let sitename = window.location.href;
let consent = `СОГЛАСИЕ\n
на обработку персональных данных\n
Настоящее Соглашение определяет права и обязанности автора любой публикации (далее по тексту — «Пользователь»), размещаемой на сайте МИПОД «Бессмертный полк» - ${sitename} (далее по тексту — «Сайт», «Администрация сайта»).
Пользователь, размещая на Сайте любую информацию, соглашается со всеми условиями настоящего Соглашения и обязуется неукоснительно соблюдать установленные Соглашением требования и обязанности.
При формировании истории солдата или иной публикации Пользователь обязуется использовать только достоверную информацию, которая может быть подтверждена документально и (или) свидетельскими показаниями. В случае, если по какой-либо причине распространенная Пользователем информация содержит в себе недостоверные факты, все споры, возникающие по данному факту и в связи с ним с третьими лицами, Пользователь обязуется разрешать самостоятельно своими силами и за счет собственных средств. При этом в случае возникновения любой претензии со стороны третьих лиц по факту размещения недостоверной информации стороны (Пользователь и Администрация сайта) обязаны незамедлительно информировать друг друга.
Любая информация, размещенная Пользователем на Сайте должна соответствовать требованиям действующего законодательства РФ. Запрещается размещение любой информации, которая может носить экстремистский характер, содержать клевету, порочить честь, достоинство и (или) деловую репутацию третьих лиц. Запрещается размещение рекламной информации. В случае, если Администрацией сайта выявлены какие-либо признаки нарушения действующего законодательства РФ, Администрация вправе по своему усмотрению удалить всю публикацию и (или) только часть, которая содержит соответствующее нарушение.
Администрация сайта не несет ответственности за достоверность и полноту размещаемой Пользователем информации (истории солдата или иной публикации), а также за ее соответствие требованиям действующего законодательства РФ.
Размещая на Сайте информацию, содержащую персональные данные, Пользователь соглашается с тем, что предоставленные персональные данные подлежат обработке Администрацией сайта в соответствии с положениями ФЗ РФ «О защите персональных данных».
Под обработкой персональных данных Заказчика (субъекта персональных данных) понимаются действия (операции) Исполнителя с персональными данными, включая сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, распространение (в том числе передачу), обезличивание, блокирование, уничтожение персональных данных.
Целью предоставления Пользователем персональных данных и последующей обработки их Администрацией сайта является возможность публикации предоставленной Пользователем информации на сайте ${sitename}. Настоящее согласие действует в течение всего срока публикации и в течение 5-ти лет с даты прекращения публикации информации Пользователя (истории солдата и иной) на указанных выше сетевых ресурсах.
Заключение настоящего Приложения в простой письменной форме признается сторонами как согласие Заказчика на обработку следующих персональных данных: фамилии, имени, отчества; даты рождения; почтовых адресов; сведений о гражданстве; номере основного документа, удостоверяющего личность Заказчика, сведений о дате и органе выдачи указанного документа; номерах телефонов, факсов, адресах электронной почты, а также иных сведений, которые могут быть отнесены действующим законодательством РФ к персональным данным.
Пользователь предоставляет Администрации сайта право осуществлять следующие действия (операции) с персональными данными: сбор и накопление; хранение в течение срока публикации и не менее 5-ти лет с момента даты прекращения последней публикации; уточнение (обновление, изменение); использование; уничтожение; обезличивание; передача третьим лицам, с соблюдением мер, обеспечивающих защиту персональных данных от несанкционированного доступа.
Размещая публикацию на Сайте Пользователь предоставляет Администрации Сайта право на использование предоставленной информации любым законным способом на любых носителях и информационных, в том числе сетевых, ресурсах. Любое использование публикации Пользователя не должно носить коммерческий, политический и (или) рекламный характер. При этом Администрация Сайта по запросу Пользователя обязана предоставить полную информацию о сроке использования публикации Пользователя, месте и способе ее размещения.
Положения настоящего Соглашения носят общий характер. При необходимости отношения сторон регулируются отдельными договорами, соглашениями или иным документами с учетом конкретной специфики.
Все иные вопросы, не определенные сторонами в настоящем Соглашении, регулируются положениями действующего законодательства РФ.
Действующая редакция настоящего Соглашения размещена по адресу ${sitename}. Настоящее Соглашение может быть изменено Администрацией сайта в любой момент без уведомления Пользователя. Новая редакция Соглашения вступает в силу с момента его опубликования по адресу ${sitename}.`;
document.getElementById("consent").innerText = consent;
getImages();
async function getImages(){
    var eof = false;
    let progress = 0;
    let loaded = 0;
    let loadingInfoText = document.getElementById("lti");
    while(true){
        let img = await getPhoto(progress);
        let name = await getName(progress);
        let bio = await getBio(progress);
        if(name === undefined || img === undefined || bio === undefined) break;
        loadingInfoText.remove();
        let image = document.createElement("img");
        let nameEl = document.createElement("h3");
        let bioEl = document.createElement("h4");
        let item = document.createElement("standItem");
        image.src = img;
        image.id = "photo";
        nameEl.id = "name";
        nameEl.innerText = name;
        bioEl.id = "bio";
        bioEl.innerText = bio;
        item.appendChild(image);
        item.appendChild(nameEl);
        item.appendChild(bioEl);
        item.style.display = "none";
        container.appendChild(item);
        loaded++;
        progress++;
    }
    if(loaded == 0){
        loadingInfoText.innerText = "Не удалось загрузить стенд.";
    }
    else{
        for(let i = 0; i < container.childElementCount;i++){
            let child = container.children[i];
            child.style.display = "inline-block";
        }
    }
}
async function getPhoto(number){
    let resp = await fetch(`../images/${number}`);
    if(!resp.ok) return undefined;
    return await resp.blob().then(blob=>URL.createObjectURL(blob));
}
async function getName(number){
    let resp = await fetch(`../names/${number}`);
    if(!resp.ok) return undefined;
    return resp.text();
}
async function getBio(number){
    let resp = await fetch(`../bios/${number}`);
    if(!resp.ok) return undefined;
    return resp.text();
}
document.getElementById("sumbitRadio").addEventListener("change",function(){
    if(this.checked == true){
        document.getElementById("sumbitConsent").removeAttribute("disabled");
    }
    else{
        document.getElementById("sumbitConsent").setAttribute("disabled","true");
    }
});
function consentSumbit(e){
    e.preventDefault();
    document.getElementById("fstStage").style.display = "none";
    document.getElementById("sndStage").style.display = "block"
}
function dataSumbit(e){
    e.preventDefault();
    let fr = new FileReader();
    fr.readAsArrayBuffer(document.getElementById("portrait").files[0]);
    fr.onloadend = function(evt){
        if (evt.target.readyState == FileReader.DONE) {
            let array = new Uint8Array(evt.target.result);
            let decoded = Array.from(array, function(byte) {
              return ('0' + (byte & 0xFF).toString(16)).slice(-2);
            }).join('');
            var data = {
                "uName": document.getElementById("username").value,
                "sName": document.getElementById("solidername").value,
                "bio": document.getElementById("sbio").value,
                "email": document.getElementById("email").value,
                "phone": document.getElementById("phonenumber").value,
                "img": decoded
            }
            const blob = new Blob([JSON.stringify(data).toString()], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            download(url, 'data.json');
            document.getElementById("sndStage").style.display = "none";
            document.getElementById("sendStage").style.display = "block"
            let a = document.getElementById("downloadData");
            a.href = url;
            a.download = "data.json";
        }
    };
}
function partClick(e){
    document.getElementById("dataForm").style.display = "block";
}
function closeDialog(e){
    document.getElementById("dataForm").style.display = "none";
    document.getElementById("fstStage").style.display = "block";
    document.getElementById("sndStage").style.display = "none";
    document.getElementById("sendStage").style.display = "none"
    document.getElementById("username").value = "";
    document.getElementById("solidername").value = "";
    document.getElementById("sbio").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phonenumber").value = "";
}
const download = (path, filename) => {
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}; 