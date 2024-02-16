(function($) {
    // Definiere deine Klasse
    var PxlClass = function(element, options) {
        this.element = element;
        this.options = options;
    };

    // Erweitere deine Klasse um Methoden
    PxlClass.prototype = {
        create_matrix: function() {
            // Implementiere die Logik für die Methode "create_matrix"
            //alert("Create Matrix called");

            // innerhalb des pxl's
            let x = 3;
            let y = 3;
            
            
            let zx = 3;
            let zy = 3;
            //console.log('1');
            // gesamte Matrix:
            //      k=x
            //      i=y
            // innerhalb Pixel:
            //      
            // Einzelne Quadrate zum Box-Element hinzufügen
            for (let i = 1; i < y+1; i++) {
                for (let j = 1; j < x+1; j++) {
                    for (let k = 1; k < zx+1; k++) {
                        for (let l = 1; l < zy+1; l++) {
                            //alert(i);
                            $(this.element).append("<div class='square pixel_"+k+"_"+i+" part_"+l+"_"+j+" k_"+k+"_"+i+"'>"+i+":"+j+":"+k+":"+l+"</div>");
                        }
                    }
                }
            }
            
            
            $("#create_matrix").prop("disabled", true);
            
            return this; // Rückgabe des Objekts für Methodenverkettung
        },

        
        /*
        **
        */
        create_pixel: function() {
            // Implementiere die Logik für die Methode "create_pixel"
            alert("Create Pixel called");

            /*            
            let x = 3;
            let y = 3;
            let zx = 3;
            let zy = 3;
            //console.log('1');
            // Einzelne Quadrate zum Box-Element hinzufügen
            for (let i = 1; i < y+1; i++) {
                for (let j = 1; j < x+1; j++) {
                    for (let k = 1; k < zx+1; k++) {
                        for (let l = 1; l < zy+1; l++) {
                            //alert(i);
                            $(this.element).append("<div class='square k_"+k+"_"+i+"'>"+i+":"+j+":"+k+":"+l+"</div>");
                        }
                    }
                }
            }
            
            */



            return this; // Rückgabe des Objekts für Methodenverkettung
        },


        /*
        **
        */
        fill: function(data) {
            // Implementiere die Logik für die Methode "fill"
            //alert('Fill Method called with data: ' + data);

            $(".k_"+getRandomInt(1, 3)+"_"+getRandomInt(1, 3)).css("background-color", getRandomHexColor());
            

            return this; // Rückgabe des Objekts für Methodenverkettung
        },

        /*
        **
        */
        clear_matrix: function(data) {
            
            $("#box").empty();
            $("#create_matrix").prop("disabled", false);

            return this;
        }
    };

    // jQuery Plugin-Logik: Erweitere jQuery mit deiner Klasse
    $.fn.pxl = function(options) {
        return this.each(function() {
            var element = $(this);
            // Prüfe, ob die Klasse bereits initialisiert wurde
            var pxlInstance = element.data('pxl');
            if (!pxlInstance) {
                // Initialisiere die Klasse und speichere sie im Datenattribut des Elements
                pxlInstance = new PxlClass(element, options);
                element.data('pxl', pxlInstance);
            }

            // Überprüfe, ob das Element mit der ID "control" existiert
            var controlWrapper = $('#control');
            if (controlWrapper.length > 0) {
                // Erstelle die Buttons "fill" und "create_matrix"
                var createButton = $('<button id="create_matrix">Create Matrix</button><br>').appendTo(controlWrapper);
                var fillButton = $('<button id="fill">Fill random Pxl</button><br>').appendTo(controlWrapper);
                var clearButton = $('<button id=clear">Clear</button><br>').appendTo(controlWrapper);
                
                // Weise den Buttons die entsprechenden Methoden zu
                fillButton.on('click', function() {
                    pxlInstance.fill('Some data');
                });

                createButton.on('click', function() {
                    pxlInstance.create_matrix();
                });

                clearButton.on('click', function() {
                    pxlInstance.clear_matrix();
                });
            }
        });
    };
})(jQuery);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funktion, um eine zufällige Hex-Farbe zu generieren
function getRandomHexColor() {
    // Zufällige Werte für Rot, Grün und Blau generieren
    var red = Math.floor(Math.random() * 256); // Wert zwischen 0 und 255
    var green = Math.floor(Math.random() * 256); // Wert zwischen 0 und 255
    var blue = Math.floor(Math.random() * 256); // Wert zwischen 0 und 255

    // Hexadezimalwert erstellen
    var hexColor = '#' + 
        ('0' + red.toString(16)).slice(-2) + // Rot
        ('0' + green.toString(16)).slice(-2) + // Grün
        ('0' + blue.toString(16)).slice(-2); // Blau

    return hexColor;
}


$("#box").pxl();