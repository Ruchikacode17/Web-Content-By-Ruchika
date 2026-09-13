// =====================================================
// AERONIVA - WIND POWER INTERACTIONS
// =====================================================


// -----------------------------------------------------
// 1. WIND SPEED INTERACTIVE MODEL
// -----------------------------------------------------

const windSpeed = document.getElementById("windSpeed");
const windSpeedValue = document.getElementById("windSpeedValue");
const windOutput = document.getElementById("windOutput");
const windStatus = document.getElementById("windStatus");


if (
    windSpeed &&
    windSpeedValue &&
    windOutput &&
    windStatus
) {

    function updateWindModel() {

        const speed = Number(windSpeed.value);

        // Simple educational model
        // Output increases with wind speed
        const output = Math.round(speed * speed);

        windSpeedValue.textContent = speed;

        windOutput.textContent =
            output.toLocaleString("en-IN");


        // Wind condition status
        if (speed < 10) {

            windStatus.textContent =
                "Light wind";

        } else if (speed < 18) {

            windStatus.textContent =
                "Moderate wind";

        } else if (speed < 25) {

            windStatus.textContent =
                "Strong wind";

        } else {

            windStatus.textContent =
                "High wind";
        }
    }


    // Update whenever slider moves
    windSpeed.addEventListener(
        "input",
        updateWindModel
    );


    // Run once when page loads
    updateWindModel();
}


// -----------------------------------------------------
// 2. WIND ENERGY CHART
// -----------------------------------------------------

const windChartCanvas =
    document.getElementById("windChart");


if (
    windChartCanvas &&
    typeof Chart !== "undefined"
) {

    new Chart(
        windChartCanvas,
        {
            type: "line",

            data: {

                labels: [
                    "5",
                    "10",
                    "15",
                    "20",
                    "25",
                    "30"
                ],

                datasets: [
                    {
                        label:
                            "Illustrative Energy Potential",

                        data: [
                            25,
                            100,
                            225,
                            400,
                            625,
                            900
                        ],

                        borderColor:
                            "#1261A0",

                        backgroundColor:
                            "rgba(18, 97, 160, 0.12)",

                        fill: true,

                        tension: 0.35,

                        pointBackgroundColor:
                            "#F4B942",

                        pointBorderColor:
                            "#FFFFFF",

                        pointBorderWidth: 2,

                        pointRadius: 5
                    }
                ]
            },


            options: {

                responsive: true,

                maintainAspectRatio: false,


                plugins: {

                    legend: {
                        labels: {
                            font: {
                                family: "Poppins"
                            }
                        }
                    }
                },


                scales: {

                    x: {

                        title: {
                            display: true,

                            text:
                                "Wind Speed (km/h)"
                        },

                        grid: {
                            color:
                                "rgba(7, 26, 43, 0.06)"
                        }
                    },


                    y: {

                        beginAtZero: true,

                        title: {
                            display: true,

                            text:
                                "Illustrative Output"
                        },

                        grid: {
                            color:
                                "rgba(7, 26, 43, 0.06)"
                        }
                    }
                }
            }
        }
    );
}