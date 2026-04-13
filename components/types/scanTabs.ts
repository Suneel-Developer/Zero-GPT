import { ScanResultProps } from './scanResult';

export interface ScanTabsProps {
  onScan: () => void;
  isScanning: boolean;
  textLength: number;
  scanResults: ScanResultProps | null;
}

