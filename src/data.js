import arcade from './img/icon-arcade.svg';
import advanced from './img/icon-advanced.svg';
import pro from './img/icon-pro.svg';

export const steps = [
  { id: '59dh', step: 1, name: 'Step 1', desc: 'Your info' },
  { id: '30pe', step: 2, name: 'Step 2', desc: 'Select plan' },
  { id: '41im', step: 3, name: 'Step 3', desc: 'Add-ons' },
  { id: '87ws', step: 4, name: 'Step 4', desc: 'Summary' },
];

export const tarifPlan = [
  { id: '72hw', imgSrc: arcade, name: 'Arcade', costMo: '$9/mo', costYr: '$90/yr', value: 'arcade' },
  { id: '93jq', imgSrc: advanced, name: 'Advanced', costMo: '$12/mo', costYr: '$120/yr', value: 'advanced' },
  { id: '64ie', imgSrc: pro, name: 'Pro', costMo: '$15/mo', costYr: '$150/yr', value: 'pro' },
];

export const pickOds = [
  { id: '63ha', title: 'Online service', desc: 'Access to multiplayer games', costMo: '+$1/mo', costYr: '$10/yr' },
  { id: '82kq', title: 'Larger storage', desc: 'Extra 1TB of cloud save', costMo: '+$2/mo', costYr: '$20/yr' },
  { id: '71ew', title: 'Customizable Profile', desc: 'Custom theme on your profile', costMo: '+$2/mo', costYr: '$20/yr' },
];



