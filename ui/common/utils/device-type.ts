import { BreakpointTypes } from '../types';

/**
 * Checks if the given breakpoint corresponds to a small screen.
 * @param breakpoint - The breakpoint to check.
 * @returns A boolean indicating whether the breakpoint is small.
 */
export const isSmallScreen = (breakpoint: BreakpointTypes) => ['xxs', 'xs', 'sm'].indexOf(breakpoint) > -1;

/**
 * Checks if the given breakpoint corresponds to a medium-sized screen.
 * @param breakpoint - The breakpoint to check.
 * @returns A boolean indicating whether the breakpoint is medium-sized.
 */
export const isMediumScreen = (breakpoint: BreakpointTypes) => ['md', 'lg'].indexOf(breakpoint) > -1;

/**
 * Checks if the given breakpoint corresponds to a large screen.
 * @param breakpoint - The breakpoint to check.
 * @returns A boolean indicating whether the breakpoint is large.
 */
export const isLargeScreen = (breakpoint: BreakpointTypes) => ['xl', '2xl'].indexOf(breakpoint) > -1;
