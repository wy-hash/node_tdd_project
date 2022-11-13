해야 할 일 ???

단위 테스트 작성

테스트에 대응하는 실제 코드 작성

[ex]

해야할일
데이터 베이스에 Product 저장
저장하기위한 함수를 생성
단위테스트 작성
describe("Product Controller Create", () => {
it("should have a createProduct function", () =>{
expect(typeof productController.createProduct).toBe("function");
});
});
