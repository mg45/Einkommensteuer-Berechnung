let calcBtn = document.getElementById('calc-btn');

calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let jahr = document.querySelector('input[name=year]:checked').value;
    let calcMethod = document.querySelector('input[name=type-of-calc]:checked').value;
    let zve = document.getElementById('zve').value;

    if(jahr == "2020" && calcMethod == "single") {
        zuVerStEkEinz(jahr, zve);
    }
})

function zuVerStEkEinz(jahr, zuVersteuerndeEinkommenEinzel) {
    if(jahr == 2021) {
        einKommensSteuerTwentyTwentyOne(zuVersteuerndeEinkommenEinzel);
    } else if(jahr == 2020) {
        einKommensSteuerTwentyTwenty(zuVersteuerndeEinkommenEinzel);
        return a, b;
    }
}

function einKommensSteuerTwentyTwentyOne(zuVersteuerndeEinkommenEinzel) {
    let einKommensSteuer;
    switch (true) {
        case (zuVersteuerndeEinkommenEinzel <= 9744):
            einKommensSteuer = 0;
            console.log("Case 01 einkommenssteuer = " + einKommensSteuer);
            document.getElementById('result').innerText = einKommensSteuer;
            
            break;

        case (zuVersteuerndeEinkommenEinzel >= 9745 && zuVersteuerndeEinkommenEinzel <= 14753):
            let y = (zuVersteuerndeEinkommenEinzel - 9744) / 10000;
            einKommensSteuer = (995.21 * y + 1400) * y;
            console.log("Case 02 einkommenssteuer = " + einKommensSteuer);
            break;

        case (zuVersteuerndeEinkommenEinzel >= 14754 && zuVersteuerndeEinkommenEinzel <= 57918):
            let z = (zuVersteuerndeEinkommenEinzel - 14753) / 10000;
            einKommensSteuer = (208.85 * z + 2397) * z + 950.96;
            console.log("Case 03 einkommenssteuer = " + einKommensSteuer);
            break;

        case (zuVersteuerndeEinkommenEinzel >= 57919 && zuVersteuerndeEinkommenEinzel <= 274612):
            einKommensSteuer = 0.42 * zuVersteuerndeEinkommenEinzel - 9136.63;
            console.log("Case 04 einkommenssteuer = " + einKommensSteuer);
            break;

        case (zuVersteuerndeEinkommenEinzel >= 274613):
            einKommensSteuer = 0.45 * zuVersteuerndeEinkommenEinzel - 17374.99;
            console.log("Case 05 einkommenssteuer = " + einKommensSteuer);
            break;
    }
}

function einKommensSteuerTwentyTwenty(zuVersteuerndeEinkommenEinzel) {
    let einKommensSteuer;
    switch (true) {
        case (zuVersteuerndeEinkommenEinzel <= 9408):
            einKommensSteuer = 0;
            console.log("Case 01 einkommenssteuer = " + einKommensSteuer);
            document.getElementById('result').innerText = einKommensSteuer;
            a = 0;
            b = 100;
            break;

        case (zuVersteuerndeEinkommenEinzel >= 9409 && zuVersteuerndeEinkommenEinzel <= 14532):
            let y = (zuVersteuerndeEinkommenEinzel - 9408) / 10000;
            einKommensSteuer = (972.87 * y + 1400) * y;
            console.log("Case 02 einkommenssteuer = " + einKommensSteuer);
            a= einKommensSteuer;
            break;

        case (zuVersteuerndeEinkommenEinzel >= 14533 && zuVersteuerndeEinkommenEinzel <= 57051):
            let z = (zuVersteuerndeEinkommenEinzel - 14532) / 10000;
            einKommensSteuer = (212.02 * z + 2397) * z + 972.79;
            console.log("Case 03 einkommenssteuer = " + einKommensSteuer);
            break;

        case (zuVersteuerndeEinkommenEinzel >= 57052 && zuVersteuerndeEinkommenEinzel <= 270500):
            einKommensSteuer = 0.42 * zuVersteuerndeEinkommenEinzel - 8963.74;
            console.log("Case 04 einkommenssteuer = " + einKommensSteuer);
            break;

        case (zuVersteuerndeEinkommenEinzel >= 270501):
            einKommensSteuer = 0.45 * zuVersteuerndeEinkommenEinzel - 17078.74;
            console.log("Case 05 einkommenssteuer = " + einKommensSteuer);
            break;
    }
}

