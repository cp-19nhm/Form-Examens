$(function (){
    //Rule
    // Candidat et entreprise
    $("#inscription_form").validate(
        {
            rules:{
                adress_per:{
                    required: true,
                },
                candidatNum:{
                    required: true,
                },
                nom_per:{
                    required: true,
                    minlength: 2,
                },
                prenom_per:{
                    required: true,
                    minlength: 2,
                },
                rue_per:{
                    required: true,
                    minlength: 3,
                    maxlength: 45,
                },
                norue_per:{
                    required: true,
                },
                npa_per:{
                    required: true,
                },
                lieu_per:{
                    required: true,
                },

                nomEntreprise1:{
                    minlength:2,
                    required:true,
                },
                nomEntreprise2:{
                    minlength:2,
                    required:true,
                },
                rue:{
                    minlength:8,
                    required:true,
                },
                num:{
                    number:true,
                    required:true,
                },
                LieuEntreprise:{
                    required:true,
                    minlength:3,
                },
                "checkbox[]":{
                    required:true,
                },
                selct_prof:{
                    required: true
                },
                check_exam:{
                    required: true
                }
            },
            messages:{
                adress_per:{
                    // required: "Veuillez saisir l'adresse -Nr. du candidat"
                    required: "Champ requis",
                },
                nocandidat_per: {
                    // required: "Veuillez indiquer le num??ro du candidat"
                    required: "Champ requis",
                },
                nom_per:{
                    // required: "Veuillez saisir votre nom",
                    required: "Champ requis",
                    minlength: "Votre nom doit ??tre compos?? de 2 caract??res au minimum",
                },
                prenom_per:{
                    // required: "Veuillez saisir votre pr??nom",
                    required: "Champ requis",
                    minlength: "Votre pr??nom doit ??tre compos?? de 2 caract??res au minimum",
                },
                rue_per:{
                    // required: "Veuillez saisir le nom de votre rue",
                    required: "Champ requis",
                    minlength: "Le nom de rue doit comporter au minimum 3 caract??res",
                    maxlength: "Le nom de rue doit comporter au maximum 45 caract??res",
                },
                norue_per:{
                    required: "Le num??ro du b??timent est obligatoire",
                },
                npa_per:{
                    required: "Veuillez indiquer le NPA du village / ville",
                },
                lieu_per: {
                    required: "Veuillez indique le nom du village / ville",
                },

                nomEntreprise1:{
                    required:"Champ requis",
                    minlength: "Le champ doit ??tre compos?? de 2 caract??res au minimum",
                },
                nomEntreprise2:{
                    required:"Champ requis",
                    minlength:"Le champ doit ??tre compos?? de 2 caract??res au minimum",
                },
                rue:{
                    required:"Champ requis",
                    minlength:"Le champ doit ??tre compos?? de 8 caract??res au minimum",
                },
                num:{
                    required:"Champ requis",
                    number:"Nombre seulement",
                },
                LieuEntreprise:{
                    required:"Champ requis",
                    minlength:"Le champ doit ??tre compos?? de 3 caract??res au minimum",
                },
                "checkbox[]":{
                    required:"Champ requis",
                },
                selct_prof:{
                    required: "Veuillez s??l??ctinner une profession"
                },
                check_exam:{
                    required: "Une des deux cases doit ??tre coch??"
                }
            }
        });
});