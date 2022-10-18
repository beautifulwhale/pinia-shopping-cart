/**
 * 
 * 模拟数据
 *
 */
import { Product, product } from "../config";

function getProduct() {
    await wait()
}

function wait(delay: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve
        }, delay);
    })
}