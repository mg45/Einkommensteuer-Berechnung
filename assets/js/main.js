/*
zuVerStEkEinz(2021, 100000);
zuVerStEkZusammen(2021, 200000, 800000);

on submit - 
wenn jahr 2020 und einzeln oder together 

*/





let calcBtn = document.getElementById('calc-btn');


calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let jahr = document.querySelector('input[name=year]:checked').value;
    let calcMethod = document.querySelector('input[name=type-of-calc]:checked').value;
    let zve = document.getElementById('zve').value;

    if(jahr == "2020" && calcMethod == "single") {
        zuVerStEkEinz(jahr, zve);
        buildChart(a, b);
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












function buildChart(x, y) {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
    
        var iconPath = "M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"
    
        var chart = am4core.create("chartdiv", am4charts.SlicedChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
        chart.paddingLeft = 150;
    
        chart.data = [{
            "name": "Darf WEEEDER",
            "value": x,
            "disabled": true
        }, {
            "name": "Your Moneyyyyyy",
            "value": y
        }];
    
        var series = chart.series.push(new am4charts.PictorialStackedSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "name";
        series.alignLabels = true;
        // this makes only A label to be visible
        series.labels.template.propertyFields.disabled = "disabled";
        series.ticks.template.propertyFields.disabled = "disabled";
    
    
        series.maskSprite.path = iconPath;
        series.ticks.template.locationX = 1;
        series.ticks.template.locationY = 0;
    
        series.labelsContainer.width = 100;
    
        chart.legend = new am4charts.Legend();
        chart.legend.position = "top";
        chart.legend.paddingRight = 160;
        chart.legend.paddingBottom = 40;
        let marker = chart.legend.markers.template.children.getIndex(0);
        chart.legend.markers.template.width = 40;
        chart.legend.markers.template.height = 40;
        marker.cornerRadius(20, 20, 20, 20);
    
    }); // end am4core.ready()
}



