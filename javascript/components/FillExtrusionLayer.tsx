import {FillExtrusionLayerStyleProps} from '../utils/MaplibreStyles';
import BaseProps from '../types/BaseProps';
import useAbstractLayer, {
  BaseLayerProps,
  NativeBaseProps,
} from '../hooks/useAbstractLayer';

import React from 'react';
import {NativeModules, requireNativeComponent} from 'react-native';

const MapLibreGL = NativeModules.MLNModule;

export const NATIVE_MODULE_NAME = 'RCTMLNFillExtrusionLayer';

interface FillExtrusionLayerProps extends BaseProps, BaseLayerProps {
  /**
   * Customizable style attributes
   */
  style?: FillExtrusionLayerStyleProps;
}

interface NativeProps
  extends Omit<FillExtrusionLayerProps, 'style'>,
    NativeBaseProps {}

const RCTMLNFillExtrusionLayer =
  requireNativeComponent<NativeProps>(NATIVE_MODULE_NAME);

/**
 * FillExtrusionLayer is a style layer that renders one or more 3D extruded polygons on the map.
 */
const FillExtrusionLayer: React.FC<FillExtrusionLayerProps> = ({
  sourceID = MapLibreGL.StyleSource.DefaultSourceID,
  ...props
}: FillExtrusionLayerProps) => {
  const {baseProps, setNativeLayer} = useAbstractLayer<
    FillExtrusionLayerProps,
    NativeProps
  >({
    ...props,
    sourceID,
  });

  return <RCTMLNFillExtrusionLayer ref={setNativeLayer} {...baseProps} />;
};

export default FillExtrusionLayer;
