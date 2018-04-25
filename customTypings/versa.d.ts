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

declare module "accelerometer" {
    class AccelerometerReading implements SensorReading {
        timestamp: number;
        readonly x: number;
        readonly y: number;
        readonly z: number;
    }

    class Accelerometer implements Sensor {
        readonly activated: boolean;
        addEventListener(type: "activate" | "reading", listener: (this: Accelerometer, event: Event) => any): void;
        onactivate: (this: Accelerometer, event: Event) => any;
        onerror: (this: Accelerometer, event: Event) => any;
        onreading: (this: Accelerometer, event: Event) => any;
        stop(): void;
        start(): void;
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        readonly readings: AccelerometerReading;
    }
}

declare module "appbit" {
    interface Appbit extends EventTarget {
        readonly applicationId: string;
        readonly buildId: string;
        onunload;
        readonly permissions: Permissions;
        addEventListener(): void;
        exit(): void;
    }
}

declare module "barometer" {
    class Barometer implements Sensor {
        readonly readings: BarometerReading;
        readonly activated: boolean;
        addEventListener(type: "activate" | "reading", listener: (this: Barometer, event: Event) => any): void;
        onactivate: (this: Barometer, event: Event) => any;
        onerror: (this: Barometer, event: Event) => any;
        onreading: (this: Barometer, event: Event) => any;
        stop(): void;
        start(): void;
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }

    interface BarometerReading extends SensorReading {
        readonly pressure: number;
    }
}

declare module "clock" {
    interface TickEvent {
        date: Date;
    }
    interface Clock extends EventTarget {
        granularity: "off" | "seconds" | "minutes" | "hours";
        ontick: ((this: Clock, event: TickEvent) => any)
    }
    export let ontick: ((this: Clock, event: TickEvent) => any)
    export let granularity: "off" | "seconds" | "minutes" | "hours";
}

declare module "device" {
    interface Device {
        type: string;
        modelName: string;
        modelId: string;
        firmwareVersion: string;
        lastSyncTime: string;
    }
    export let me: Device;
}

declare module "display" {
    interface Display {
        autoOff: boolean;
        brightnessOverride: number;
        on: boolean;
        onchange: ((this: Display, event: Event) => any);
        addEventListener(type: "change", listener: (this: Display, event: Event) => any): void;
        poke();
    }
    export let display: Display;
}

declare module "geolocation" {
    interface Geolocation {
        clearWatch(watchId: number): void;
        getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | undefined, options?: PositionOptions | undefined): void;
    }
    export let geolocation: Geolocation;
}

declare module "gyroscope" {
    interface GyroscopeReading extends SensorReading {
        readonly x: number;
        readonly y: number;
        readonly z: number;
    }
    class Gyroscope implements Sensor {
        readonly readings: GyroscopeReading;
        readonly activated: boolean;
        addEventListener(type: "activate" | "reading", listener: (this: Gyroscope, event: Event) => any): void;
        onactivate: (this: Gyroscope, event: Event) => any;
        onerror: (this: Gyroscope, event: Event) => any;
        onreading: (this: Gyroscope, event: Event) => any;
        stop(): void;
        start(): void;
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
}


declare module "heart-rate" {
    class HeartRateSensor implements Sensor {
        readonly activated: boolean;
        addEventListener(): void;
        onactivate: (this: HeartRateSensor, event: Event) => any;
        onerror(this: HeartRateSensor, event: Event);
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        onreading: (this: HeartRateSensor, event: Event) => any;
        stop(): void;
        start(): void;
        heartRate: number;
    }
}

declare module 'document' {
    var _document: any;
    export = _document;
}

declare interface Sensor extends EventTarget {
    readonly activated: boolean;
    addEventListener(type: "activate" | "reading", listener: (this: Sensor, event: Event) => any): void
    onactivate: (this: Sensor, event: Event) => any;
    onerror: (this: Sensor, event: Event) => any;
    onreading: (this: Sensor, event: Event) => any;
    stop(): void;
    start(): void;
}

declare interface Permissions {
    granted(permissionName: string): boolean;
}

declare interface SensorReading {
    readonly timestamp: number;
}

declare interface SensorOptions {
    readonly frequency: number;
}