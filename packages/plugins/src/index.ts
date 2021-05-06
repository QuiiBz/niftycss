import { Style } from '@niftycss/core';

// A type representing a plugin hook
export type PluginHook<T> = (param: T) => T;

/**
 * A type representing a plugin, which has all the hooks the plugins can use.
 */
export type NiftyPlugin = {
    hookStyles?: PluginHook<Style<{}, {}>[]>,
    hookCssValue?: PluginHook<string>,
};

/**
 * Helper method to create a plugin.
 *
 * @param plugin The plugin to create
 * @returns The created plugin
 */
export const createPlugin = (plugin: NiftyPlugin): NiftyPlugin => plugin;

export const triggerHook = <V>(
    plugins: NiftyPlugin[],
    hook: keyof NiftyPlugin,
    value: V,
): V => {
    let result = value;

    plugins.forEach((plugin) => {
        const theHook = plugin[hook];

        if (theHook) {
            // @ts-ignore
            result = theHook(result);
        }
    });

    return result;
};
