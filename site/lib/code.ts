type CodeSnippet = {
    title: string;
    code: string;
    language: string;
};

const CODE_SNIPPETS: CodeSnippet[] = [
    {
        title: 'Code this',
        code: `const { css } = Nifty.create({
    text: '#010101',
    accent: 'blue',
    fontSmall: '0.8rem',
});
    
const style = css(t => ({
    ...flexCenter,
    ...paddingX\`1rem\`,
    color: t.text,
    ':hover': {
        color: t.accent,
    },
    $sm: {
        fontSize: t.fontSmall,
    },
});`,
        language: 'javascript',
    },
    {
        title: 'Get all of that',
        code: `.nifty-29byuu {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #010101;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
.nifty-29byuu:hover {
  color: blue;
}
@media (min-width: 640px) {
  .nifty-29byuu {
    font-size: 0.8rem;
  }
}`,
        language: 'css',
    },
];

export default CODE_SNIPPETS;
