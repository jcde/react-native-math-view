
import React from 'react';
import MathText, { MathTextProps } from '../MathText';
//!//import MathView from './SvgXml';
import FallbackMathView from './SvgXml';

const MathTextFallback = React.memo((props: MathTextProps) => <MathText {...props} Component={FallbackMathView} />);

export const Constants = {};
export type { MathViewProps } from '../common';
export { default as MathjaxFactory } from '../mathjax';
export * from '../MathText';
export {
    FallbackMathView as default
	,  MathTextFallback as MathText
};
