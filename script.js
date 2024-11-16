function volume_sphere() {
    //Write your code here
  const radiusInput = document.getElementById("radius").value;
  const volumeOutput = document.getElementById("volume");

	let radius = parseFloat(radiusInput);
	
	if(isNaN(radius) || radius < 0){
		volumeOutput.value = "NaN";
		return false;
	}
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volumeOutput.value = volume.toFixed(4);
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
