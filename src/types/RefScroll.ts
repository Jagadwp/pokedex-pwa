// To parse this data:
//
//   import { Convert, RefScroll } from "./file";
//
//   const refScroll = Convert.toRefScroll(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface RefScroll {
    $vuetify: Vuetify;
}

export interface Vuetify {
    display: Display;
    theme: Theme;
    icons: Icons;
    locale: VuetifyLocale;
    date: DateClass;
}

export interface DateClass {
    locale: DateLocale;
}

export interface DateLocale {
    af: string;
    bg: string;
    ca: string;
    ckb: string;
    cs: string;
    de: string;
    el: string;
    en: string;
    et: string;
    fa: string;
    fi: string;
    hr: string;
    hu: string;
    he: string;
    id: string;
    it: string;
    ja: string;
    ko: string;
    lv: string;
    lt: string;
    nl: string;
    no: string;
    pl: string;
    pt: string;
    ro: string;
    ru: string;
    sk: string;
    sl: string;
    srCyrl: string;
    srLatn: string;
    sv: string;
    th: string;
    tr: string;
    az: string;
    uk: string;
    vi: string;
    zhHans: string;
    zhHant: string;
}

export interface Display {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    xxl: boolean;
    smAndUp: boolean;
    mdAndUp: boolean;
    lgAndUp: boolean;
    xlAndUp: boolean;
    smAndDown: boolean;
    mdAndDown: boolean;
    lgAndDown: boolean;
    xlAndDown: boolean;
    name: string;
    height: number;
    width: number;
    mobile: boolean;
    mobileBreakpoint: string;
    platform: { [key: string]: boolean };
    thresholds: Thresholds;
    ssr: boolean;
}

export interface Thresholds {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}

export interface Icons {
    defaultSet: string;
    sets: Sets;
    aliases: Aliases;
}

export interface Aliases {
    collapse: string;
    complete: string;
    cancel: string;
    close: string;
    delete: string;
    clear: string;
    success: string;
    info: string;
    warning: string;
    error: string;
    prev: string;
    next: string;
    checkboxOn: string;
    checkboxOff: string;
    checkboxIndeterminate: string;
    delimiter: string;
    sortAsc: string;
    sortDesc: string;
    expand: string;
    menu: string;
    subgroup: string;
    dropdown: string;
    radioOn: string;
    radioOff: string;
    edit: string;
    ratingEmpty: string;
    ratingFull: string;
    ratingHalf: string;
    loading: string;
    first: string;
    last: string;
    unfold: string;
    file: string;
    plus: string;
    minus: string;
    calendar: string;
    vuetify: Array<Array<number | string> | string>;
    "vuetify-outline": string;
}

export interface Sets {
    svg: SVG;
    class: Class;
    mdi: MDI;
}

export interface Class {
    component: ClassComponent;
}

export interface ClassComponent {
    name: string;
    props: Props;
}

export interface Props {
    icon: Icon;
    tag: Tag;
}

export interface Icon {
    type: null[];
    source: string;
}

export interface Tag {
    required: boolean;
    source: string;
}

export interface MDI {
}

export interface SVG {
    component: SVGComponent;
}

export interface SVGComponent {
    name: string;
    inheritAttrs: boolean;
    props: Props;
}

export interface VuetifyLocale {
    name: string;
    current: string;
    fallback: string;
    messages: Messages;
    isRtl: boolean;
    rtl: { [key: string]: boolean };
    rtlClasses: string;
}

export interface Messages {
    en: En;
}

export interface En {
    badge: string;
    close: string;
    dataIterator: DataIterator;
    dataTable: DataTable;
    dataFooter: DataFooter;
    dateRangeInput: DateRangeInput;
    datePicker: DatePicker;
    noDataText: string;
    carousel: Carousel;
    calendar: Calendar;
    input: EnInput;
    fileInput: FileInput;
    timePicker: TimePicker;
    pagination: Pagination;
    stepper: Stepper;
    rating: Rating;
    loading: string;
    infiniteScroll: InfiniteScroll;
}

