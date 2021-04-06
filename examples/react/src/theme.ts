export const whiteTheme: Theme = {
    fg: 'white',
    bg: '#282c34',
    link: '#61dafb',
    fontSize: '2vmin',
};

export const darkTheme: Theme = {
    fg: 'black',
    bg: '#bfd2f6',
    link: '#0086ab',
    fontSize: '2vmin',
};

export type Theme = {

    fg: string,
    bg: string,
    link: string,
    fontSize: string,
};

export const breakpoints: Breakpoints = {

    '@phone': '500px',
}

export type Breakpoints = {

    '@phone': string;
}
