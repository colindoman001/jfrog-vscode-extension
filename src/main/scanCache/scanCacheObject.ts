import { IArtifact } from 'xray-client-js';

export class ScanCacheObject {
    private static readonly MILLISECONDS_IN_WEEK: number = 604800000;
    private static readonly NOW: number = Date.now();
    private static readonly INVALIDATE_TIME: number = ScanCacheObject.NOW - ScanCacheObject.MILLISECONDS_IN_WEEK;

    public _lastUpdated: number;

    constructor(public _artifact: IArtifact) {
        this._lastUpdated = ScanCacheObject.NOW;
    }

    public static isInvalid(lastUpdated: number): boolean {
        return lastUpdated < ScanCacheObject.INVALIDATE_TIME;
    }
}