export interface Calendar {
    moreEvents: string;
}

export interface Carousel {
    prev: string;
    next: string;
    ariaLabel: CarouselAriaLabel;
}

export interface CarouselAriaLabel {
    delimiter: string;
}

export interface DataFooter {
    itemsPerPageText: string;
    itemsPerPageAll: string;
    nextPage: string;
    prevPage: string;
    firstPage: string;
    lastPage: string;
    pageText: string;
}

export interface DataIterator {
    noResultsText: string;
    loadingText: string;
}

export interface DataTable {
    itemsPerPageText: string;
    ariaLabel: DataTableAriaLabel;
    sortBy: string;
}

export interface DataTableAriaLabel {
    sortDescending: string;
    sortAscending: string;
    sortNone: string;
    activateNone: string;
    activateDescending: string;
    activateAscending: string;
}

export interface DatePicker {
    ok: string;
    cancel: string;
    range: Range;
    title: string;
    header: string;
    input: DatePickerInput;
}

export interface DatePickerInput {
    placeholder: string;
}

export interface Range {
    title: string;
    header: string;
}

export interface DateRangeInput {
    divider: string;
}

export interface FileInput {
    counter: string;
    counterSize: string;
}

export interface InfiniteScroll {
    loadMore: string;
    empty: string;
}

export interface EnInput {
    clear: string;
    prependAction: string;
    appendAction: string;
    otp: string;
}

export interface Pagination {
    ariaLabel: PaginationAriaLabel;
}

export interface PaginationAriaLabel {
    root: string;
    next: string;
    previous: string;
    page: string;
    currentPage: string;
    first: string;
    last: string;
}

export interface Rating {
    ariaLabel: RatingAriaLabel;
}

export interface RatingAriaLabel {
    item: string;
}

export interface Stepper {
    next: string;
    prev: string;
}

export interface TimePicker {
    am: string;
    pm: string;
}

export interface Theme {
    name: string;
    themes: Themes;
    current: Current;
    computedThemes: ComputedThemes;
    themeClasses: string;
    styles: string;
    global: Global;
}

export interface ComputedThemes {
    light: Current;
    dark: Current;
}

export interface Current {
    dark: boolean;
    colors: CurrentColors;
    variables: Variables;
}

export interface CurrentColors {
    background: string;
    surface: string;
    "surface-variant": string;
    "on-surface-variant": string;
    primary: string;
    "primary-darken-1": string;
    secondary: string;
    "secondary-darken-1": string;
    error: string;
    info: string;
    success: string;
    warning: string;
    "on-background": string;
    "on-surface": string;
    "on-primary": string;
    "on-primary-darken-1": string;
    "on-secondary": string;
    "on-secondary-darken-1": string;
    "on-error": string;
    "on-info": string;
    "on-success": string;
    "on-warning": string;
}

export interface Variables {
    "border-color": string;
    "border-opacity": number;
    "high-emphasis-opacity": number;
    "medium-emphasis-opacity": number;
    "disabled-opacity": number;
    "idle-opacity": number;
    "hover-opacity": number;
    "focus-opacity": number;
    "selected-opacity": number;
    "activated-opacity": number;
    "pressed-opacity": number;
    "dragged-opacity": number;
    "theme-kbd": string;
    "theme-on-kbd": string;
    "theme-code": string;
    "theme-on-code": string;
}

export interface Global {
    name: string;
    current: Current;
}

export interface Themes {
    light: Dark;
    dark: Dark;
}

export interface Dark {
    dark: boolean;
    colors: PurpleColors;
    variables: Variables;
}

