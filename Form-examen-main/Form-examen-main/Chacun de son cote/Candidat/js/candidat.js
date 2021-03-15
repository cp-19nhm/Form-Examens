$(function(){


    $(':checkbox').on('change',function(){
        var th = $(this), name = th.prop('name');
        if(th.is(':checked')){
            $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);
        }
    });


    $("#inscription_form").validate(
      {
         rules:{
             adress_per:{
                 required: true,
             },
             nocandidat_per:{
                  required: true,
             },
             nom_per:{
                 required: true,
                 minlength: 2
             },
             prenom_per:{
                 required: true,
                 minlength: 2
             },
             rue_per:{
                required: true,
                minlength: 4,
                maxlength: 45
             },
             norue_per:{
                required: true
             },
             npa_per:{
                 required: true
             },
             lieu_per:{
                 required: true
             }
         },
          messages:{
             adress_per:{
                 required: "Veuillez saisir l'adresse -Nr. du candidat"
             },
             nocandidat_per: {
                required: "Veuillez indiquer le numéro du candidat"
             },
             nom_per:{
                 required: "Veuillez saisir votre nom",
                 minlength: "Votre nom doit être composé de 2 caractères au minimum"
             },
             prenom_per:{
                required: "Veuillez saisir votre prénom",
                minlength: "Votre prénom doit être composé de 2 caractères au minimum"
             },
             rue_per:{
                 required: "Veuillez saisir le nom de votre rue",
                 minlength: "Le nom de rue doit comporter au minimum 4 caractères",
                 maxlength: "Le nom de rue doit comporter au maximum 45 caractères"
             },
             norue_per:{
                 required: "Le numéro du bâtiment est obligatoire"
             },
             npa_per:{
                 required: "Veuillez indiquer le NPA du village / ville"
             },
             lieu_per: {
                 required: "Veuillez indique le nom du village / ville"
             }
          }
      });
});