/**
 * Generate the `calc` method with the given content.
 *
 * @param values - Hard-written values
 * @param props - Variables values
 *
 * @example
 * ...calc`100vw - 50px`
 *
 * ...calc`100vh - ${t.navHeight}`
 */
export const calc = (values: TemplateStringsArray, ...props: string[]): string => {

    let str = '';

    values.forEach((string, i) => {

        str += string + (props[i] || '');
    });

    return `calc(${str})`;
}

// TODO filters
