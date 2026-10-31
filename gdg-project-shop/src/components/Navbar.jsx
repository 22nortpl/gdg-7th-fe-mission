function Navbar() {
  const NavButton = (event) =>{
    const buttonText = event.target.innerText;

    if(buttonText === "가격 범위 필터링"){
      console.log("가격 범위 필터링 클릭");
    }
    else if(buttonText === "상품 정렬"){
      console.log("상품 정렬 클릭");
    }
    else if(buttonText === "카테고리 필터링"){
      console.log("카테고리 필터링 클릭");
    }
  }
  return (
    <header className="header">
      <a href="#">
        <img src="/gdg-favicon.svg" alt="gdg-favicon"></img>
      </a>
      <div>
        <button onClick={NavButton}>가격 범위 필터링</button>
        <button onClick={NavButton}>상품 정렬</button>
        <button onClick={NavButton}>카테고리 필터링</button>
      </div>
      <button className="btn1">관리자</button>
    </header>
  );
}

export default Navbar;