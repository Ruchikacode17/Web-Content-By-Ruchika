document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ENERGY CALCULATOR
    ===================================================== */

    const calculateButton = document.getElementById("calculateEnergy");

    if (calculateButton) {

        calculateButton.addEventListener("click", function () {

            const applianceName = document.getElementById("applianceName").value.trim();
            const power = Number(document.getElementById("powerInput").value);
            const hours = Number(document.getElementById("hoursInput").value);
            const days = Number(document.getElementById("daysInput").value);

            const message = document.getElementById("energyFormMessage");

            /* Clear previous message */
            message.textContent = "";

            /* Validation */

            if (applianceName === "") {
                message.textContent = "Please enter an appliance name.";
                return;
            }

            if (power <= 0) {
                message.textContent = "Please enter a valid power value.";
                return;
            }

            if (hours < 0 || hours > 24) {
                message.textContent = "Hours per day must be between 0 and 24.";
                return;
            }

            if (days < 1 || days > 31) {
                message.textContent = "Days per month must be between 1 and 31.";
                return;
            }

            /* Energy calculation */

            const dailyEnergy = (power * hours) / 1000;
            const monthlyEnergy = dailyEnergy * days;

            /* Show result */

            document.getElementById("dailyResult").textContent =
                dailyEnergy.toFixed(2) + " kWh";

            document.getElementById("monthlyResult").textContent =
                monthlyEnergy.toFixed(2) + " kWh";

            document.getElementById("resultAppliance").textContent =
                applianceName;

        });

    }


    /* =====================================================
       ENERGY MIX
    ===================================================== */

    const solarMix = document.getElementById("solarMix");
    const windMix = document.getElementById("windMix");
    const otherMix = document.getElementById("otherMix");

    const solarMixValue = document.getElementById("solarMixValue");
    const windMixValue = document.getElementById("windMixValue");
    const otherMixValue = document.getElementById("otherMixValue");

    const mixTotal = document.getElementById("mixTotal");
    const mixMessage = document.getElementById("mixMessage");
    const renewableMix = document.getElementById("renewableMix");

    const solarLegend = document.getElementById("solarLegend");
    const windLegend = document.getElementById("windLegend");
    const otherLegend = document.getElementById("otherLegend");

    const mixRing = document.querySelector(".mix-ring");


    if (
        solarMix &&
        windMix &&
        otherMix &&
        mixRing
    ) {

        function updateEnergyMix() {

            let solar = Number(solarMix.value);
            let wind = Number(windMix.value);
            let other = Number(otherMix.value);

            let total = solar + wind + other;

            /* =================================================
               Keep total at 100%
            ================================================= */

            if (total > 100) {

                const changedSlider = this;

                const excess = total - 100;

                if (changedSlider === solarMix) {

                    solar = Math.max(0, solar - excess);
                    solarMix.value = solar;

                } else if (changedSlider === windMix) {

                    wind = Math.max(0, wind - excess);
                    windMix.value = wind;

                } else if (changedSlider === otherMix) {

                    other = Math.max(0, other - excess);
                    otherMix.value = other;

                }

                total = solar + wind + other;
            }


            /* =================================================
               Update displayed values
            ================================================= */

            solarMixValue.textContent = solar + "%";
            windMixValue.textContent = wind + "%";
            otherMixValue.textContent = other + "%";

            mixTotal.textContent = total + "%";


            /* =================================================
               Renewable percentage
               Solar + Wind
            ================================================= */

            const renewable = solar + wind;

            renewableMix.textContent = renewable + "%";


            /* =================================================
               Update message
            ================================================= */

            if (total === 100) {

                mixMessage.textContent =
                    "Your energy mix is balanced at 100%.";

            } else {

                mixMessage.textContent =
                    "Adjust the values until your total reaches 100%.";
            }


            /* =================================================
               Update legend
            ================================================= */

            solarLegend.textContent = solar + "%";
            windLegend.textContent = wind + "%";
            otherLegend.textContent = other + "%";


            /* =================================================
               Update circular energy ring
            ================================================= */

            const solarEnd = solar;
            const windEnd = solar + wind;

            mixRing.style.background = `
                conic-gradient(
                    #F4B942 0% ${solarEnd}%,
                    #3A9D5D ${solarEnd}% ${windEnd}%,
                    #1261A0 ${windEnd}% 100%
                )
            `;

        }


        /* =====================================================
           Slider events
        ===================================================== */

        solarMix.addEventListener("input", updateEnergyMix);
        windMix.addEventListener("input", updateEnergyMix);
        otherMix.addEventListener("input", updateEnergyMix);


        /* =====================================================
           Initial display
        ===================================================== */

        updateEnergyMix.call(solarMix);

    }

});