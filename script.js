$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Empêche le comportement de soumission du formulaire par défaut

        // Récupère les valeurs du poids et de la taille
        var weight = parseFloat($('#weight').val());
        var height = parseFloat($('#height').val());

        // Vérifie si les valeurs saisies sont valides
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Veuillez saisir des valeurs numériques positives pour le poids et la taille.');
            return; // Arrête l'exécution du script en cas de données invalides
        }

        // Effectue le calcul de l'IMC
        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2); // Arrondit l'IMC à 2 décimales

        // Effectue la suite du traitement (affichage du résultat, etc.)
        var resultElement = $('#result');
        resultElement.text('Your BMI is: ' + bmi);
        resultElement.removeClass(); // Supprime toutes les classes précédentes

        if (bmi < 18.5) {
            resultElement.addClass('underweight');
            resultElement.append('<p class="message">You are underweight. It is important to maintain a healthy weight. Consider consulting a healthcare professional or nutritionist for guidance.</p>');
        } else if (bmi >= 18.5 && bmi < 25) {
            resultElement.addClass('normal');
            resultElement.append('<p class="message">Congratulations! You have a normal BMI. Keep up the good work by maintaining a healthy lifestyle.</p>');
        } else if (bmi >= 25 && bmi < 30) {
            resultElement.addClass('overweight');
            resultElement.append('<p class="message">You are overweight. It is advisable to focus on healthy eating habits and engage in regular physical activity to improve your BMI.</p>');
        } else {
            resultElement.addClass('obese');
            resultElement.append('<p class="message">You are obese. It is important to take immediate action for your health. Consider consulting a healthcare professional or nutritionist for personalized advice and support.</p>');
        }

        // Affiche le paragraphe sur l'importance de l'IMC
        $('#bmi-info').text('BMI is an important indicator of your overall health and can help assess the risk of certain health conditions. However, please note that BMI is a general measure and may not take into account individual variations in body composition and muscle mass.');
    });
});
