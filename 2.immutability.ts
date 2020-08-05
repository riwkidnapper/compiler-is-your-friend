/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
    เพราะว่า let นั้นสามารถเปลี่ยนแปลงค่าได้แต่ว่าการกำหนด const นั้นไม่ยอมให้ค่าเปลี่ยนแปลง
2) Now, make a *single* code change on line 14:
2.1) without changing the number 42;
2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
3) What did you learn from this exercise?
    Immutability คือการที่ไม่ต้องเปลี่ยนแปลงค่า
*/
function safeDivide(): number {
    const x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    x = x - 42;

    return 42 / x;
}
