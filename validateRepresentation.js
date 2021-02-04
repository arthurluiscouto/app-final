// validateRepresentation.js 

function isConcelhoRepresentationValid(concelho) {

    if (Object.keys(concelho).length == 2 &&
        concelho.hasOwnProperty("concelho") &&
        concelho.hasOwnProperty("casos")
    ) {
        return !isNaN(concelho.casos)
    }
    else
        return false;

}

module.exports = isConcelhoRepresentationValid