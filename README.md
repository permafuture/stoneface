# PLAN FOR STONEFACE APP

## STONEFACE is a web app that recommends weed strains based on facial emotions.

STONEFACE should be progressively enhanced, so anyone could use it to get what they need but users with better technologies can use all the means at their disposal.

STONEFACE doesn't have to guarantee the right weed, it just has to give a recommendation based on some reasoning and *explain the reason*. That way it demonstrates the power, and limits, of algorithmic prediction.

### STONEFACE user stories:

* I can upload a face image and learn what emotion it portrays
* I can get a weed strain recommendation that will balance out my mood
* I can find the closest place to get that weed strain (legally)

### STONEFACE technical steps:

**Get face image**
* access an image
* * by URL
* * file upload
* * drag and drop
* * from clipboard
* access the camera
* * getUserMedia
* * drawImage to canvas

**Analyse emotions on image**
* use clmtracker modules to get emotionblend
* categorize emotion (by top two expressions in blend?)
* decide what effects needed to balance mood (based on arbitrary assignment in a JSON of my devising)

**Assess weed strains**
* access weed API and look for necessary traits
* get full desc and image of weed

**Display conclusions**
* put image of weed and description in a div
* put explanation of *why* the algorithm chose that in another div
* reminder that if you don't like the weed you got, you can try another face


*Dev diary 2018-05-03, 22:55PM. Going to bed. Got face image capture to work, implemented first stab at emotion classifier, get no data from emotion classifier. Might want to fork image-recognizer from the clmtrackr examples and teach it to record video and do emotions rather than coming from this angle. Learned a fuckton already though, and this isn't the fun part either. I might just plug in some CV API just to make this thing work and skip the clmtracker part which is maybe beyond me. Grading and tamping tomorrow, should have time for this on weekend*
