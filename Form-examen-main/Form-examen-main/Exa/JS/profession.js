$(function () {
    // Professsion

    let nomProfession;
    let numeroOFFT;

    // Modal
    $('#profession_liste').on("change",function () {
        nomProfession = $(this).children("option:selected").val();
        numeroOFFT = 0;

        if(nomProfession === $("#other").val() ){
            $('#myModal1').modal('show');
        }else{
            $('#prof_name').val(nomProfession);
            $('#prof_num').val(numeroOFFT);
            $('.hidden_item2').show();
        }


    });

    $('#myModal1').on('hidden.bs.modal', function () {

        nomProfession = $("#prof_name_mod").val();
        numeroOFFT = $("#prof_num_mod").val();

        if(nomProfession !== "" && numeroOFFT !== ""){
            $('#prof_name').val(nomProfession);
            $('#prof_num').val(numeroOFFT);
            $('.hidden_item2').show();
        }
    });
});