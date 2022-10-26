function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="header__logo" src="/img/logo.png" alt="logo" />
          <div>
            <h2 className="text-uppercase">React Sneakers</h2>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img className="header__icon" src="/img/trash.svg" alt="trash" />
            <span>1205 руб</span>
          </li>
          <li>
            <img className="header__icon" src="/img/user.svg" alt="trash" />
          </li>
        </ul>
      </header>

      <section className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} heigth={112} src="/img/sneakers/1.jpg" alt="green sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p>Price:</p>
                <b>12 999p</b>
              </div>
              <button className="button">
                <img width={11} heigth={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} heigth={112} src="/img/sneakers/2.jpg" alt="green sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p class="price__item">Price:</p>
                <b>12 999p</b>
              </div>
              <button className="button">
                <img width={11} heigth={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} heigth={112} src="/img/sneakers/3.jpg" alt="green sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p class="price__item">Price:</p>
                <b>12 999p</b>
              </div>
              <button className="button">
                <img width={11} heigth={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} heigth={112} src="/img/sneakers/4.jpg" alt="green sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p class="price__item">Price:</p>
                <b>12 999p</b>
              </div>
              <button className="button">
                <img width={11} heigth={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
