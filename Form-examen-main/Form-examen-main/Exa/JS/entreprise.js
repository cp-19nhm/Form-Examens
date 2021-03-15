$(function (){
    // Entreprise

    let nomEntreprise;
    let nom2Entreprise;
    let rueEntreprise;
    let numRueEntreprise;
    let NPAEntreprise;
    let lieuEnteprise;

    $('#selectEnterprise').on("change", function (){
        nomEntreprise = $(this).children("option:selected").val();

        if(nomEntreprise === "Ceff industrie" ){
            $('#existEntre').val("Ceff industrie");
            $('#existEntre2').val("Centre de formation Berne francoophone");
            $('#existRue').val("Rue Baptiste Savoye");
            $('#existNum').val(33);
            $('#existNpa').val(2610);
            $('#existLieu').val("St-Imier");
            $(".existing").show();
        }else if(nomEntreprise === "Ceff santé"){
            $('#existEntre').val("Ceff Santé-Sociale");
            $('#existEntre2').val("Centre de formation Berne francoophone");
            $('#existRue').val("Rue de la Clef");
            $('#existNum').val(44);
            $('#existNpa').val(2610);
            $('#existLieu').val("St-Imier");
            $(".existing").show();
        }
    });

    //Radio btn
    $(document).on("click", "input[name='radioBtn']", function(){
        thisRadio = $(this);
        if (thisRadio.hasClass("imChecked")) {
            thisRadio.removeClass("imChecked");
            thisRadio.prop('checked', false);
            $(".hidden_item1").hide();
            resetVal();
            document.getElementById("selectEnterprise").disabled = false;
        } else {
            thisRadio.prop('checked', true);
            thisRadio.addClass("imChecked");
            $(".hidden_item1").show();
            document.getElementById("selectEnterprise").disabled = true;
            resetVal();
        };
    })

    function resetVal(){
        $('#existEntre').val();
        $('#existEntre2').val();
        $('#existRue').val();
        $('#existNum').val();
        $('#existNpa').val();
        $('#existLieu').val();
        $(".existing").hide();
    }
});
