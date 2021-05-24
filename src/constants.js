/**
 * Quandl API base.
 *
 * Used as the base of all API request URLs. Should be joined with
 * an appropriate code to generate the final URL.
 *
 * If your code is "ODA/PLOGSK_USD" the URL would be:
 *    http://www.quandl.com/api/v3/datasets/ODA/PLOGSK_USD
 *
 * @see https://blog.quandl.com/api-for-commodity-data
 */
export const QUANDL_API_BASE = 'http://www.quandl.com/api/v3/datasets/'


/**
 * Quandl forestry prices API codes.
 *
 * For now we are unable to access WorldBank resources
 * due to API limitations.
 *
 * @see https://blog.quandl.com/api-for-commodity-data
 */
export const QUANDL_CODE_HARD_LOGS = 'ODA/PLOGSK_USD';
export const QUANDL_CODE_HARD_SAWNWOOD = 'ODA/PSAWMAL_USD';
export const QUANDL_CODE_LUMBER_FUTURES = 'CHRIS/CME_LB1';
export const QUANDL_CODE_SOFT_LOGS = 'ODA/PLOGORE_USD';
export const QUANDL_CODE_SOFT_SAWNWOOD = 'ODA/PSAWORE_USD';
