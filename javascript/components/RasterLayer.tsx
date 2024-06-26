import {RasterLayerStyleProps} from '../utils/MaplibreStyles';
import BaseProps from '../types/BaseProps';
import useAbstractLayer, {
  BaseLayerProps,
  NativeBaseProps,
} from '../hooks/useAbstractLayer';

import React from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

const MapLibreGL = NativeModules.MLNModule;

export const NATIVE_MODULE_NAME = 'RCTMLNRasterLayer';

interface RasterLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: RasterLayerStyleProps;
}

interface NativeProps
  extends Omit<RasterLayerProps, 'style'>,
    NativeBaseProps {}

const RCTMLNRasterLayer =
  requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);

const RasterLayer: React.FC<RasterLayerProps> = ({
  sourceID = MapLibreGL.StyleSource.DefaultSourceID,
  ...props
}: RasterLayerProps) => {
  const {baseProps, setNativeLayer} = useAbstractLayer<
    RasterLayerProps,
    NativeProps
  >({
    ...props,
    sourceID,
  });

  return <RCTMLNRasterLayer ref={setNativeLayer} {...baseProps} />;
};

export default RasterLayer;
