/// <reference path='..\typings\tsd.d.ts' />

module Pzl.SP.Speech {
    
}

// var recognition = new webkitSpeechRecognition();
// recognition.onresult = function(event) { 
//   console.log(event) 
// }
// recognition.start();


/// DOCS: http://shapeshed.com/html5-speech-recognition-api/

//    var recognition = new webkitSpeechRecognition();
//     recognition.continuous = true;
//     recognition.interimResults = true;
//  
//     recognition.onresult = function (e) {
//         var textarea = document.getElementById('results');
//         for (var i = e.resultIndex; i < e.results.length; ++i) {
//             if (e.results[i].isFinal) {
//                 textarea.value += e.results[i][0].transcript;
//             }
//         }
//     }
//  
//     // start listening
//     recognition.start();