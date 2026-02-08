const ctx = document.getElementById('mockProgressChart')?.getContext('2d');
if(ctx){
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Confidence', 'Content', 'English', 'Structure'],
      datasets: [{
        label: 'Skill Level',
        data: [80, 70, 60, 75], // dummy/mock data
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: { 
      responsive:true, 
      plugins: { 
        legend: { display:false } 
      } 
    }

  });
}
