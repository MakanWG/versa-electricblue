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

declare module "haptics" {
    interface Vibration {
        start(pattern: VibrationPatternName);
        stop();
    }
    type VibrationPatternName = "bump" | "nudge" | "nudge-max" | "ping" | "confirmation" | "confirmation-max";
    export let vibration: Vibration;
}


declare module "heart-rate" {
    class HeartRateSensor implements Sensor {
        readonly readings: HeartRateSensorReading
        readonly activated: boolean;
        addEventListener(type: "activate" | "reading", listener: (this: HeartRateSensor, event: Event) => any): void;
        onactivate: (this: HeartRateSensor, event: Event) => any;
        onerror(this: HeartRateSensor, event: Event);
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
        onreading: (this: HeartRateSensor, event: Event) => any;
        stop(): void;
        start(): void;
        heartRate: number;
    }
    interface HeartRateSensorReading extends SensorReading {
        readonly heartRate: number;
    }
}

declare module "messaging" {
    class CloseEvent {
        readonly CONNECTION_LOST: number;
        readonly PEER_INITIATED: number;
        readonly SOCKET_ERROR: number;
        readonly code: CloseCode;
        readonly reason: string;
        readonly wasClean: boolean;
    }
    enum ErrorCode {
        BUFFER_FULL,
    }
    class ErrorEvent {
        readonly BUFFER_FULL: number;
        readonly code: ErrorCode;
        readonly message: string;
    }
    enum CloseCode {
        CONNECTION_LOST,
        PEER_INITIATED,
        SOCKET_ERROR,
    }
    interface MessageEvent {
        readonly data: any;
    }
    enum ReadyState {
        CLOSED,
        OPEN
    }
    class MessageSocket implements EventTarget {
        readonly CLOSED: number;
        readonly OPEN: number;
        readonly MAX_MESSAGE_SIZE: number;
        readonly bufferedAmount: number;
        onbufferedamountdecrease: ((this: MessageSocket, event: Event) => any);
        onerror: ((this: MessageSocket, event: CloseEvent) => any);
        onmessage: ((this: MessageSocket, event: MessageEvent) => any);
        onopen: ((this: MessageSocket, event: Event) => any);
        readonly readyState: ReadyState;
        send(data: any): void;
        addEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }

    interface EventMap {
        bufferedamountdecrease: Event;
        close: CloseEvent;
        error: ErrorEvent;
        message: MessageEvent;
        open: Event;
    }
    export let peerSocket: MessageSocket;
}

declare module "orientation" {
    class OrientationSensor implements Sensor {
        readonly readings: OrientationSensorReading;
        readonly activated: boolean;
        addEventListener(type: "activate" | "reading", listener: (this: OrientationSensor, event: Event) => any): void;
        onactivate: (this: OrientationSensor, event: Event) => any;
        onerror: (this: OrientationSensor, event: Event) => any;
        onreading: (this: OrientationSensor, event: Event) => any;
        stop(): void;
        start(): void;
        dispatchEvent(evt: Event): boolean;
        removeEventListener(type: string, listener?: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    interface OrientationSensorReading {
        readonly quaternion: number[];
    }
}

declare module "power" {
    interface Battery extends EventTarget {
        chargeLevel: number;
        charging: boolean;
        onchange: ((this: Battery, event: Event) => any)
        timeUntilFull: number;
        addEventListener(type: "change", listener: (this: Battery, event: Event) => any);
    }
    interface Charger extends EventTarget {
        connected: boolean;
        onchange: ((this: Charger, event: Event) => any)
        powerIsGood: boolean;
        addEventListener(type: "change", listener: (this: Charger, event: Event) => any);
    }
    export let battery: Battery;
    export let charger: Charger;
}

declare module "system" {
    interface Memory {
        readonly js: MemoryUsage;
        readonly monitor: MemoryPressureMonitor;
        readonly native: MemoryUsage;
    }
    interface MemoryPressureMonitor extends EventTarget {
        onmemorypressurechange: ((this: MemoryPressureMonitor, event: Event) => any);
        readonly pressure: "normal"|"high"|"critical";
        addEventListener(type: "memorypressurechange", listener: (this: MemoryPressureMonitor, event: Event) => any);
    }
    interface MemoryUsage{
        readonly peak:number;
        readonly total:number;
        readonly used:number;
    }
    export let memory: Memory;
}

declare module "user-activity"{
    interface Goals extends Activity{
        onreachgoal:((this: Goals, event: Event) => any);
        addEventListener(type: "reachgoal", listener: (this: Goals, event: Event) => any);
    }
    interface Today{
        adjusted:Activity;
        local:Activity;
    }
    interface Activity{
        activeMinutes:number;
        calories:number;
        distance:number;
        elevationGain:number;
        steps:number
    }
    export let goals:Goals;
    export let today:Today;
}

declare module 'document' {
    var _document: any;
    export = _document;
}

declare interface Permissions {
    granted(permissionName: "access_activity" | "access_user_profile" | "access_heart_rate" | "access_location" | "access_internet" | "run_background"): boolean;
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

declare interface SensorReading {
    readonly timestamp: number;
}

declare interface SensorOptions {
    readonly frequency: number;
}