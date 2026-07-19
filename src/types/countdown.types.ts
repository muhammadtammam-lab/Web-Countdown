/**
 * Nilai countdown yang dihitung oleh hook useCountdown.
 */
export interface CountdownValue {
  /** Jumlah hari tersisa */
  days: number;
  /** Jumlah jam tersisa (0-23) */
  hours: number;
  /** Jumlah menit tersisa (0-59) */
  minutes: number;
  /** Jumlah detik tersisa (0-59) */
  seconds: number;
  /** Apakah event sudah dimulai / waktu sudah habis */
  isExpired: boolean;
}