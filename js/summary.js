// Graph 1
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Atom Bomb', 'Hydrogen Bomb', 'Smoke Bomb', 'Barrell Bomb', 'Suitcase Bomb', 'Cluster Bomb'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Graph 2
const myChart2 = new Chart(
    document.getElementById('myChart2'), {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Bug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Timeline',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 28, 69, 50, 87, 42, 18],
        }],
        },
        options: {
            onClick: (e) => {
                const canvasPosition = Chart.helpers.getRelativePosition(e, myChart2);

                // Substitute the appropriate scale IDs
                const dataX = myChart2.scales.x.getValueForPixel(canvasPosition.x);
                const dataY = myChart2.scales.y.getValueForPixel(canvasPosition.y);

                // if the "Bug" value is clicked on
                if (dataX == 7) {
                    // PLAY PUZZLE 1
                    puzzle1();
                }
            }
        }
    }
);

// Graph 3
const myChart3 = new Chart(
    document.getElementById('myChart3'), {
        type: 'doughnut',
        data: {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'Budget',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]},
    }
);