"use strict";
function make_shirt(size = 'Large', text = ' I love typescript. ') {
    console.log(`creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Mediume');
make_shirt('small', 'I love pythone');
