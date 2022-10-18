/**
 * 
 * 模拟数据
 *
 */
import { Product, product } from "../config";

async function getProduct() {
    await wait();
    return product
}

function wait(delay: number = 200) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve
        }, delay);
    })
}