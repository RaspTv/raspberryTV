var url = 'js/teste.pdf';
var idCanvasContainer = 'carousel';
var options = null
var pageNum = 1;
var options = options || { scale: 1 };
canvasContainer = document.getElementById(idCanvasContainer);
getCanvas()
var tmp = null;

var filesList = ['documentos/5500/A_page-001.jpg','documentos/5500/A_page-002.jpg','js/teste.pdf']

// criar renderImage para intregrar com o projeto atual, assim conseguimos transformar o array acima no array
// abaixo onde conseguimos fazer a call de cada documento em ordem.
/*
  exemplo:
  - arquivo 1: é uma imagem, e esta na posição 0, logo ao chegar no index 0 do carrossel irá chamar renderImage(filesList[0]).
  - arquivo 2: é uma imagem, e esta na posição 1, logo ao chegar no index 1 do carrossel irá chamar renderImage(filesList[1]). 
  - arquivo 3: é um pdf, e esta na posição 2, logo ao chegar no index 2 do carrossel deve começar a passar as páginas em sequencia
               do documento, devido a isso é necessário passar da seguinte maneira '[funcCarregaPaginaPDF,indexArquivo,pagina]'
*/
var filesFunc = [[renderImage,0],[renderImage,1],[nextPage,2,1],[nextPage,2,2]];

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var PDFJS = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
PDFJS.GlobalWorkerOptions.workerSrc = 'js/pdf/build/pdf.worker.js';

var carouselFilesObject = createFilesFunctionsList(filesList); 
function createFilesFunctionsList(listOfFiles=[]) {
    let ext = '';
    let compairResult = '';
    let objectToReturn = {};
    let orderedFunctionsList = [];
    
    for(let i=0;i<listOfFiles.length;i++){
        ext = getExtension(listOfFiles[i]);
        compairResult = compairFileExtensionInSupportedExtensions(ext);
        if (compairResult=='image'){
            //[tipo arquivo, intervalo, função, path do arquivo]
            orderedFunctionsList.push(['image',7000,renderImage,listOfFiles[i]]);
        } else if (compairResult=='video'){
            continue
        } else if (compairResult=='pdf'){
            if (objectToReturn[listOfFiles[i]] == undefined){
                let loadingTask = PDFJS.getDocument(listOfFiles[i]);
                loadingTask.promise.then(function(pdf) {
                    objectToReturn[listOfFiles[i]] = pdf;
                    for(let j=1 ;j<=pdf.numPages;j++){
                        // [tipo arquivo, intervalo, função, path do arquivo, numero da página]
                        orderedFunctionsList.push(['pdf', 15000,renderPage,listOfFiles[i],j]);
                    } 
                });
            }
        } else {
            continue
        }
    }
    objectToReturn['execList'] = orderedFunctionsList;
    objectToReturn['actualFileType'] = orderedFunctionsList[0][0];
    objectToReturn['indexExecList'] = -1;
    return objectToReturn; 
}

function compairFileExtensionInSupportedExtensions(ext){
    if (createRegexByList(getAvaibleImageExtensions()).test(ext))
        return 'image';
    else if (createRegexByList(getAvaibleVideoExtensions()).test(ext))
        return 'video';
    else if (createRegexByList(getAvaiblePdfExtensions()).test(ext))
        return 'pdf';
    else
        return 'unsuported';
}

function createRegexByList(list){
    return new RegExp(list.join('|'));
}

function getExtension(filename){
    return /\..+/.exec(filename)[0];

}

function getAvaibleImageExtensions(){
    return ['.jpg'];
}

function getAvaibleVideoExtensions(){
    return ['.mp4'];
}

function getAvaiblePdfExtensions(){
    return ['.pdf'];
}

function renderImage(name){
    var canvas = getCanvas('canvas');
    var ctx = canvas.getContext("2d");
    var img = new Image();   // Create new img element
    canvasContainer.appendChild(canvas);
    img.addEventListener('load', function() {
        ctx.drawImage(img,0,0);
    }, false);
    img.src = name; // Set source path
}

function getCanvas(name, width=1920, height=1080){
    var canvas = document.getElementById(name);
    var canvasContainer = document.getElementById('carousel');
    console.log(canvasContainer.clientHeight)
    if (canvas == null){
        canvas = document.createElement('canvas');
        canvas.setAttribute("id", name);
        canvas.height = canvasContainer.clientHeight;
        canvas.width = canvasContainer.clientWidth;
    }
    return canvas
}

function renderPdfPageCanvas(page) {
    //var viewport = page.getViewport(options.scale);
    var viewport = page.getViewport({'scale':1});
    var canvas = getCanvas('canvas');
    var ctx = canvas.getContext('2d');
    var renderContext = {
        canvasContext: ctx,
        viewport: viewport
    };
    canvasContainer.appendChild(canvas);
    page.render(renderContext);
}

function renderPage(pdfDoc, pageNum){
    pdfDoc.getPage(pageNum).then(renderPdfPageCanvas);
}

function prevPage(){
    runCarousel(-1);
}

function nextPage(){
    runCarousel(1);
}

function getObject(pdfDoc){
    localPdfDoc = pdfDoc;
    renderPages(localPdfDoc);
}

function getIndex(prevNext){
    // prev = -1 | next = 1
    if (prevNext == 1){
        if (carouselFilesObject['indexExecList']==carouselFilesObject['execList'].length-1) {
            carouselFilesObject['indexExecList'] = 0;
        } else{
            carouselFilesObject['indexExecList'] += 1;
        }
    } else {
        if (carouselFilesObject['indexExecList']==0) {
            carouselFilesObject['indexExecList'] = carouselFilesObject['execList'].length-1 ;
        } else{
            carouselFilesObject['indexExecList'] -= 1;
        }
    }
}

function refreshCurrentFileType(){
    carouselFilesObject.actualFileType = carouselFilesObject.execList[carouselFilesObject.indexExecList][0];
}

function initCarousel(filesObject){
    carouselFilesObject = filesObject;
    runCarousel();
}

function runCarousel(prevNext=1){
    getIndex(prevNext);
    refreshCurrentFileType();
    renderCarousel();
    intervalCatcher();
}

function renderCarousel(){
    if (carouselFilesObject.execList[carouselFilesObject.indexExecList][0]=='image'){
        let filename = carouselFilesObject.execList[carouselFilesObject.indexExecList][3];
        carouselFilesObject.execList[carouselFilesObject.indexExecList][2](filename);
    } else if (carouselFilesObject.execList[carouselFilesObject.indexExecList][0]=='pdf') {
        let filename = carouselFilesObject.execList[carouselFilesObject.indexExecList][3];
        let page = carouselFilesObject.execList[carouselFilesObject.indexExecList][4];
        carouselFilesObject.execList[carouselFilesObject.indexExecList][2](carouselFilesObject[filename], page);
    }
}

function intervalCatcher() {
    if (tmp==null){
        tmp = setInterval(runCarousel, carouselFilesObject.execList[carouselFilesObject.indexExecList][1]);
    } else {
        clearInterval(tmp)
        tmp = setInterval(runCarousel, carouselFilesObject.execList[carouselFilesObject.indexExecList][1]);
    }
}

PDFJS.disableWorker = true;
runCarousel();
//PDFJS.getDocument(url).then(getObject);
//tmp = setInterval(nextPage, TempoTroca);

