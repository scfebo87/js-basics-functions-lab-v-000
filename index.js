function distanceFromHqInBlocks(begin) {
  return Math.abs(begin - 42);
}

function distanceFromHqInFeet(begin) {
  return Math.abs((begin - 42)*264);
}

function distanceTravelledInFeet(begin, end) {
  return Math.abs((begin - end)*264);
}

function calculatesFarePrice(begin, end) {
  let feet = distanceTravelledInFeet(begin, end);
  if feet <= 400 {
    return 0;
  }
  else if feet > 400 && feet <= 2000 {
    
  }
  }
}