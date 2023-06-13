$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var weight = parseFloat($('#weight').val());
        var height = parseFloat($('#height').val());

        // Perform the BMI calculation on the client-side
        var bmi = weight / (height * height);
        bmi = bmi.toFixed(2); // Round the BMI to 2 decimal places

        // Update the result element with the calculated BMI and apply color based on the scale
        var resultElement = $('#result');
        resultElement.text('Your BMI is: ' + bmi);
        resultElement.removeClass(); // Remove any previous classes

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

        // Display the paragraph about the importance of BMI
        $('#bmi-info').text('BMI is an important indicator of your overall health and can help assess the risk of certain health conditions. However, please note that BMI is a general measure and may not take into account individual variations in body composition and muscle mass.');
    });
});
