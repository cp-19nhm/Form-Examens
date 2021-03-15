$(function () {

    $(".hidden_item").hide();

    var nom;
    var numero;


    $('#profession_liste').on("change",function () {
        nom = $(this).children("option:selected").val();
        numero = 0;

        if(nom === $("#other").val() ){
            $('#myModal').modal('show');
        }else{
            $('#prof_name').val(nom);
            $('#prof_num').val(numero);
            $('.hidden_item').show();
        }


    });
    $('#myModal').on('hidden.bs.modal', function (e) {

        nom = $("#prof_name_mod").val();
        numero = $("#prof_num_mod").val();

        if(nom !== "" && numero !== ""){
            $('#prof_name').val(nom);
            $('#prof_num').val(numero);
            $('.hidden_item').show();
        }
    });
});