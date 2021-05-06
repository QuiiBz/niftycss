/**
 * A list of all available HTML elements, from MDN.
 * (https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
 */

export type HTMLRootTag =
    'html' |
    'body';

export type HTMLDocumentTag =
    'head' |
    'link' |
    'meta' |
    'style' |
    'title';

export type HTMLContentTag =
    'address' |
    'article' |
    'aside' |
    'footer' |
    'header' |
    `h${1 | 2 | 3 | 4 | 5 | 6}` |
    'main' |
    'nav' |
    'section';

export type HTMLTextTag =
    'blockquote' |
    'dd' |
    'div' |
    'dl' |
    'dt' |
    'fig-caption' |
    'figure' |
    'hr' |
    'li' |
    'ol' |
    'p' |
    'pre' |
    'ul';

export type HTMLInlineTextTag =
    'a' |
    'abbr' |
    'b' |
    'bdi' |
    'bdo' |
    'br' |
    'cite' |
    'code' |
    'data' |
    'dfn' |
    'em' |
    'i' |
    'kbd' |
    'q' |
    'rb' |
    'rp' |
    'rt' |
    'rtc' |
    'ruby' |
    's' |
    'samp' |
    'small' |
    'span' |
    'strong' |
    'sub' |
    'sup' |
    'time' |
    'u' |
    'var' |
    'wbr';

export type HTMLMediaTag =
    'area' |
    'audio' |
    'img' |
    'map' |
    'track' |
    'video';

export type HTMLEmbedTag =
    'embed' |
    'iframe' |
    'object' |
    'param' |
    'picture' |
    'portal' |
    'source';

export type HTMLSVGMathTag =
    'svg' |
    'math';

export type HTMLScriptingTag =
    'canvas' |
    'no-script' |
    'script';

export type HTMLDemarcatingTag =
    'del' |
    'ins';

export type HTMLTableTag =
    'caption' |
    'col' |
    'col-group' |
    'table' |
    'tbody' |
    'td' |
    'tfoot' |
    'th' |
    'thead' |
    'tr';

export type HTMLFormTag =
    'button' |
    'datalist' |
    'fieldset' |
    'form' |
    'input' |
    'label' |
    'legend' |
    'meter' |
    'optgroup' |
    'option' |
    'output' |
    'progress' |
    'select' |
    'textarea';

export type HTMLInteractiveTag =
    'details' |
    'dialog' |
    'menu' |
    'summary';

export type HTMLWebComponentTag =
    'slot' |
    'template';

export type HTMLTag =
    HTMLRootTag |
    HTMLDocumentTag |
    HTMLContentTag |
    HTMLTextTag |
    HTMLInlineTextTag |
    HTMLMediaTag |
    HTMLEmbedTag |
    HTMLSVGMathTag |
    HTMLScriptingTag |
    HTMLDemarcatingTag |
    HTMLTableTag |
    HTMLFormTag |
    HTMLInteractiveTag |
    HTMLWebComponentTag;

// TODO add when used
export type OptionalHTMLTag = ` ${HTMLTag}` | '';
