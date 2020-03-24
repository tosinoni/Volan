export function getScreenNameOnCircleClick(index) {
  let routeName;
  switch (index) {
    case 0:
      routeName = "IntroOne";
      break;

    case 1:
      routeName = "IntroTwo";
      break;

    case 2:
      routeName = "IntroThree";
      break;
    default:
      break;
  }

  return routeName;
}
