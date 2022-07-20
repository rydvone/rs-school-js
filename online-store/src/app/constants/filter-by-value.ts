export const filterByValue = {
  brand: ['Movenpick', 'Dallmayr', 'Illy', 'Lavazza'],
  product: ['Beans', 'Pods', 'Ground'],
  country: ['CH', 'DE', 'IT'],
  type: ['Espresso'],
  reset: ['Filters reset', 'Common reset'],
};

export const convertFilterValue = {
  brand: {
    Movenpick: 'Movenpick',
    Dallmayr: 'Dallmayr',
    Illy: 'Illy',
    Lavazza: 'Lavazza',
  },
  product: {
    Beans: 'Coffee beans',
    Pods: 'Coffee pods',
    Ground: 'Ground coffee',
  },
  country: {
    CH: 'Switzerland',
    DE: 'Germany',
    IT: 'Italy',
  },
  type: {
    Espresso: 'Espresso',
  },
  reset: {
    resetFilters: 'Filters reset',
    resetCommon: 'Common reset',
  },
};
