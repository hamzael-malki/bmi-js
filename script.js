/*
 * Code développé par Hamza EL MALKI
 */

$(document).ready(function() {
    var weightInput = $('#weight');
    var heightInput = $('#height');
    var submitButton = $('input[type="submit"]');
    var mentionElement = $('#mention'); // Récupère l'élément où afficher la mention

    function checkLimits(weight, height) {
        if (weight < 10 || weight > 200) {
            alert('Le poids doit être compris entre 10 et 200.');
            return false;
        }

        if (height < 0.5 || height > 3) {
            alert('La taille doit être comprise entre 0.5 et 3.');
            return false;
        }

        return true;
    }

    function checkEmptyFields() {
        if (weightInput.val() === '' || heightInput.val() === '') {
            submitButton.prop('disabled', true);
        } else {
            submitButton.prop('disabled', false);
        }
    }

    checkEmptyFields();

    weightInput.on('input', function() {
        checkEmptyFields();
    });

    heightInput.on('input', function() {
        checkEmptyFields();
    });

    $('form').submit(function(event) {
        event.preventDefault();

        var weight = parseFloat(weightInput.val());
        var height = parseFloat(heightInput.val());

        if (weightInput.val() === '' || heightInput.val() === '') {
            alert('Veuillez saisir le poids et la taille.');
            return;
        }

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Veuillez saisir des valeurs numériques positives pour le poids et la taille.');
            return;
        }

        if (!checkLimits(weight, height)) {
            return;
        }

        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2);

        var resultElement = $('#result');
        resultElement.text('Your BMI is: ' + bmi);
        resultElement.removeClass();

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

        $('#bmi-info').text('BMI is an important indicator of your overall health and can help assess the risk of certain health conditions. However, please note that BMI is a general measure and may not take into account individual variations in body composition and muscle mass.');

        mentionElement.text('By Hamza EL MALKI :)'); // Ajoute la mention dans l'élément prévu à cet effet
    });
});
