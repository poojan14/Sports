export const filterData = [
  {
    items: [
      { name: 'Lionel Messi', value: 'Lionel Messi' },
      { name: 'Cristiano Ronaldo', value: 'Cristiano Ronaldo' },
    ],
    placeholder: 'PFName',
    queryName: 'PFName',
  },
  {
    items: [
      { name: 'Juventus', value: 'Juventus' },
      { name: 'Barcelona', value: 'Barcelona' },
      { name: 'Paris', value: 'Paris' },
      { name: 'Liverpool', value: 'Liverpool' },
    ],
    placeholder: 'TName',
    queryName: 'TName',
  },

    
];

export const getFilterValues = (filterValues) => {
  const {
    PFName,TName
  } = filterValues;

  const values = [
    {
      name: 'PFName',
      value: PFName,
    },
    {
      name: 'TName',
      value: TName,
    },
      ];

  return values;
};
