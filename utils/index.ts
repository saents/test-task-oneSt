export const tempImageUrl: string = "https://img.freepik.com/free-vector/non-stop-news-concept-background_1017-14192.jpg?t=st=1737833409~exp=1737837009~hmac=3bac7bd291463a0580a2a19f04e8b3090dcaf9c09110d41dfbf5df7c4b3fe959&w=900";
export const generateKey = (pre: string) : string => {
    return `${ pre }_${ new Date().getTime() }`;
}

export function getFibonacciNumber(n: number): number | bigint {
    if (n < 2) return n;
    let a = 0;
    let b = 1;
    if (n < 2) return BigInt(n);

    let prev = 0n;
    let curr = 1n;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

export function isPrime(num: number | bigint): boolean {
    if (typeof num === 'number') {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        const zero = 0n;
        const one = 1n;
        const two = 2n;
        const three = 3n;

        if (num <= one) return false;
        if (num <= three) return true;
        if (num % two === zero || num % three === zero) return false;

        let i = 5n;
        while (i * i <= num) {
            if (num % i === zero || num % (i + 2n) === zero) {
                return false;
            }
            i += 6n;
        }
        return true;
    }
}

