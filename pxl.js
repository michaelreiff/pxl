/*
**  Definiere pxl als jQuery Plugin
*/
(function($) {
    // Definiere deine Klasse
    var pxl = function(element, options) {
        this.element = element;
        this.options = options;
    };

    // Erweitere deine Klasse um Methoden
    pxl.prototype = {
        
        /*
        *   Erstellt die Matrix
        */
        create_matrix: function() {
            
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
                            $(this.element).append("<div class='square k_"+k+"_"+i+"'>"+i+":"+j+":"+k+":"+l+"</div>");
                        }
                    }
                }
            }
            
            return this; // Rückgabe des Objekts für Methodenverkettung
        },

        
        /*
        **
        */
        create_pixel: function() {
            
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
            
            return this; // Rückgabe des Objekts für Methodenverkettung
        },


        fill: function(data) {
            // Implementiere die Logik für die Methode "fill"
            alert('fill-Methode aufgerufen mit Daten:');
            //console.log('fill-Methode aufgerufen mit Daten:', data);
            return this; // Rückgabe des Objekts für Methodenverkettung
        }
    };

    // jQuery Plugin-Logik: Erweitere jQuery mit deiner Klasse
    $.fn.pxl = function(options) {
        return this.each(function() {
            var element = $(this);
            // Prüfe, ob die Klasse bereits initialisiert wurde
            var pxl = element.data('pxl');
            if (!pxl) {
                // Initialisiere die Klasse und speichere sie im Datenattribut des Elements
                instance = new pxl(element, options);
                pxl.data('pxl', instance);
            }
            
            // Überprüfe, ob das Element mit der ID "control" existiert
            var controlElement = $('#control');
            if (controlElement.length > 0) {
                // Erstelle die Buttons "fill" und "create_matrix"
                var fillButton = $('<button>Fill</button>').appendTo(controlElement);
                var createButton = $('<button>Create</button>').appendTo(controlElement);

                // Weise den Buttons die entsprechenden Methoden zu
                fillButton.on('click', function() {
                    pxl.fill();
                });

                createButton.on('click', function() {
                    pxl.create_matrix();
                    console.log(pxl);
                });
            }
        });
    };
})(jQuery);
