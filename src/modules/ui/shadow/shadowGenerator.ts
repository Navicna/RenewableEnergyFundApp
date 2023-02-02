const SHADOW_OPACITY = 0.18;
const SHADOW_RADIUS = 1;
const SHADOW_OPACITY_MULTIPLIER_VALUE = 0.02;
const SHADOW_RADIUS_MULTIPLIER_VALUE = (elevation: number) =>
  elevation % 0 ? 0.41 : 0.81;
const HEIGHT = (elevation: number) => {
  switch (elevation) {
    case 4:
    case 5:
      return 2;
    case 6:
    case 7:
      return 6;
    case 8:
    case 9:
      return 4;
    case 10:
      return 5;
    default:
      return 1;
  }
};

export const shadowGenerator = (elevation = 1) => {
  return {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: HEIGHT(elevation),
    },
    shadowOpacity:
      elevation > 1
        ? SHADOW_OPACITY + SHADOW_OPACITY_MULTIPLIER_VALUE * elevation
        : SHADOW_OPACITY,
    shadowRadius:
      elevation > 1
        ? SHADOW_RADIUS + SHADOW_RADIUS_MULTIPLIER_VALUE(elevation) * elevation
        : SHADOW_RADIUS,
    elevation,
  };
};
