import { SomeInterface } from './interface-with-methods';

/**
 * Represent backdrop options.
 */
export interface BackdropOptions {
  backdrop?: boolean | 'static';
}

/**
 * Represent keyboard options.
 */
export interface KeyboardOptions {
	keyboard?: boolean;
}

/**
 * Represent all available options.
 */
export interface AllOptions extends BackdropOptions, KeyboardOptions {
  size?: string;
}

/**
 * Represent other options.
 */
export interface OtherOptions extends Pick<AllOptions, 'size'>, ScrollOptions, SomeInterface {

}
