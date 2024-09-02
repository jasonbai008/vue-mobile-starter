// 在 js 中把 px 计算出 vw 值
export const toVw = (num) => ((Number(num).toFixed(5) / 750) * 100).toFixed(5) + "vw";