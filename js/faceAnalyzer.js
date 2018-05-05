
function emoteMe() {

var face = document.getElementById('canvas');
var recom = document.getElementById('recommendation').textContent;

// set eigenvector 9 and 11 to not be regularized. This is to better detect motion of the eyebrows
pModel.shapeModel.nonRegularizedVectors.push(9);
pModel.shapeModel.nonRegularizedVectors.push(11);

//initiate face tracker and see if it can converge
var ctrack = new clm.tracker({stopOnConvergence : true});
ctrack.init(pModel);
ctrack.start(face);
/* if it can't you gotta tell the user
document.addEventListener("clmtrackrNotFound", function(event) {
  ctrack.stop();
  alert("The tracking had problems with finding a face in this image. Try again?");
}, false); */

//now make an emotion classifier and return its data
var ec = new emotionClassifier();
ec.init(emotionModel);

var emotionData = ec.getBlank();
var cp = ctrack.getCurrentParameters();
er = ec.meanPredict(cp);

recom = "Your emotion status: " + er;
console.log("emotion: " + er);
console.log("current parameters: " + cp);
}