export interface PurpleColors {
    background: string;
    surface: string;
    "surface-variant": string;
    "on-surface-variant": string;
    primary: string;
    "primary-darken-1": string;
    secondary: string;
    "secondary-darken-1": string;
    error: string;
    info: string;
    success: string;
    warning: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toRefScroll(json: string): RefScroll {
        return cast(JSON.parse(json), r("RefScroll"));
    }

    public static refScrollToJson(value: RefScroll): string {
        return JSON.stringify(uncast(value, r("RefScroll")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "RefScroll": o([
        { json: "$vuetify", js: "$vuetify", typ: r("Vuetify") },
    ], false),
    "Vuetify": o([
        { json: "display", js: "display", typ: r("Display") },
        { json: "theme", js: "theme", typ: r("Theme") },
        { json: "icons", js: "icons", typ: r("Icons") },
        { json: "locale", js: "locale", typ: r("VuetifyLocale") },
        { json: "date", js: "date", typ: r("DateClass") },
    ], false),
    "DateClass": o([
        { json: "locale", js: "locale", typ: r("DateLocale") },
    ], false),
    "DateLocale": o([
        { json: "af", js: "af", typ: "" },
        { json: "bg", js: "bg", typ: "" },
        { json: "ca", js: "ca", typ: "" },
        { json: "ckb", js: "ckb", typ: "" },
        { json: "cs", js: "cs", typ: "" },
        { json: "de", js: "de", typ: "" },
        { json: "el", js: "el", typ: "" },
        { json: "en", js: "en", typ: "" },
        { json: "et", js: "et", typ: "" },
        { json: "fa", js: "fa", typ: "" },
        { json: "fi", js: "fi", typ: "" },
        { json: "hr", js: "hr", typ: "" },
        { json: "hu", js: "hu", typ: "" },
        { json: "he", js: "he", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "it", js: "it", typ: "" },
        { json: "ja", js: "ja", typ: "" },
        { json: "ko", js: "ko", typ: "" },
        { json: "lv", js: "lv", typ: "" },
        { json: "lt", js: "lt", typ: "" },
        { json: "nl", js: "nl", typ: "" },
        { json: "no", js: "no", typ: "" },
        { json: "pl", js: "pl", typ: "" },
        { json: "pt", js: "pt", typ: "" },
        { json: "ro", js: "ro", typ: "" },
        { json: "ru", js: "ru", typ: "" },
        { json: "sk", js: "sk", typ: "" },
        { json: "sl", js: "sl", typ: "" },
        { json: "srCyrl", js: "srCyrl", typ: "" },
        { json: "srLatn", js: "srLatn", typ: "" },
        { json: "sv", js: "sv", typ: "" },
        { json: "th", js: "th", typ: "" },
        { json: "tr", js: "tr", typ: "" },
        { json: "az", js: "az", typ: "" },
        { json: "uk", js: "uk", typ: "" },
        { json: "vi", js: "vi", typ: "" },
        { json: "zhHans", js: "zhHans", typ: "" },
        { json: "zhHant", js: "zhHant", typ: "" },
    ], false),
    "Display": o([
        { json: "xs", js: "xs", typ: true },
        { json: "sm", js: "sm", typ: true },
        { json: "md", js: "md", typ: true },
        { json: "lg", js: "lg", typ: true },
        { json: "xl", js: "xl", typ: true },
        { json: "xxl", js: "xxl", typ: true },
        { json: "smAndUp", js: "smAndUp", typ: true },
        { json: "mdAndUp", js: "mdAndUp", typ: true },
        { json: "lgAndUp", js: "lgAndUp", typ: true },
        { json: "xlAndUp", js: "xlAndUp", typ: true },
        { json: "smAndDown", js: "smAndDown", typ: true },
        { json: "mdAndDown", js: "mdAndDown", typ: true },
        { json: "lgAndDown", js: "lgAndDown", typ: true },
        { json: "xlAndDown", js: "xlAndDown", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "height", js: "height", typ: 0 },
        { json: "width", js: "width", typ: 0 },
        { json: "mobile", js: "mobile", typ: true },
        { json: "mobileBreakpoint", js: "mobileBreakpoint", typ: "" },
        { json: "platform", js: "platform", typ: m(true) },
        { json: "thresholds", js: "thresholds", typ: r("Thresholds") },
        { json: "ssr", js: "ssr", typ: true },
    ], false),
    "Thresholds": o([
        { json: "xs", js: "xs", typ: 0 },
        { json: "sm", js: "sm", typ: 0 },
        { json: "md", js: "md", typ: 0 },
        { json: "lg", js: "lg", typ: 0 },
        { json: "xl", js: "xl", typ: 0 },
        { json: "xxl", js: "xxl", typ: 0 },
    ], false),
    "Icons": o([
        { json: "defaultSet", js: "defaultSet", typ: "" },
        { json: "sets", js: "sets", typ: r("Sets") },
        { json: "aliases", js: "aliases", typ: r("Aliases") },
    ], false),
    "Aliases": o([
        { json: "collapse", js: "collapse", typ: "" },
        { json: "complete", js: "complete", typ: "" },
        { json: "cancel", js: "cancel", typ: "" },
        { json: "close", js: "close", typ: "" },
        { json: "delete", js: "delete", typ: "" },
        { json: "clear", js: "clear", typ: "" },
        { json: "success", js: "success", typ: "" },
        { json: "info", js: "info", typ: "" },
        { json: "warning", js: "warning", typ: "" },
        { json: "error", js: "error", typ: "" },
        { json: "prev", js: "prev", typ: "" },
        { json: "next", js: "next", typ: "" },
        { json: "checkboxOn", js: "checkboxOn", typ: "" },
        { json: "checkboxOff", js: "checkboxOff", typ: "" },
        { json: "checkboxIndeterminate", js: "checkboxIndeterminate", typ: "" },
        { json: "delimiter", js: "delimiter", typ: "" },
        { json: "sortAsc", js: "sortAsc", typ: "" },
        { json: "sortDesc", js: "sortDesc", typ: "" },
        { json: "expand", js: "expand", typ: "" },
        { json: "menu", js: "menu", typ: "" },
        { json: "subgroup", js: "subgroup", typ: "" },
        { json: "dropdown", js: "dropdown", typ: "" },
        { json: "radioOn", js: "radioOn", typ: "" },
        { json: "radioOff", js: "radioOff", typ: "" },
        { json: "edit", js: "edit", typ: "" },
        { json: "ratingEmpty", js: "ratingEmpty", typ: "" },
        { json: "ratingFull", js: "ratingFull", typ: "" },
        { json: "ratingHalf", js: "ratingHalf", typ: "" },
        { json: "loading", js: "loading", typ: "" },
        { json: "first", js: "first", typ: "" },
        { json: "last", js: "last", typ: "" },
        { json: "unfold", js: "unfold", typ: "" },
        { json: "file", js: "file", typ: "" },
        { json: "plus", js: "plus", typ: "" },
        { json: "minus", js: "minus", typ: "" },
        { json: "calendar", js: "calendar", typ: "" },
        { json: "vuetify", js: "vuetify", typ: a(u(a(u(3.14, "")), "")) },
        { json: "vuetify-outline", js: "vuetify-outline", typ: "" },
    ], false),
    "Sets": o([
        { json: "svg", js: "svg", typ: r("SVG") },
        { json: "class", js: "class", typ: r("Class") },
        { json: "mdi", js: "mdi", typ: r("MDI") },
    ], false),
    "Class": o([
        { json: "component", js: "component", typ: r("ClassComponent") },
    ], false),
    "ClassComponent": o([
        { json: "name", js: "name", typ: "" },
        { json: "props", js: "props", typ: r("Props") },
    ], false),
    "Props": o([
        { json: "icon", js: "icon", typ: r("Icon") },
        { json: "tag", js: "tag", typ: r("Tag") },
    ], false),
    "Icon": o([
        { json: "type", js: "type", typ: a(null) },
        { json: "source", js: "source", typ: "" },
    ], false),
    "Tag": o([
        { json: "required", js: "required", typ: true },
        { json: "source", js: "source", typ: "" },
    ], false),
    "MDI": o([
    ], false),
    "SVG": o([
        { json: "component", js: "component", typ: r("SVGComponent") },
    ], false),
    "SVGComponent": o([
        { json: "name", js: "name", typ: "" },
        { json: "inheritAttrs", js: "inheritAttrs", typ: true },
        { json: "props", js: "props", typ: r("Props") },
    ], false),
    "VuetifyLocale": o([
        { json: "name", js: "name", typ: "" },
        { json: "current", js: "current", typ: "" },
        { json: "fallback", js: "fallback", typ: "" },
        { json: "messages", js: "messages", typ: r("Messages") },
        { json: "isRtl", js: "isRtl", typ: true },
        { json: "rtl", js: "rtl", typ: m(true) },
        { json: "rtlClasses", js: "rtlClasses", typ: "" },
    ], false),
    "Messages": o([
        { json: "en", js: "en", typ: r("En") },
    ], false),
    "En": o([
        { json: "badge", js: "badge", typ: "" },
        { json: "close", js: "close", typ: "" },
        { json: "dataIterator", js: "dataIterator", typ: r("DataIterator") },
        { json: "dataTable", js: "dataTable", typ: r("DataTable") },
        { json: "dataFooter", js: "dataFooter", typ: r("DataFooter") },
        { json: "dateRangeInput", js: "dateRangeInput", typ: r("DateRangeInput") },
        { json: "datePicker", js: "datePicker", typ: r("DatePicker") },
        { json: "noDataText", js: "noDataText", typ: "" },
        { json: "carousel", js: "carousel", typ: r("Carousel") },
        { json: "calendar", js: "calendar", typ: r("Calendar") },
        { json: "input", js: "input", typ: r("EnInput") },
        { json: "fileInput", js: "fileInput", typ: r("FileInput") },
        { json: "timePicker", js: "timePicker", typ: r("TimePicker") },
        { json: "pagination", js: "pagination", typ: r("Pagination") },
        { json: "stepper", js: "stepper", typ: r("Stepper") },
        { json: "rating", js: "rating", typ: r("Rating") },
        { json: "loading", js: "loading", typ: "" },
        { json: "infiniteScroll", js: "infiniteScroll", typ: r("InfiniteScroll") },
    ], false),
    "Calendar": o([
        { json: "moreEvents", js: "moreEvents", typ: "" },
    ], false),
    "Carousel": o([
        { json: "prev", js: "prev", typ: "" },
        { json: "next", js: "next", typ: "" },
        { json: "ariaLabel", js: "ariaLabel", typ: r("CarouselAriaLabel") },
    ], false),
    "CarouselAriaLabel": o([
        { json: "delimiter", js: "delimiter", typ: "" },
    ], false),
    "DataFooter": o([
        { json: "itemsPerPageText", js: "itemsPerPageText", typ: "" },
        { json: "itemsPerPageAll", js: "itemsPerPageAll", typ: "" },
        { json: "nextPage", js: "nextPage", typ: "" },
        { json: "prevPage", js: "prevPage", typ: "" },
        { json: "firstPage", js: "firstPage", typ: "" },
        { json: "lastPage", js: "lastPage", typ: "" },
        { json: "pageText", js: "pageText", typ: "" },
    ], false),
    "DataIterator": o([
        { json: "noResultsText", js: "noResultsText", typ: "" },
        { json: "loadingText", js: "loadingText", typ: "" },
    ], false),
    "DataTable": o([
        { json: "itemsPerPageText", js: "itemsPerPageText", typ: "" },
        { json: "ariaLabel", js: "ariaLabel", typ: r("DataTableAriaLabel") },
        { json: "sortBy", js: "sortBy", typ: "" },
    ], false),
    "DataTableAriaLabel": o([
        { json: "sortDescending", js: "sortDescending", typ: "" },
        { json: "sortAscending", js: "sortAscending", typ: "" },
        { json: "sortNone", js: "sortNone", typ: "" },
        { json: "activateNone", js: "activateNone", typ: "" },
        { json: "activateDescending", js: "activateDescending", typ: "" },
        { json: "activateAscending", js: "activateAscending", typ: "" },
    ], false),
    "DatePicker": o([
        { json: "ok", js: "ok", typ: "" },
        { json: "cancel", js: "cancel", typ: "" },
        { json: "range", js: "range", typ: r("Range") },
        { json: "title", js: "title", typ: "" },
        { json: "header", js: "header", typ: "" },
        { json: "input", js: "input", typ: r("DatePickerInput") },
    ], false),
    "DatePickerInput": o([
        { json: "placeholder", js: "placeholder", typ: "" },
    ], false),
    "Range": o([
        { json: "title", js: "title", typ: "" },
        { json: "header", js: "header", typ: "" },
    ], false),
    "DateRangeInput": o([
        { json: "divider", js: "divider", typ: "" },
    ], false),
    "FileInput": o([
        { json: "counter", js: "counter", typ: "" },
        { json: "counterSize", js: "counterSize", typ: "" },
    ], false),
    "InfiniteScroll": o([
        { json: "loadMore", js: "loadMore", typ: "" },
        { json: "empty", js: "empty", typ: "" },
    ], false),
    "EnInput": o([
        { json: "clear", js: "clear", typ: "" },
        { json: "prependAction", js: "prependAction", typ: "" },
        { json: "appendAction", js: "appendAction", typ: "" },
        { json: "otp", js: "otp", typ: "" },
    ], false),
    "Pagination": o([
        { json: "ariaLabel", js: "ariaLabel", typ: r("PaginationAriaLabel") },
    ], false),
    "PaginationAriaLabel": o([
        { json: "root", js: "root", typ: "" },
        { json: "next", js: "next", typ: "" },
        { json: "previous", js: "previous", typ: "" },
        { json: "page", js: "page", typ: "" },
        { json: "currentPage", js: "currentPage", typ: "" },
        { json: "first", js: "first", typ: "" },
        { json: "last", js: "last", typ: "" },
    ], false),
    "Rating": o([
        { json: "ariaLabel", js: "ariaLabel", typ: r("RatingAriaLabel") },
    ], false),
    "RatingAriaLabel": o([
        { json: "item", js: "item", typ: "" },
    ], false),
    "Stepper": o([
        { json: "next", js: "next", typ: "" },
        { json: "prev", js: "prev", typ: "" },
    ], false),
    "TimePicker": o([
        { json: "am", js: "am", typ: "" },
        { json: "pm", js: "pm", typ: "" },
    ], false),
    "Theme": o([
        { json: "name", js: "name", typ: "" },
        { json: "themes", js: "themes", typ: r("Themes") },
        { json: "current", js: "current", typ: r("Current") },
        { json: "computedThemes", js: "computedThemes", typ: r("ComputedThemes") },
        { json: "themeClasses", js: "themeClasses", typ: "" },
        { json: "styles", js: "styles", typ: "" },
        { json: "global", js: "global", typ: r("Global") },
    ], false),
    "ComputedThemes": o([
        { json: "light", js: "light", typ: r("Current") },
        { json: "dark", js: "dark", typ: r("Current") },
    ], false),
    "Current": o([
        { json: "dark", js: "dark", typ: true },
        { json: "colors", js: "colors", typ: r("CurrentColors") },
        { json: "variables", js: "variables", typ: r("Variables") },
    ], false),
    "CurrentColors": o([
        { json: "background", js: "background", typ: "" },
        { json: "surface", js: "surface", typ: "" },
        { json: "surface-variant", js: "surface-variant", typ: "" },
        { json: "on-surface-variant", js: "on-surface-variant", typ: "" },
        { json: "primary", js: "primary", typ: "" },
        { json: "primary-darken-1", js: "primary-darken-1", typ: "" },
        { json: "secondary", js: "secondary", typ: "" },
        { json: "secondary-darken-1", js: "secondary-darken-1", typ: "" },
        { json: "error", js: "error", typ: "" },
        { json: "info", js: "info", typ: "" },
        { json: "success", js: "success", typ: "" },
        { json: "warning", js: "warning", typ: "" },
        { json: "on-background", js: "on-background", typ: "" },
        { json: "on-surface", js: "on-surface", typ: "" },
        { json: "on-primary", js: "on-primary", typ: "" },
        { json: "on-primary-darken-1", js: "on-primary-darken-1", typ: "" },
        { json: "on-secondary", js: "on-secondary", typ: "" },
        { json: "on-secondary-darken-1", js: "on-secondary-darken-1", typ: "" },
        { json: "on-error", js: "on-error", typ: "" },
        { json: "on-info", js: "on-info", typ: "" },
        { json: "on-success", js: "on-success", typ: "" },
        { json: "on-warning", js: "on-warning", typ: "" },
    ], false),
    "Variables": o([
        { json: "border-color", js: "border-color", typ: "" },
        { json: "border-opacity", js: "border-opacity", typ: 3.14 },
        { json: "high-emphasis-opacity", js: "high-emphasis-opacity", typ: 3.14 },
        { json: "medium-emphasis-opacity", js: "medium-emphasis-opacity", typ: 3.14 },
        { json: "disabled-opacity", js: "disabled-opacity", typ: 3.14 },
        { json: "idle-opacity", js: "idle-opacity", typ: 3.14 },
        { json: "hover-opacity", js: "hover-opacity", typ: 3.14 },
        { json: "focus-opacity", js: "focus-opacity", typ: 3.14 },
        { json: "selected-opacity", js: "selected-opacity", typ: 3.14 },
        { json: "activated-opacity", js: "activated-opacity", typ: 3.14 },
        { json: "pressed-opacity", js: "pressed-opacity", typ: 3.14 },
        { json: "dragged-opacity", js: "dragged-opacity", typ: 3.14 },
        { json: "theme-kbd", js: "theme-kbd", typ: "" },
        { json: "theme-on-kbd", js: "theme-on-kbd", typ: "" },
        { json: "theme-code", js: "theme-code", typ: "" },
        { json: "theme-on-code", js: "theme-on-code", typ: "" },
    ], false),
    "Global": o([
        { json: "name", js: "name", typ: "" },
        { json: "current", js: "current", typ: r("Current") },
    ], false),
    "Themes": o([
        { json: "light", js: "light", typ: r("Dark") },
        { json: "dark", js: "dark", typ: r("Dark") },
    ], false),
    "Dark": o([
        { json: "dark", js: "dark", typ: true },
        { json: "colors", js: "colors", typ: r("PurpleColors") },
        { json: "variables", js: "variables", typ: r("Variables") },
    ], false),
    "PurpleColors": o([
        { json: "background", js: "background", typ: "" },
        { json: "surface", js: "surface", typ: "" },
        { json: "surface-variant", js: "surface-variant", typ: "" },
        { json: "on-surface-variant", js: "on-surface-variant", typ: "" },
        { json: "primary", js: "primary", typ: "" },
        { json: "primary-darken-1", js: "primary-darken-1", typ: "" },
        { json: "secondary", js: "secondary", typ: "" },
        { json: "secondary-darken-1", js: "secondary-darken-1", typ: "" },
        { json: "error", js: "error", typ: "" },
        { json: "info", js: "info", typ: "" },
        { json: "success", js: "success", typ: "" },
        { json: "warning", js: "warning", typ: "" },
    ], false),
};
