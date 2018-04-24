declare module 'clock' {
    export let granularity: string;
    export function ontick(evt: any);
}

declare module 'user-settings' {
    interface settingsPreferences {
        clockDisplay: string;
    }
    export let preferences: settingsPreferences;

    interface settingsLocale {
        language: string;
    }
    export let locale: settingsLocale;
}

declare module "heart-rate" {
     class HeartRateSensor {
        onreading(): void;
        stop(): void;
        start(): void;
        heartRate:number;
    } 
}

declare module "display" {
    interface Display{
        on: boolean;
        onchange(): void;
    }
    export let display:Display;
}

declare module 'document' {
    var _document: any;
    export = _document;
}