function zuVerStEkZusammen(jahr, zuVersteuerndeEinkommen01, zuVersteuerndeEinkommen02) {
    if(jahr == 2021) {
        zuVerStEkZusammenTwentyTwentyOne(zuVersteuerndeEinkommen01, zuVersteuerndeEinkommen02);
    } else if(jahr == 2020) {
        zuVerStEkZusammenTwentyTwenty(zuVersteuerndeEinkommen01, zuVersteuerndeEinkommen02);
    }
}

function zuVerStEkZusammenTwentyTwentyOne(zuVersteuerndeEinkommen01, zuVersteuerndeEinkommen02) {

    let zuVersteuerndeEinkommenZusammen = (zuVersteuerndeEinkommen01 + zuVersteuerndeEinkommen02) / 2;
    let einKommensSteuerZusammen;

    switch (true) {
        case (zuVersteuerndeEinkommenZusammen <= 9744):
            einKommensSteuerZusammen = 0;
            console.log("Case 01 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 9745 && zuVersteuerndeEinkommenZusammen <= 14753):
            let y = (zuVersteuerndeEinkommenZusammen - 9744) / 10000;
            einKommensSteuerZusammen = (995.21 * y + 1400) * y;
            console.log("Case 02 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 14754 && zuVersteuerndeEinkommenZusammen <= 57918):
            let z = (zuVersteuerndeEinkommenZusammen - 14753) / 10000;
            einKommensSteuerZusammen = (208.85 * z + 2397) * z + 950.96;
            console.log("Case 03 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 57919 && zuVersteuerndeEinkommenZusammen <= 274612):
            einKommensSteuerZusammen = 0.42 * zuVersteuerndeEinkommenZusammen - 9136.63;
            console.log("Case 04 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 274613):
            einKommensSteuerZusammen = 0.45 * zuVersteuerndeEinkommenZusammen - 17374.99;
            console.log("Case 05 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;
    }
}

function zuVerStEkZusammenTwentyTwenty(zuVersteuerndeEinkommen01, zuVersteuerndeEinkommen02) {

    let zuVersteuerndeEinkommenZusammen = (zuVersteuerndeEinkommen01 + zuVersteuerndeEinkommen02) / 2;
    let einKommensSteuerZusammen;

    switch (true) {
        case (zuVersteuerndeEinkommenZusammen <= 9408):
            einKommensSteuerZusammen = 0;
            console.log("Case 01 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 9409 && zuVersteuerndeEinkommenZusammen <= 14532):
            let y = (zuVersteuerndeEinkommenZusammen - 9408) / 10000;
            einKommensSteuerZusammen = (972.87 * y + 1400) * y;
            console.log("Case 02 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 14533 && zuVersteuerndeEinkommenZusammen <= 57051):
            let z = (zuVersteuerndeEinkommenZusammen - 14532) / 10000;
            einKommensSteuerZusammen = (212.02 * z + 2397) * z + 972.79;
            console.log("Case 03 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 57052 && zuVersteuerndeEinkommenZusammen <= 270500):
            einKommensSteuerZusammen = 0.42 * zuVersteuerndeEinkommenZusammen - 8963.74;
            console.log("Case 04 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;

        case (zuVersteuerndeEinkommenZusammen >= 270501):
            einKommensSteuerZusammen = 0.45 * zuVersteuerndeEinkommenZusammen - 17078.74;
            console.log("Case 05 einkommenssteuerzusammen = " + einKommensSteuerZusammen);
            break;
    }
}