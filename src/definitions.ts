import type { PluginListenerHandle } from '@capacitor/core';

export interface SensorsPlugin {
  /**
   * Listens for magnetometer data change.
   */
   addListener(
    eventName: 'magnetometerChange',
    listenerFunc: (magnetometerData: SensorData) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Listens for accelerometer data change.
   */
   addListener(
    eventName: 'accelerometerChange',
    listenerFunc: (magnetometerData: SensorData) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  /**
   * Listens for gyroscope data change.
   */
   addListener(
    eventName: 'gyroscopeChange',
    listenerFunc: (magnetometerData: SensorData) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}

export interface SensorData {
  x: number;
  y: number;
  z: number;
}