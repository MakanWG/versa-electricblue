declare module 'clock' {
    export let granularity: string;
    export function ontick(evt: any);
}

declare module 'user-settings' {
    interface settingsPreferences{
        clockDisplay:string
    }
    export let preferences: settingsPreferences;

    interface settingsLocale{
        language:string
    }
    export let locale: settingsLocale;
}

declare module 'document' {
    var _document: any;
    export = _document;
}