/** 兼容性开关 */
export const Compatibility = {
  disableCssProperty: !(
    typeof CSS !== 'undefined' &&
    typeof CSS.registerProperty === 'function' &&
    CSS.supports('color', 'var(--test-var)')
  ),
};

// 从全局变量中读取兼容性开关
if (typeof window !== 'undefined' && (window as any).SOLIDX_Compatibility) {
  Object.assign(Compatibility, (window as any).SOLIDX_Compatibility);
}
