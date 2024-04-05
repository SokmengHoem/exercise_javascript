(function(weight, height) {
    const bmi = (weight / (height * height)).toFixed(2);
    console.log(bmi);
})(50, 1.60);
