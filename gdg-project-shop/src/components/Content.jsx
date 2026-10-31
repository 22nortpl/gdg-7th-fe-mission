function Content() {
  const search = () => {
    const inputText = document.querySelector(".input-group input").value;
    console.log(inputText);
  }
  return (
    <main className="content">
      <div className="input-group">
        <input type="text" placeholder="상품 입력..."></input>
        <button onClick={search} className="btn2">검색</button>
      </div>
      <div className="result">
        <p>검색 결과가 없습니다.</p>
      </div>
    </main>
  );
}

export default Content;