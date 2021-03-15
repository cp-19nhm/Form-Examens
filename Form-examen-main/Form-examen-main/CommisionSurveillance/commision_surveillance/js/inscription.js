$(function () {
    $(document).ready(function () {
    });
    var intForm = 0;

    var intForm = 0;

    var divdate;
    var intdate = 0;

    var divAct;
    var intAct = 0;

    var divlieu;
    var intlieu = 0;

    var divdebut
    var intdebut = 0;

    var divfin;
    var intfin = 0;

    var divkm;
    var intkm = 0;

    var divtrpublic;
    var inttrpublic = 0;

    var divheb;
    var intheb = 0;

    var divtel;
    var inttel = 0;


    /// Add line with datas in cells
    $('#btn-new').click(function () {
        //------------------------------------------------------------------------
        // Data cell Date
        //------------------------------------------------------------------------
        divdate = $('<input>', {
            class: "form-control value-center",
            value: $("#Date").val(),
            id: intdate++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell Activity
        //------------------------------------------------------------------------
        divAct = $('<input>', {
            class: "form-control value-center",
            value: $("#Activity").val(),
            id: intAct++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell location
        //------------------------------------------------------------------------
        divlieu = $('<input>', {
            class: "form-control value-center",
            value: $("#Lieu").val(),
            id: intlieu++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell start time
        //------------------------------------------------------------------------
        divdebut = $('<input>', {
            class: "form-control value-center",
            value: $("#debutime").val(),
            id: intdebut++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell end time
        //------------------------------------------------------------------------
        divfin = $('<input>', {
            class: "form-control value-center",
            value: $("#fintime").val(),
            id: intfin++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell distance
        //------------------------------------------------------------------------
        divkm = $('<input>', {
            class: "form-control value-center",
            value: $("#km").val(),
            id: intkm++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell transport
        //------------------------------------------------------------------------
        divtrpublic = $('<input>', {
            class: "form-control value-center",
            value: $("#transport").val(),
            id: inttrpublic++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell accomodation
        //------------------------------------------------------------------------
        divheb = $('<input>', {
            class: "form-control value-center",
            value: $("#accommodation").val(),
            id: intheb++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Data cell Tel
        //------------------------------------------------------------------------
        divtel = $('<input>', {
            class: "form-control value-center",
            value: $("#tel").val(),
            id: inttel++,
            readOnly: true,
        }).wrap("<td></td>").parent();

        //------------------------------------------------------------------------
        // Row dynamic addition
        //------------------------------------------------------------------------
        var allData = [divdate, divAct, divlieu, divdebut, divfin, divkm, divtrpublic, divheb];
        function wrapAllData() {
            var formGroup = $('<tr>', {id: intForm});

            $.each(allData, function (index, value) {
                allData[index].appendTo(formGroup);
            });
            $(formGroup).appendTo('#new');
            intForm++;
        }
        wrapAllData();
    });
});