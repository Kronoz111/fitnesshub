function calculateCalories() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const activityLevel = parseFloat(document.getElementById("activity").value);
  
    if (!isNaN(weight) && !isNaN(height) && !isNaN(age) && !isNaN(activityLevel)) {
      let bmr;
      if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
  
      const maintenanceCalories = bmr * activityLevel;
      const weightLossCalories = maintenanceCalories - 500;
      const weightGainCalories = maintenanceCalories + 500;
  
      document.getElementById("maintenanceCalories").textContent = maintenanceCalories.toFixed(0);
      document.getElementById("weightLossCalories").textContent = weightLossCalories.toFixed(0);
      document.getElementById("weightGainCalories").textContent = weightGainCalories.toFixed(0);
    } else {
      alert("Please enter valid weight, height, age, and activity level.");
    }
  }
  