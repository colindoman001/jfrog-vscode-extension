import { IconsPaths } from '../utils/iconsPaths';

export enum Severity {
    Normal = 0,
    Pending,
    Unknown,
    Information,
    Low,
    Medium,
    High
}

export enum SeverityStrings {
    Normal = 'Scanned - No Issues',
    Pending = 'Pending Scan',
    Unknown = 'Unknown',
    Information = 'Information',
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export class SeverityUtils {
    public static getString(severity: Severity) {
        switch (severity) {
            case Severity.Normal:
                return SeverityStrings.Normal;
            case Severity.Pending:
                return SeverityStrings.Pending;
            case Severity.Unknown:
                return SeverityStrings.Unknown;
            case Severity.Information:
                return SeverityStrings.Information;
            case Severity.Low:
                return SeverityStrings.Low;
            case Severity.Medium:
                return SeverityStrings.Medium;
            case Severity.High:
                return SeverityStrings.High;
        }
    }

    public static getIcon(severity: Severity | undefined) {
        switch (severity) {
            case Severity.Pending:
                return IconsPaths.PENDING_SEVERITY;
            case Severity.Unknown:
                return IconsPaths.UNKNOWN_SEVERITY;
            case Severity.Information:
                return IconsPaths.INFORMATION_SEVERITY;
            case Severity.Low:
                return IconsPaths.LOW_SEVERITY;
            case Severity.Medium:
                return IconsPaths.MEDIUM_SEVERITY;
            case Severity.High:
                return IconsPaths.HIGH_SEVERITY;
            default:
                return IconsPaths.NORMAL_SEVERITY;
        }
    }
}
