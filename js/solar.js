// =====================================================
// AERONIVA - SOLAR ENERGY CALCULATOR
// =====================================================


// =====================================================
// GET CALCULATOR ELEMENTS
// =====================================================

const monthlyUsage = document.getElementById("monthlyUsage");
const solarCoverage = document.getElementById("solarCoverage");

const usageValue = document.getElementById("usageValue");
const coverageValue = document.getElementById("coverageValue");

const solarEnergyResult =
    document.getElementById("solarEnergyResult");

const solarSavingsResult =
    document.getElementById("solarSavingsResult");


// =====================================================
// SOLAR CALCULATOR
// =====================================================

if (
    monthlyUsage &&
    solarCoverage &&
    usageValue &&
    coverageValue &&
    solarEnergyResult &&
    solarSavingsResult
) {

    function calculateSolarSavings() {

        // Get values from sliders
        const usage = Number(monthlyUsage.value);
        const coverage = Number(solarCoverage.value);


        // Show slider values
        usageValue.textContent = usage;
        coverageValue.textContent = coverage;


        // Calculate estimated solar energy
        const solarEnergy = Math.round(
            usage * (coverage / 100)
        );


        // Educational illustrative electricity rate
        const electricityRate = 8;


        // Calculate illustrative savings
        const savings = Math.round(
            solarEnergy * electricityRate
        );


        // Display results
        solarEnergyResult.textContent =
            solarEnergy.toLocaleString("en-IN");

        solarSavingsResult.textContent =
            savings.toLocaleString("en-IN");
    }


    // Run calculation when monthly usage changes

    monthlyUsage.addEventListener(
        "input",
        calculateSolarSavings
    );


    // Run calculation when solar coverage changes

    solarCoverage.addEventListener(
        "input",
        calculateSolarSavings
    );


    // Run calculation once when page loads

    calculateSolarSavings();

}