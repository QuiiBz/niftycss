type Tab = {
    id: number;
    title: string;
    language: 'typescript' | 'css';
    content: string;
};

const TABS: Tab[] = [
    {
        id: 0,
        title: 'style.ts',
        language: 'typescript',
        content: `import { css } from './nifty.ts';

css({
  ...flexCenter,
  ...paddingX\`1rem\`,
  color: '@text!',
  ':hover': {
    color: '@accent',
  },
  $sm: {
    fontSize: '@fontSmall',
  },
});`,
    },
    {
        id: 1,
        title: 'nifty.ts',
        language: 'typescript',
        content: `import { createCss } from '@niftycss/core';

export const { css } = createCss({
  theme: {
    text: '#010101',
    accent: 'blue',
    fontSmall: '0.8rem',
  },
});`,
    },
    {
        id: 2,
        title: 'Generated CSS',
        language: 'css',
        content: `.nifty-1p2odkp {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #010101 !important;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.nifty-1p2odkp:hover {
  color: blue;
}
@media (min-width: 640px) {
  .nifty-1p2odkp {
    font-size: 0.8rem;
  }
}`,
    },
];

export default TABS;
