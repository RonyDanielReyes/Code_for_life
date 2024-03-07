// trash to treasure

function smartGarbage(trash, bins) {
  if (trash === 'recycling') {
    bins.recycling++
  } else if (trash === 'waste') {
    bins.waste++
  } else if (trash === 'compost') {
    bins.compost++
  }
  return bins;
}

console.log(smartGarbage("compost", { waste: 1, recycling: 1, compost: 1 }));
